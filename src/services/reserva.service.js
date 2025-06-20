import axios from 'axios';

const baseUrl = 'http://localhost:8081/Reserva';

export const getReservas = async () => {
  const response = await axios.get(`${baseUrl}/listar`);
  return response.data;
};

export const saveReserva = async (reserva) => {
  const response = await axios.post(`${baseUrl}/guardar`, reserva);
  return response.data;
};

export const updateReserva = async (reserva) => {
  const response = await axios.put(`${baseUrl}/actualizar/${reserva.idReserva}`, reserva);
  return response.data;
};

export const deleteReserva = async (idReserva) => {
  try {
    const response = await axios.delete(`${baseUrl}/eliminar/${idReserva}`);
    return response.data;
  } catch (error) {
    console.error('Error al eliminar la reserva:', error);
    throw error;
  }
   }