import "./ProfesionalCard.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loadProfesionalData } from "../../pages/profesionalSlice";
import { profesionalDataCheck } from "../../pages/profesionalSlice";


export const ProfesionalCard = ({
    id,
    nºColegiado,
    nombre,
    primerApellido,
    segundoApellido,
    genero,
    fechaNacimiento,
    nifPasaporte,
    tipoProfesional,
    calle,
    numero,
    puerta,
    codigoPostal,
    ciudad,
    profesional,
  //update,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reduxProfesionalData = useSelector(profesionalDataCheck);
  const showProfesional = () => {
    dispatch(loadProfesionalData({ profesionalData: profesional }))
    navigate("/mostrarprofesional")
  };

  useEffect(() => {
    console.log("soy profesionalDataCheck", reduxProfesionalData.profesionalData)
  }, [reduxProfesionalData]);

  const [show, setShow] = useState(false);

  const showMe = () => {
    setShow(true);
  };



  return (
    <>
      <div variant="primary" className="userDesign" onClick={() => showProfesional(profesional)}>
          <div className="bold">PROFESIONAL</div>
          <div>
          <span className="bold">Id:</span> {id}{" "}
          <span className="bold">Tipo de profesional:</span> {tipoProfesional}
          </div>
          <div><span className="bold">Número de colegiado:</span> {nºColegiado}</div>
          <div>
          <span className="bold">Nombre:</span> {nombre}{" "}
          <span className="bold">Apellidos:</span> {primerApellido} {segundoApellido}{" "}
          <span className="bold">Género:</span> {genero}
          </div>
          <div>
          <span className="bold">Fecha de nacimiento:</span> {fechaNacimiento}{" "}
          <span className="bold">NIF/Pasaporte:</span> {nifPasaporte}
          </div>
          <div className="bold">Dirección:</div>
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
