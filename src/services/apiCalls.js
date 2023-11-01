import axios from "axios";

//USUARIOS

export const searchUsuarios = async () => {
  return await axios.get(`http://localhost:5000/usuarios`);
};

