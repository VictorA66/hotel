import React from 'react';

export const ReservaList = ({ reservas, setSelectedReserva, eliminarReserva }) => {
    if (!reservas || reservas.length === 0) {
        return <div>No hay reservas registradas.</div>;
    }

    return (
        <>
            <h2>Lista de Reservas</h2>
            <table className="table table-dark table-hover table-striped" border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Usuario</th>
                        <th>Habitación</th>
                        <th>Fecha Entrada</th>
                        <th>Fecha Salida</th>
                        <th>Confirmada</th>
                        <th>Cancelada</th>
                        <th>Estado Reserva</th>
                        <th>Eliminada</th>
                        <th colSpan={2}>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {reservas.map(reserva => (
                        <tr key={reserva.idReserva}>
                            <td>{reserva.idReserva}</td>
                            <td>{reserva.usuario?.nombreUsuario || 'Sin Usuario'}</td>
                            <td>{reserva.habitacion?.numeroHabitacion || 'Sin Habitación'}</td>
                            <td>{new Date(reserva.fechaEntrada).toLocaleDateString()}</td>
                            <td>{new Date(reserva.fechaSalida).toLocaleDateString()}</td>
                            <td>{reserva.confirmada ? 'Sí' : 'No'}</td>
                            <td>{reserva.cancelada ? 'Sí' : 'No'}</td>
                            <td>{reserva.estadoReserva?.descripcionEstadoReserva || 'Sin Estado'}</td>
                            <td>{reserva.eliminada ? 'Sí' : 'No'}</td>
                            <td>
                                <button className='btn btn-danger' onClick={() => eliminarReserva(reserva.idReserva)}>
                                    Eliminar
                                </button>
                                <button onClick={() => setSelectedReserva(reserva)}>
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
