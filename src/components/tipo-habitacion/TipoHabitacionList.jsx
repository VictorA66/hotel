import React from 'react';

export const TipoHabitacionList = ({ tiposHabitacion, setSelectedTipoHabitacion, eliminarTipoHabitacion }) => {
    if (!tiposHabitacion || tiposHabitacion.length === 0) {
        return <div>No hay tipos de habitación registrados.</div>;
    }

    return (
        <>
            <h2>Lista de Tipos de Habitación</h2>
            <table className="table table-dark table-hover table-striped" border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Descripción</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {tiposHabitacion.map(tipo => (
                        <tr key={tipo.idTipoHabitacion}>
                            <td>{tipo.idTipoHabitacion}</td>
                            <td>{tipo.descripcionTipoHabitacion}</td>
                            <td>
                                <button className='btn btn-danger' onClick={() => eliminarTipoHabitacion(tipo.idTipoHabitacion)}>
                                    Eliminar
                                </button>
                                <button onClick={() => setSelectedTipoHabitacion(tipo)}>
                                    Editar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};
