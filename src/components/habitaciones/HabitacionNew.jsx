import React, { useState, useEffect } from 'react';

export const HabitacionNew = ({ selectedHabitacion, setSelectedHabitacion, onSave }) => {

    const [habitacion, setHabitacion] = useState({
        idHabitacion: '',
        numeroHabitacion: '',
        precioHabitacion: '',
        disponible: true,
        eliminado: false,
        tipoHabitacion: { idTipoHabitacion: '' }
    });

    useEffect(() => {
        if (selectedHabitacion) {
            setHabitacion({
                ...selectedHabitacion,
                tipoHabitacion: selectedHabitacion.tipoHabitacion || { idTipoHabitacion: '' }
            });
        }
    }, [selectedHabitacion]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setHabitacion({
            ...habitacion,
            [name]: value
        });
    };

    const handleChangeTipo = (e) => {
        setHabitacion({
            ...habitacion,
            tipoHabitacion: { idTipoHabitacion: e.target.value }
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(habitacion);
    };

    return (
        <div>
            <h2>{habitacion.idHabitacion ? 'Editar Habitación' : 'Nueva Habitación'}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Número:</label>
                    <input type="text" name="numeroHabitacion" value={habitacion.numeroHabitacion} onChange={handleChange} required />
                </div>
                <div>
                    <label>Precio:</label>
                    <input type="number" name="precioHabitacion" value={habitacion.precioHabitacion} onChange={handleChange} required />
                </div>
                <div>
                    <label>Disponible:</label>
                    <select name="disponible" value={habitacion.disponible} onChange={handleChange}>
                        <option value={true}>Sí</option>
                        <option value={false}>No</option>
                    </select>
                </div>
                <div>
                    <label>Eliminado:</label>
                    <select name="eliminado" value={habitacion.eliminado} onChange={handleChange}>
                        <option value={false}>No</option>
                        <option value={true}>Sí</option>
                    </select>
                </div>
                <div>
                    <label>Tipo de Habitación (ID):</label>
                    <input type="number" value={habitacion.tipoHabitacion.idTipoHabitacion} onChange={handleChangeTipo} />
                </div>
                <div>
                    <button type="submit">Guardar</button>
                    <button type="button" onClick={() => setSelectedHabitacion(null)}>Cancelar</button>
                </div>
            </form>
        </div>
    );
};
