import axios from "axios";

//USUARIOS descartado con la refactorización sin la tabla usuarios

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

export const modifyPaciente = async (pacienteBody) => {
  return axios.put(`http://localhost:5000/pacientes`, pacienteBody);
};

//PROFESIONALES

export const searchProfesionales = async () => {
  return await axios.get(`http://localhost:5000/profesionales`);
};

export const registerProfesional = async (profesionalBody) => {
  return axios.post(`http://localhost:5000/profesionales`, profesionalBody);
};

export const deleteMedics = async () => {
  return axios.delete(`http://localhost:5000/profesionales/medics`);
};

export const deleteProfesional = async (profesionalId) => {
  return await axios.delete(`http://localhost:5000/profesionales/${profesionalId}`);
};

export const modifyProfesional = async (profesionalBody) => {
  return axios.put(`http://localhost:5000/profesionales`, profesionalBody);
};

//POLIZAS

export const searchPolizas = async (pacienteID) => {
  return await axios.get(`http://localhost:5000/polizas/${pacienteID}`);
};

export const deletePoliza = async (polizaId) => {
  return await axios.delete(`http://localhost:5000/polizas/${polizaId}`);
};

export const deletePolizasPaciente = async (pacienteId) => {
  return axios.delete(`http://localhost:5000/polizas/${pacienteId}`);
};

export const registerPoliza = async (polizaBody) => {
  return axios.post(`http://localhost:5000/polizas`, polizaBody);
};

export const modifyPoliza = async (polizaBody) => {
  return axios.put(`http://localhost:5000/polizas`, polizaBody);
};