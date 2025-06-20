import React, { useState, useEffect } from 'react';

export const TipoHabitacionNew = ({ selectedTipoHabitacion, setSelectedTipoHabitacion, guardarTipoHabitacion }) => {
    const [descripcionTipoHabitacion, setDescripcionTipoHabitacion] = useState('');

    useEffect(() => {
        if (selectedTipoHabitacion) {
            setDescripcionTipoHabitacion(selectedTipoHabitacion.descripcionTipoHabitacion);
        }
    }, [selectedTipoHabitacion]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const tipoHabitacion = {
            idTipoHabitacion: selectedTipoHabitacion ? selectedTipoHabitacion.idTipoHabitacion : undefined,
            descripcionTipoHabitacion,
        };

        guardarTipoHabitacion(tipoHabitacion);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{selectedTipoHabitacion ? 'Actualizar Tipo de Habitación' : 'Nuevo Tipo de Habitación'}</h2>
            <div>
                <label>Descripción:</label>
                <input
                    type="text"
                    value={descripcionTipoHabitacion}
                    onChange={(e) => setDescripcionTipoHabitacion(e.target.value)}
                    required
                />
            </div>

            <button type="submit" className='btn btn-primary'>
                {selectedTipoHabitacion ? 'Actualizar' : 'Crear'}
            </button>
            <button type="button" onClick={() => setSelectedTipoHabitacion(null)}>
                Volver
            </button>
        </form>
    );
};
