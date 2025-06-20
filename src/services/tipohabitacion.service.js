// services/tipohabitacion.service.js
import axios from 'axios';

const baseUrl = 'http://localhost:8081/TipoHabitacion';

export const getTiposHabitacion = async () => {
  const response = await axios.get(`${baseUrl}/listar`);
  return response.data;
};

export const saveTipoHabitacion = async (tipoHabitacion) => {
  const response = await axios.post(`${baseUrl}/guardar`, tipoHabitacion);
  return response.data;
};

export const updateTipoHabitacion = async (tipoHabitacion) => {
  const response = await axios.put(`${baseUrl}/actualizar/${tipoHabitacion.idTipoHabitacion}`, tipoHabitacion);
  return response.data;
};

export const deleteTipoHabitacion = async (idTipoHabitacion) => {
  try {
    const response = await axios.delete(`${baseUrl}/eliminar/${idTipoHabitacion}`);
    return response.data;
  } catch (error) {
    console.error('Error al eliminar el tipo de habitación:', error);
    throw error;
  }
};
