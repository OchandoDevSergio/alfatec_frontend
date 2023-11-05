import "./ShowProfesional.css";
import { profesionalDataCheck } from "../profesionalSlice";
import { useSelector } from "react-redux";



export const ShowProfesional = () => {

  const reduxProfesionalData = useSelector(profesionalDataCheck);

    return (
      <div className="showProfesional">
        <div className="profesionalShowCard">
          <div className="bold">PROFESIONAL</div>
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
          <div className="bold">Dirección:</div>
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
      </div>
    );



};