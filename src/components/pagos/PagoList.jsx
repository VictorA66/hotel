import React from 'react';

export const PagoList = ({ pagos, setSelectedPago, eliminarPago }) => {
    if (!pagos || pagos.length === 0) {
        return <div>No hay pagos registrados.</div>;
    }

    return (
        <>
            <h2>Lista de Pagos</h2>
            <table className="table table-dark table-hover table-striped" border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Fecha de Pago</th>
                        <th>Monto</th>
                        <th>Tipo de Pago</th>
                        <th>Reserva</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {pagos.map(pago => (
                        <tr key={pago.idPago}>
                            <td>{pago.idPago}</td>
                            <td>{pago.fechaPago}</td>
                            <td>{pago.monto}</td>
                            <td>{pago.tipoPago?.descripcionTipoPago}</td>
                            <td>{pago.reserva?.idReserva}</td>
                            <td>
                                <button className='btn btn-danger' onClick={() => eliminarPago(pago.idPago)}>
                                    Eliminar
                                </button>
                                <button onClick={() => setSelectedPago(pago)}>
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
