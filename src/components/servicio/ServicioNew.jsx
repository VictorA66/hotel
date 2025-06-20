import { useState, useEffect } from 'react';

export const ServicioNew = ({ selectedServicio, setSelectedServicio, guardarServicio }) => {
    const [nombreServicio, setNombreServicio] = useState('');
    const [precioServicio, setPrecioServicio] = useState('');

    useEffect(() => {
        if (selectedServicio) {
            setNombreServicio(selectedServicio.nombreServicio || '');
            setPrecioServicio(selectedServicio.precioServicio || '');
        }
    }, [selectedServicio]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const nuevoServicio = {
            idServicio: selectedServicio ? selectedServicio.idServicio : undefined,
            nombreServicio,
            precioServicio
        };

        guardarServicio(nuevoServicio);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{selectedServicio ? 'Actualizar Servicio' : 'Nuevo Servicio'}</h2>

            <div>
                <label>Nombre del Servicio:</label>
                <input
                    type="text"
                    value={nombreServicio}
                    onChange={(e) => setNombreServicio(e.target.value)}
                    required
                />
            </div>

            <div>
                <label>Precio:</label>
                <input
                    type="number"
                    step="0.01"
                    value={precioServicio}
                    onChange={(e) => setPrecioServicio(e.target.value)}
                    required
                />
            </div>

            <button type="submit">Guardar</button>
            <button type="button" onClick={() => setSelectedServicio(null)}>Cancelar</button>
        </form>
    );
};
