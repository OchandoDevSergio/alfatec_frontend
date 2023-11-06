import { Routes, Route } from "react-router-dom";
//import { Home } from "../Home/Home"; DESESTIMADA
import { Pacientes } from "../Pacientes/Pacientes";
import { Profesionales } from "../Profesionales/Profesionales";
import { ShowProfesional } from "../ShowProfesional/ShowProfesional";
import { ShowPaciente } from "../ShowPaciente/ShowPaciente";
import { PacienteAdd } from "../PaceinteAdd/PacienteAdd";
// import { Profile } from "../Profile/Profile";

export const Body = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Pacientes />} />
        <Route path="/profesionales" element={<Profesionales />} />
        <Route path="/mostrarpaciente" element={<ShowPaciente />} />
        <Route path="/mostrarprofesional" element={<ShowProfesional />} />
        <Route path="/pacienteadd" element={<PacienteAdd />} />
        {/* //<Route path="/profile" element={<Profile />} /> */}
      </Routes>
    </>
  );
};