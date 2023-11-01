import axios from "axios";

//USUARIOS

export const bringUsuarios = async () => {
  return await axios.get(`http://localhost:5000/usuarios`);
};

