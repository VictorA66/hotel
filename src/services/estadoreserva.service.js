// services/estadoreserva.service.js
import axios from 'axios';

const baseUrl = 'http://localhost:8081/EstadoReserva';

export const getEstadoReserva = async () => {
  const response = await axios.get(`${baseUrl}/listar`);
  return response.data;
};

export const saveEstadoReserva = async (estadoReserva) => {
  const response = await axios.post(`${baseUrl}/guardar`, estadoReserva);
  return response.data;
};

export const updateEstadoReserva = async (estadoReserva) => {
  const response = await axios.put(`${baseUrl}/actualizar/${estadoReserva.idEstadoReserva}`, estadoReserva);
  return response.data;
};

export const deleteEstadoReserva = async (idEstadoReserva) => {
  try {
    const response = await axios.delete(`${baseUrl}/eliminar/${idEstadoReserva}`);
    return response.data;
  } catch (error) {
    console.error('Error al eliminar estado de reserva:', error);
    throw error;
  }
};
