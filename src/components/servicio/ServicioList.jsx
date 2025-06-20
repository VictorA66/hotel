// ServicioList.jsx

export const ServicioList = ({ servicios, setSelectedServicio, eliminarServicio }) => {
    return (
        <>
            <h2>Lista de Servicios</h2>
            <table className="table table-striped table-bordered table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre del Servicio</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                        <th colSpan={2}>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {servicios.map(servicio => (
                        <tr key={servicio.idServicio}>
                            <td>{servicio.idServicio}</td>
                            <td>{servicio.nombreServicio}</td>
                            <td>{servicio.descripcionServicio}</td>
                            <td>{servicio.precioServicio}</td>
                            <td>
                                <button className="btn btn-warning" onClick={() => setSelectedServicio(servicio)}>Editar</button>
                            </td>
                            <td>
                                <button className="btn btn-danger" onClick={() => eliminarServicio(servicio.idServicio)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};
