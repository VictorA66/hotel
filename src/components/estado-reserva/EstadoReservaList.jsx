import React from 'react';

export const EstadoReservaList = ({ estadosReserva, setSelectedEstadoReserva, eliminarEstadoReserva }) => {
    if (!estadosReserva || estadosReserva.length === 0) {
        return <div>No hay estados de reserva registrados.</div>;
    }

    return (
        <>
            <h2>Lista de Estados de Reserva</h2>
            <table className="table table-dark table-hover table-striped" border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {estadosReserva.map(estado => (
                        <tr key={estado.idEstadoReserva}>
                            <td>{estado.idEstadoReserva}</td>
                            <td>{estado.descripcionEstadoReserva}</td>
                            <td>
                                <button className='btn btn-danger' onClick={() => eliminarEstadoReserva(estado.idEstadoReserva)}>
                                    Eliminar
                                </button>
                                <button onClick={() => setSelectedEstadoReserva(estado)}>
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
