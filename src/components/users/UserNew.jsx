import { useState, useEffect } from "react";
import { getRoles, getEstados } from "../../services/user.service";

export const UserNew = ({ onSave, setSelectedUsuario, selectedUsuario }) => {
    const [nombreUsuario, setNombreUsuario] = useState("");
    const [correoUsuario, setCorreoUsuario] = useState("");
    const [passwordUsuario, setPasswordUsuario] = useState("");
    const [rol, setRol] = useState(null);
    const [estado, setEstado] = useState(null);
    const [roles, setRoles] = useState([]);
    const [estados, setEstados] = useState([]);

    useEffect(() => {
        getRoles().then((rolesData) => setRoles(rolesData || []));
        getEstados().then((estadosData) => setEstados(estadosData || []));
    }, []);

    useEffect(() => {
        if (selectedUsuario) {
            setNombreUsuario(selectedUsuario.nombreUsuario || "");
            setCorreoUsuario(selectedUsuario.correoUsuario || "");
            setPasswordUsuario(selectedUsuario.passwordUsuario || "");
            setRol(selectedUsuario.rol || null);
            setEstado(selectedUsuario.estado || null);
        }
    }, [selectedUsuario]);

    const handleSave = () => {
        // Validación simple
        if (!nombreUsuario || !correoUsuario || !passwordUsuario || !rol || !estado) {
            alert("Por favor complete todos los campos antes de guardar.");
            return;
        }

        const newUser = {
            idUsuario: selectedUsuario?.idUsuario || null,
            nombreUsuario,
            correoUsuario,
            passwordUsuario,
            rol,
            estado
        };
        onSave(newUser);
    };

    const handleBack = () => {
        setSelectedUsuario(null);
    };

    return (
        <div>
            <h2>{selectedUsuario ? "Editar Usuario" : "Crear Usuario"}</h2>
            <input
                type="text"
                value={nombreUsuario}
                onChange={(e) => setNombreUsuario(e.target.value)}
                placeholder="Nombre de usuario"
            />
            <input
                type="email"
                value={correoUsuario}
                onChange={(e) => setCorreoUsuario(e.target.value)}
                placeholder="Correo electrónico"
            />
            <input
                type="password"
                value={passwordUsuario}
                onChange={(e) => setPasswordUsuario(e.target.value)}
                placeholder="Contraseña"
            />
            <select
                value={rol?.idRol || ""}
                onChange={(e) => setRol(roles.find(r => r.idRol === parseInt(e.target.value)))}
            >
                <option value="">Seleccione un Rol</option>
                {roles.map(r => (
                    <option key={r.idRol} value={r.idRol}>{r.nombreRol}</option>
                ))}
            </select>
            <select
                value={estado?.idEstado || ""}
                onChange={(e) => setEstado(estados.find(es => es.idEstado === parseInt(e.target.value)))}
            >
                <option value="">Seleccione un Estado</option>
                {estados.map(es => (
                    <option key={es.idEstado} value={es.idEstado}>{es.estadoUsuario}</option>
                ))}
            </select>
            <br />
            <button onClick={handleSave}>{selectedUsuario ? "Actualizar" : "Guardar"}</button>
            <button onClick={handleBack} style={{ marginLeft: '10px' }}>Volver</button>
        </div>
    );
};
