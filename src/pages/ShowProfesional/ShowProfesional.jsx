import "./ShowProfesional.css";
import { profesionalDataCheck } from "../profesionalSlice";
import { useSelector } from "react-redux";
import { useState } from "react";

export const ShowProfesional = () => {

  const reduxProfesionalData = useSelector(profesionalDataCheck);
  const [pestañas, setPestañas] = useState("personales");

    return (
      <>
      <div className="subHeader"></div>
      <div className="showProfesional">
        <div className="pestañasDiv">
        <div className="pestaña" onClick={() => setPestañas("personales")}>
        Datos personales
        </div>
        <div className="pestaña" onClick={() => setPestañas("dirección")}>
        Dirección
        </div>
        </div>
        {pestañas === "personales" && (
        <div className="profesionalShowCard">
          <div className="bold">DATOS PERSONALES PROFESIONAL</div>
          <div>
          <span className="bold">Id:</span> {reduxProfesionalData.profesionalData.id}{" "}
          <span className="bold">Tipo de profesional:</span> {reduxProfesionalData.profesionalData.tipoProfesional}
          </div>
          <div><span className="bold">Número de colegiado:</span> {reduxProfesionalData.profesionalData.nºColegiado}</div>
          <div>
          <span className="bold">Nombre:</span> {reduxProfesionalData.profesionalData.nombre}{" "}
          <span className="bold">Apellidos:</span> {reduxProfesionalData.profesionalData.primerApellido} {reduxProfesionalData.profesionalData.segundoApellido}{" "}
          <span className="bold">Género:</span> {reduxProfesionalData.profesionalData.genero}
          </div>
          <div>
          <span className="bold">Fecha de nacimiento:</span> {reduxProfesionalData.profesionalData.fechaNacimiento}{" "}
          <span className="bold">NIF/Pasaporte:</span> {reduxProfesionalData.profesionalData.nifPasaporte}
          </div>
        </div>
        )}
        {pestañas === "dirección" && (
        <div className="profesionalShowCard">
          <div className="bold">DIRECCION PROFESIONAL</div>
          <div>
          <span className="bold">Ciudad:</span> {reduxProfesionalData.profesionalData.ciudad}{" "}
          <span className="bold">Calle:</span> {reduxProfesionalData.profesionalData.calle}
          </div>
          <div>
          <span className="bold">Nº:</span> {reduxProfesionalData.profesionalData.numero}{" "}
          <span className="bold">Pta:</span> {reduxProfesionalData.profesionalData.puerta}{" "}
          <span className="bold">C.P:</span> {reduxProfesionalData.profesionalData.codigoPostal}   
          </div> 
        </div>
        )}

      </div>
      </>
    );
};