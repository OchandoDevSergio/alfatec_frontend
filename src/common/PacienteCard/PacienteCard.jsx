import "./PacienteCard.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loadPacienteData } from "../../pages/pacienteSlice";
import { pacienteDataCheck } from "../../pages/pacienteSlice";

export const PacienteCard = ({
    id,
    nhc,
    nombre,
    primerApellido,
    segundoApellido,
    genero,
    fechaNacimiento,
    nifPasaporte,
    calle,
    numero,
    puerta,
    codigoPostal,
    ciudad,
    paciente,
  //update,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reduxPacienteData = useSelector(pacienteDataCheck);
  const showPaciente = () => {
    dispatch(loadPacienteData({ pacienteData: paciente }))
  };

  useEffect(() => {
    console.log("soy pacienteDataCheck", reduxPacienteData.pacienteData)
  }, [reduxPacienteData]);

  return (
    <>
      <div variant="primary" className="userDesign" onClick={() => showPaciente(paciente)}>
          <div>
          <span className="bold">Id:</span> {id}{" "}
          <span className="bold">Número historial clínico:</span> {nhc}
          </div>
          <div>
          <span className="bold">Nombre:</span> {nombre}{" "}
          <span className="bold">Apellidos:</span> {primerApellido} {segundoApellido}{" "}
          <span className="bold">Género:</span> {genero}
          </div>
          <div>
          <span className="bold">Fecha de nacimiento:</span> {fechaNacimiento}{" "}
          <span className="bold">NIF/Pasaporte:</span> {nifPasaporte}
          </div>
          <div>Dirección:</div>
          <div>
          <span className="bold">Ciudad:</span> {ciudad}{" "}
          <span className="bold">Calle:</span> {calle}
          </div>
          <div>
          <span className="bold">Nº:</span> {numero}{" "}
          <span className="bold">Pta:</span> {puerta}{" "}
          <span className="bold">C.P:</span> {codigoPostal}   
          </div> 
      </div>
    </>
  );
};