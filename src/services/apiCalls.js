import axios from "axios";

//USUARIOS

export const searchUsuarios = async () => {
  return await axios.get(`http://localhost:5000/usuarios`);
};

export const registerUser = async (registerUserBody) => {
  return axios.post(`http://localhost:5000/usuarios`, registerUserBody);
};

//PACIENTES

export const registerPaciente = async (registerPacienteBody) => {
  return axios.post(`http://localhost:5000/pacientes`, registerPacienteBody);
};


//PROFESIONAL

export const registerProfesional = async (registerProfesionalBody) => {
  return axios.post(`http://localhost:5000/profesionales`, registerProfesionalBody);
};
