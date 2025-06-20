import React, { useState, useEffect } from 'react';

export const EstadoReservaNew = ({ selectedEstadoReserva, setSelectedEstadoReserva, guardarEstadoReserva }) => {
    const [descripcionEstadoReserva, setDescripcionEstadoReserva] = useState('');

    useEffect(() => {
        if (selectedEstadoReserva) {
            setDescripcionEstadoReserva(selectedEstadoReserva.descripcionEstadoReserva);
        }
    }, [selectedEstadoReserva]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const estadoReserva = {
            idEstadoReserva: selectedEstadoReserva ? selectedEstadoReserva.idEstadoReserva : undefined,
            descripcionEstadoReserva,
        };

        guardarEstadoReserva(estadoReserva);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{selectedEstadoReserva ? 'Actualizar Estado de Reserva' : 'Nuevo Estado de Reserva'}</h2>
            <div>
                <label>Descripción:</label>
                <input
                    type="text"
                    value={descripcionEstadoReserva}
                    onChange={(e) => setDescripcionEstadoReserva(e.target.value)}
                    required
                />
            </div>

            <button type="submit" className='btn btn-primary'>
                {selectedEstadoReserva ? 'Actualizar' : 'Crear'}
            </button>
            <button type="button" onClick={() => setSelectedEstadoReserva(null)}>
                Volver
            </button>
        </form>
    );
};
