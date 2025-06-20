import React from 'react';

export const HabitacionList = ({ habitaciones, setSelectedHabitacion, eliminarHabitacion }) => {
    if (!habitaciones || habitaciones.length === 0) {
        return <div>No hay habitaciones registradas.</div>;
    }

    return (
        <>
            <h2>Lista de Habitaciones</h2>
            <table className="table table-dark table-hover table-striped" border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Número</th>
                        <th>Precio</th>
                        <th>Disponible</th>
                        <th>Tipo de Habitación</th>
                        <th>Eliminado</th>
                        <th colSpan={2}>Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    {habitaciones.map(habitacion => (
                        <tr key={habitacion.idHabitacion}>
                            <td>{habitacion.idHabitacion}</td>
                            <td>{habitacion.numeroHabitacion}</td>
                            <td>{habitacion.precioHabitacion}</td>
                            <td>{habitacion.disponible ? "Sí" : "No"}</td>
                            <td>{habitacion.tipoHabitacion?.descripcionTipoHabitacion || "No asignado"}</td>
                            <td>{habitacion.eliminado ? "Sí" : "No"}</td>
                            <td>
                                <button
                                    className='btn btn-danger'
                                    onClick={() => eliminarHabitacion(habitacion.idHabitacion)}>
                                    Eliminar
                                </button>

                                <button onClick={() => setSelectedHabitacion(habitacion)}>
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
