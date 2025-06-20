import axios from 'axios';

const baseUrl = 'http://localhost:8081/Pago';

export const getPagos = async () => {
  const response = await axios.get(`${baseUrl}/listar`);
  return response.data;
};

export const savePago = async (pago) => {
  const response = await axios.post(`${baseUrl}/guardar`, pago);
  return response.data;
};

export const updatePago = async (pago) => {
  const response = await axios.put(`${baseUrl}/actualizar/${pago.idPago}`, pago);
  return response.data;
};

export const deletePago = async (idPago) => {
  try {
    const response = await axios.delete(`${baseUrl}/eliminar/${idPago}`);
    return response.data;
  } catch (error) {
    console.error('Error al eliminar el pago:', error);
    throw error;
  }
 }