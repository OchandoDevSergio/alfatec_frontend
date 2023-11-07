import axios from "axios";

//USUARIOS

// export const searchUsuarios = async () => {
//   return await axios.get(`http://localhost:5000/usuarios`);
// };

// export const registerUser = async (registerUserBody) => {
//   return axios.post(`http://localhost:5000/usuarios`, registerUserBody);
// };

//PACIENTES

export const searchPacientes = async () => {
  return await axios.get(`http://localhost:5000/pacientes`);
};

export const registerPaciente = async (pacienteBody) => {
  return axios.post(`http://localhost:5000/pacientes`, pacienteBody);
};

export const deletePaciente = async (pacienteId) => {
  return await axios.delete(`http://localhost:5000/pacientes/${pacienteId}`);
};

//PROFESIONALES

export const searchProfesionales = async () => {
  return await axios.get(`http://localhost:5000/profesionales`);
};

export const registerProfesional = async (profesionalBody) => {
  return axios.post(`http://localhost:5000/pacientes`, profesionalBody);
};

export const deleteMedics = async () => {
  return axios.delete(`http://localhost:5000/profesionales/medics`);
};

export const deleteProfesional = async (profesionalId) => {
  return await axios.delete(`http://localhost:5000/profesionales/${profesionalId}`);
};

//POLIZAS

export const searchPolizas = async (pacienteID) => {
  return await axios.get(`http://localhost:5000/polizas/${pacienteID}`);
};

export const deletePoliza = async (polizaId) => {
  return await axios.delete(`http://localhost:5000/polizas/${polizaId}`);
};
