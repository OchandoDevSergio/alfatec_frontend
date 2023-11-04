import "./PacienteCard.css";
import { useState } from "react";

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

  return (
    <>
      <div variant="primary" className="userDesign">
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