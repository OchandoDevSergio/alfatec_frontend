//Archivo desestimado con la refactorización 
//del proyecto en que se ha eliminado la tabla usuarios
import "./UserCard.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { Input } from "../Input/Input";
import { useSelector } from "react-redux";

export const UserCard = ({
  id,
  rol,
  nhc,
  nombre_paciente,
  primerApellido_paciente,
  segundoApellido_paciente,
  genero_paciente,
  fechaNacimiento_paciente,
  nifPasaporte_paciente,
  calle_paciente,
  numero_paciente,
  puerta_paciente,
  codigoPostal_paciente,
  ciudad_paciente,
  nºColegiado,
  nombre_profesional,
  primerApellido_profesional,
  segundoApellido_profesional,
  genero_profesional,
  fechaNacimiento_profesional,
  nifPasaporte_profesional,
  tipoProfesional,
  calle_profesional,
  numero_profesional,
  puerta_profesional,
  codigoPostal_profesional,
  ciudad_profesional,
  usuario,
  //update,
}) => {
  const [show, setShow] = useState(false);

  const showMe = () => {
    setShow(true);
  };

  return (
    <>
      <div variant="primary" className="userDesign">
        <div>
          <span className="bold">Número de identificación de usuario:</span> {id}{" "}
          <span className="bold">Rol:</span> {rol}
        </div>
        {rol === "profesional" && ( 
        <> 
          <div><span className="bold">Tipo de profesional:</span> {tipoProfesional}</div>
          <div><span className="bold">Número de colegiado:</span> {nºColegiado}</div>
          <div>
          <span className="bold">Nombre:</span> {nombre_profesional}{" "}
          <span className="bold">Apellidos:</span> {primerApellido_profesional} {segundoApellido_profesional}{" "}
          <span className="bold">Género:</span> {genero_profesional}
          </div>
          <div>
          <span className="bold">Fecha de nacimiento:</span> {fechaNacimiento_profesional}{" "}
          <span className="bold">NIF/Pasaporte:</span> {nifPasaporte_profesional}
          </div>
          <div>Dirección:</div>
          <div>
          <span className="bold">Ciudad:</span> {ciudad_profesional}{" "}
          <span className="bold">Calle:</span> {calle_profesional}
          </div>
          <div>
          <span className="bold">Nº:</span> {numero_profesional}{" "}
          <span className="bold">Pta:</span> {puerta_profesional}{" "}
          <span className="bold">C.P:</span> {codigoPostal_profesional}   
          </div> 
        </>
        )}
        {rol === "paciente" && (
        <>
          <div><span className="bold">Número historial clínico:</span> {nhc}</div>
          <div>
          <span className="bold">Nombre:</span> {nombre_paciente}{" "}
          <span className="bold">Apellidos:</span> {primerApellido_paciente} {segundoApellido_paciente}{" "}
          <span className="bold">Género:</span> {genero_paciente}
          </div>
          <div>
          <span className="bold">Fecha de nacimiento:</span> {fechaNacimiento_paciente}{" "}
          <span className="bold">NIF/Pasaporte:</span> {nifPasaporte_paciente}
          </div>
          <div>Dirección:</div>
          <div>
          <span className="bold">Ciudad:</span> {ciudad_paciente}{" "}
          <span className="bold">Calle:</span> {calle_paciente}
          </div>
          <div>
          <span className="bold">Nº:</span> {numero_paciente}{" "}
          <span className="bold">Pta:</span> {puerta_paciente}{" "}
          <span className="bold">C.P:</span> {codigoPostal_paciente}   
          </div> 
        </>
        )}
      </div>
    </>
  );
};
