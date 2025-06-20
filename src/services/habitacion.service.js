import axios from 'axios';

const BASE_URL = 'http://localhost:8081';

export const getHabitaciones = async () => {
    const response = await axios.get(`${BASE_URL}/Habitaciones/listar`);
    return response.data;
};

export const saveHabitacion = async (habitacion) => {
    const response = await axios.post(`${BASE_URL}/Habitaciones/guardar`, habitacion);
    return response.data;
};

export const updateHabitacion = async (habitacion) => {
    const response = await axios.put(`${BASE_URL}/Habitaciones/actualizar/${habitacion.idHabitacion}`, habitacion);
    return response.data;
};

export const deleteHabitacion = async (idHabitacion) => {
    const response = await axios.delete(`${BASE_URL}/Habitaciones/eliminar/${idHabitacion}`);
    return response.data;
};
