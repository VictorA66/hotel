// src/services/tipoPago.service.js
import axios from 'axios';

const BASE_URL = 'http://localhost:8081/TipoPago';

export const getTiposPago = async () => {
  const response = await axios.get(`${BASE_URL}/listar`);
  return response.data;
};

export const saveTipoPago = async (tipoPago) => {
  const response = await axios.post(`${BASE_URL}/guardar`, tipoPago);
  return response.data;
};

export const updateTipoPago = async (tipoPago) => {
  const response = await axios.put(`${BASE_URL}/actualizar/${tipoPago.idTipoPago}`, tipoPago);
  return response.data;
};

export const deleteTipoPago = async (idTipoPago) => {
  const response = await axios.delete(`${BASE_URL}/eliminar/${idTipoPago}`);
  return response.data;
};
