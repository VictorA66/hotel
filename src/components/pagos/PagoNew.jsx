import React, { useState, useEffect } from 'react';
import { getReservas } from '../../services/reserva.service';
import { getTiposPago } from '../../services/tipoPago.service';

export const PagoNew = ({ selectedPago, setSelectedPago, guardarPago }) => {
    const [fechaPago, setFechaPago] = useState('');
    const [monto, setMonto] = useState('');
    const [idTipoPago, setIdTipoPago] = useState('');
    const [idReserva, setIdReserva] = useState('');

    const [tiposPago, setTiposPago] = useState([]);
    const [reservas, setReservas] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const tipos = await getTiposPago();
            setTiposPago(tipos);
            const reservasData = await getReservas();
            setReservas(reservasData);
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (selectedPago) {
            setFechaPago(selectedPago.fechaPago);
            setMonto(selectedPago.monto);
            setIdTipoPago(selectedPago.tipoPago?.idTipoPago || '');
            setIdReserva(selectedPago.reserva?.idReserva || '');
        }
    }, [selectedPago]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const pago = {
            idPago: selectedPago ? selectedPago.idPago : undefined,
            fechaPago,
            monto,
            tipoPago: { idTipoPago },
            reserva: { idReserva },
        };

        guardarPago(pago);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{selectedPago ? 'Actualizar Pago' : 'Nuevo Pago'}</h2>

            <div>
                <label>Fecha de Pago:</label>
                <input type="datetime-local" value={fechaPago} onChange={(e) => setFechaPago(e.target.value)} required />
            </div>

            <div>
                <label>Monto:</label>
                <input type="number" value={monto} onChange={(e) => setMonto(e.target.value)} required />
            </div>

            <div>
                <label>Tipo de Pago:</label>
                <select value={idTipoPago} onChange={(e) => setIdTipoPago(e.target.value)} required>
                    <option value="">Seleccione un tipo de pago</option>
                    {tiposPago.map((tipo) => (
                        <option key={tipo.idTipoPago} value={tipo.idTipoPago}>
                            {tipo.descripcionTipoPago}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <label>Reserva:</label>
                <select value={idReserva} onChange={(e) => setIdReserva(e.target.value)} required>
                    <option value="">Seleccione una reserva</option>
                    {reservas.map((res) => (
                        <option key={res.idReserva} value={res.idReserva}>
                            Reserva {res.idReserva}
                        </option>
                    ))}
                </select>
            </div>

            <button type="submit" className="btn btn-primary">{selectedPago ? 'Actualizar' : 'Guardar'}</button>
            <button type="button" onClick={() => setSelectedPago(null)}>Cancelar</button>
        </form>
    );
};
