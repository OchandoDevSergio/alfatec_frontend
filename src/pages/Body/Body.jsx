import { Routes, Route } from "react-router-dom";
//import { Home } from "../Home/Home"; DESESTIMADA
import { Pacientes } from "../Pacientes/Pacientes";
import { Profesionales } from "../Profesionales/Profesionales";
import { Register } from "../Register/Register";
// import { Profile } from "../Profile/Profile";

export const Body = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Pacientes />} />
        <Route path="/profesionales" element={<Profesionales />} />
        <Route path="/register" element={<Register />} />
        {/* //<Route path="/profile" element={<Profile />} /> */}
      </Routes>
    </>
  );
};