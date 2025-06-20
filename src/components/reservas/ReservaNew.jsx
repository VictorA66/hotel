import React, { useState, useEffect } from 'react';
import { getUsuarios } from '../../services/user.service';
import { getHabitaciones } from '../../services/habitacion.service';
import { getEstadoReserva } from '../../services/estadoreserva.service';

export const ReservaNew = ({ selectedReserva, setSelectedReserva, onSave }) => {

    const [usuarios, setUsuarios] = useState([]);
    const [habitaciones, setHabitaciones] = useState([]);
    const [estadosReserva, setEstadosReserva] = useState([]);

    const [reserva, setReserva] = useState({
        idReserva: '',
        usuario: { idUsuario: '' },
        habitacion: { idHabitacion: '' },
        fechaEntrada: '',
        fechaSalida: '',
        confirmada: false,
        cancelada: false,
        eliminada: false,
        estadoReserva: { idEstadoReserva: '' }
    });

    useEffect(() => {
        cargarDatosRelaciones();
    }, []);

    const cargarDatosRelaciones = async () => {
        const usuariosData = await getUsuarios();
        setUsuarios(usuariosData);

        const habitacionesData = await getHabitaciones();
        setHabitaciones(habitacionesData);

        const estadosData = await getEstadoReservas();
        setEstadosReserva(estadosData);
    };

    useEffect(() => {
        if (selectedReserva) {
            setReserva({
                ...selectedReserva,
                usuario: selectedReserva.usuario || { idUsuario: '' },
                habitacion: selectedReserva.habitacion || { idHabitacion: '' },
                estadoReserva: selectedReserva.estadoReserva || { idEstadoReserva: '' }
            });
        }
    }, [selectedReserva]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setReserva({ ...reserva, [name]: value });
    };

    const handleChangeUsuario = (e) => {
        setReserva({ ...reserva, usuario: { idUsuario: e.target.value } });
    };

    const handleChangeHabitacion = (e) => {
        setReserva({ ...reserva, habitacion: { idHabitacion: e.target.value } });
    };

    const handleChangeEstado = (e) => {
        setReserva({ ...reserva, estadoReserva: { idEstadoReserva: e.target.value } });
    };

    const handleChangeBoolean = (e) => {
        const { name, value } = e.target;
        setReserva({ ...reserva, [name]: value === 'true' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(reserva);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{reserva.idReserva ? 'Editar Reserva' : 'Nueva Reserva'}</h2>

            <div>
                <label>Usuario:</label>
                <select value={reserva.usuario.idUsuario} onChange={handleChangeUsuario} required>
                    <option value="">Seleccione</option>
                    {usuarios.map(u => (
                        <option key={u.idUsuario} value={u.idUsuario}>{u.nombreUsuario}</option>
                    ))}
                </select>
            </div>

            <div>
                <label>Habitación:</label>
                <select value={reserva.habitacion.idHabitacion} onChange={handleChangeHabitacion} required>
                    <option value="">Seleccione</option>
                    {habitaciones.map(h => (
                        <option key={h.idHabitacion} value={h.idHabitacion}>{h.numeroHabitacion}</option>
                    ))}
                </select>
            </div>

            <div>
                <label>Fecha Entrada:</label>
                <input type="datetime-local" name="fechaEntrada" value={reserva.fechaEntrada} onChange={handleChange} required />
            </div>

            <div>
                <label>Fecha Salida:</label>
                <input type="datetime-local" name="fechaSalida" value={reserva.fechaSalida} onChange={handleChange} required />
            </div>

            <div>
                <label>Confirmada:</label>
                <select name="confirmada" value={reserva.confirmada} onChange={handleChangeBoolean}>
                    <option value={true}>Sí</option>
                    <option value={false}>No</option>
                </select>
            </div>

            <div>
                <label>Cancelada:</label>
                <select name="cancelada" value={reserva.cancelada} onChange={handleChangeBoolean}>
                    <option value={true}>Sí</option>
                    <option value={false}>No</option>
                </select>
            </div>

            <div>
                <label>Eliminada:</label>
                <select name="eliminada" value={reserva.eliminada} onChange={handleChangeBoolean}>
                    <option value={true}>Sí</option>
                    <option value={false}>No</option>
                </select>
            </div>

            <div>
                <label>Estado de Reserva:</label>
                <select value={reserva.estadoReserva.idEstadoReserva} onChange={handleChangeEstado} required>
                    <option value="">Seleccione</option>
                    {estadosReserva.map(e => (
                        <option key={e.idEstadoReserva} value={e.idEstadoReserva}>{e.descripcionEstadoReserva}</option>
                    ))}
                </select>
            </div>

            <div>
                <button type="submit" className='btn btn-primary'>
                    {reserva.idReserva ? 'Actualizar' : 'Crear'}
                </button>
                <button type="button" onClick={() => setSelectedReserva(null)}>Cancelar</button>
            </div>
        </form>
    );
};
