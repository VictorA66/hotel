import axios from 'axios';

const BASE_URL = 'http://localhost:8081/api';

export const getUsuarios = async () => {
    const response = await axios.get(`${BASE_URL}/Usuarios/listar`);
    return response.data;
};

export const saveUsuario = async (usuario) => {
    const response = await axios.post(`${BASE_URL}/Usuarios/guardar`, usuario);
    return response.data;
};

export const updateUsuario = async (usuario) => {
    const response = await axios.put(`${BASE_URL}/Usuarios/actualizar/${usuario.idUsuario}`, usuario);
    return response.data;
};

export const deleteUsuario = async (idUsuario) => {
    const response = await axios.delete(`${BASE_URL}/Usuarios/eliminar/${idUsuario}`);
    return response.data;
};

export const getRoles = async () => {
    const response = await axios.get(`${BASE_URL}/Roles/listar`);
    return response.data;
};

export const getEstados = async () => {
    const response = await axios.get(`${BASE_URL}/Estados/listar`);
    return response.data;
};
