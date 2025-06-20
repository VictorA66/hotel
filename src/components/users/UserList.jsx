export const UserList = ({ usuarios, setSelectedUsuario, eliminarUsuario }) => {
    return (
        <>
            <h2>Lista de Usuarios</h2>
            <table className="table table-striped table-hover table-bordered" align="center">
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Rol</th>
                        <th>Estado</th>
                        <th colSpan={2}>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map(usuario => (
                        <tr key={usuario.idUsuario}>
                            <td>{usuario.idUsuario}</td>
                            <td>{usuario.nombreUsuario}</td>
                            <td>{usuario.correoUsuario}</td>
                            <td>{usuario.rol?.nombreRol || 'N/D'}</td>
                            <td>{usuario.estado?.estadoUsuario || 'N/D'}</td>
                            <td>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => setSelectedUsuario(usuario)}
                                >
                                    Editar
                                </button>
                            </td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => eliminarUsuario(usuario.idUsuario)}
                                >
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};
