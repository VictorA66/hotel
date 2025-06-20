// services/servicio.service.js
import axios from 'axios';

const baseUrl = 'http://localhost:8081/Servicio';

export const getServicios = async () => {
  const response = await axios.get(`${baseUrl}/listar`);
  return response.data;
};

export const saveServicio = async (servicio) => {
  const response = await axios.post(`${baseUrl}/guardar`, servicio);
  return response.data;
};

export const updateServicio = async (servicio) => {
  const response = await axios.put(`${baseUrl}/actualizar/${servicio.idServicio}`, servicio);
  return response.data;
};

export const deleteServicio = async (idServicio) => {
  try {
    const response = await axios.delete(`${baseUrl}/eliminar/${idServicio}`);
    return response.data;
  } catch (error) {
    console.error('Error al eliminar el servicio:', error);
    throw error;
  }
};
