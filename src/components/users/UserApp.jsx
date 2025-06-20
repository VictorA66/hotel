import { useEffect, useState } from 'react';
import { getUsuarios, saveUsuario, deleteUsuario } from '../../services/user.service';
import { UserList } from './userList'; 
import { UserNew } from './userNew';   

export const UserApp = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [selectedUsuario, setSelectedUsuario] = useState(null);
    const [mensaje, setMensaje] = useState('');

    const recuperarUsuarios = async () => {
        const data = await getUsuarios();
        setUsuarios(data);
    };

    const guardarUsuario = async (usuario) => {
        await saveUsuario(usuario);
        setMensaje(`Usuario ${usuario.idUsuario ? 'actualizado' : 'guardado'} correctamente.`);
        setSelectedUsuario(null);
        recuperarUsuarios();
    };

    const eliminarUsuario = async (id) => {
        await deleteUsuario(id);
        setMensaje('Usuario eliminado correctamente.');
        recuperarUsuarios();
    };

    useEffect(() => {
        recuperarUsuarios();
    }, []);

    // Ocultar el mensaje automáticamente
    useEffect(() => {
        if (mensaje) {
            const timer = setTimeout(() => setMensaje(''), 3000);
            return () => clearTimeout(timer);
        }
    }, [mensaje]);

    return (
        <div>
            <h1>Usuarios</h1>
            {mensaje && <div style={{ color: 'green' }}>{mensaje}</div>}
            {selectedUsuario ? (
                <UserNew
                    selectedUsuario={selectedUsuario}
                    setSelectedUsuario={setSelectedUsuario}
                    onSave={guardarUsuario}  
                />
            ) : (
                <div>
                    <button onClick={() => setSelectedUsuario({})}>Crear Usuario</button>
                    <UserList usuarios={usuarios} setSelectedUsuario={setSelectedUsuario} eliminarUsuario={eliminarUsuario} />
                </div>
            )}
        </div>
    );
};
