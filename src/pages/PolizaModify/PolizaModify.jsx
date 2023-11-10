import "./PolizaModify.css";
import { Input } from "../../common/Input/Input";
import { useState } from "react";
import { useSelector } from "react-redux";
import { modifyPoliza } from "../../services/apiCalls";
import { polizaDataCheck } from "../polizaSlice";
//import { useNavigate } from "react-router-dom";

export const PolizaModify = () => {
  //const navigate = useNavigate();
  const reduxPolizaData = useSelector(polizaDataCheck);

  const [polizaBody, setPolizaBody] = useState({
    id: reduxPolizaData?.polizaData?.id,
    paciente_id:  reduxPolizaData?.polizaData?.paciente_id,
    nombreAseguradora:  reduxPolizaData?.polizaData?.nombreAseguradora,
    tipoSeguro:  reduxPolizaData?.polizaData?.tipoSeguro,
    nºTarjeta:  reduxPolizaData?.polizaData?.nºTarjeta,
  });

  const [polizaBodyError, setPolizaBodyError] = useState({
    id: reduxPolizaData?.polizaData?.id,
    paciente_id:  reduxPolizaData?.polizaData?.paciente_id,
    nombreAseguradora:  "",
    tipoSeguro:  "",
    nºTarjeta:  "",
  });

  //BIND
  const inputHandler = (e) => {
    setPolizaBody((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

  };

  const dropdownHandler = (e) => {
    setPolizaBody((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const polizaModify = () => {
      modifyPoliza(polizaBody)
        .then((resultado) => {
        })
        .catch((error) => console.log(error));
  };

  return (
    <>
    <div className="subHeader"></div>
    <div className="container-fluid polizaModify">
      <div className="space"></div>
      <div className="row upRowRegister">
      <div className="col-3"></div>
        <div className="col-6 inputsCol">
          <div className="row inputRow">
            <div className="scripting">Nombre de la compañía aseguradora</div>
            <Input
              type={"text"}
              placeholder=""
              value={polizaBody.nombreAseguradora}
              name={"nombreAseguradora"}
              className="defaultInput"
              manejadora={inputHandler}
            />
          </div>
          <div className="row inputRow">
        <div className="scripting">Tipo de seguro</div>
        {reduxPolizaData?.polizaData?.tipoSeguro === "salud" && (
            <select
            className="tipoSeguroDropdown"
            onChange={dropdownHandler}
            name={"tipoProfesional"}
            >
            <option value={reduxPolizaData?.polizaData?.tipoSeguro}>
            {"Mantener como "}{reduxPolizaData?.polizaData?.tipoSeguro}
            </option>
            <option value="familiar">Modificar a familiar</option>
            <option value="dental">Modificar a dental</option>
            </select>)}
        {reduxPolizaData?.polizaData?.tipoSeguro === "familiar" && (
            <select
            className="tipoSeguroDropdown"
            onChange={dropdownHandler}
            name={"tipoProfesional"}
            >
            <option value={reduxProfesionalData?.profesionalData?.tipoProfesional}>
            {"Mantener como "}{reduxProfesionalData?.profesionalData?.tipoProfesional}
            </option>
            <option value="salud">Modificar a salud</option>
            <option value="dental">Modificar a dental</option>
            </select>)}
        {reduxPolizaData?.polizaData?.tipoSeguro === "dental" && (
            <select
            className="tipoSeguroDropdown"
            onChange={dropdownHandler}
            name={"tipoProfesional"}
            >
            <option value={reduxPolizaData?.polizaData?.tipoSeguro}>
            {"Mantener como "}{reduxPolizaData?.polizaData?.tipoSeguro}
            </option>
            <option value="salud">Modificar a salud</option>
            <option value="familiar">Modificar a familiar</option>
            </select>)}
        {(reduxPolizaData?.polizaData?.tipoSeguro !== "salud")&&(reduxPolizaData?.polizaData?.tipoSeguro !=="familiar")&&(reduxPolizaData?.polizaData?.tipoSeguro !=="dental") && (
          <select
          className="tipoSeguroDropdown"
          onChange={dropdownHandler}
          name={"tipoProfesional"}
        >
          <option value="Selecciona un tipo de seguro">
            {" "}
            -- Selecciona un tipo de seguro --{" "}
          </option>
          <option value="salud">salud</option>
          <option value="familiar">familiar</option>
          <option value="dental">dental</option>
          </select>)}
          </div>
          <div className="row inputRow">
            <div className="scripting">Número de tarjeta</div>
            <Input
              type={"number"}
              placeholder=""
              value={polizaBody.nºTarjeta}
              name={"nºTarjeta"}
              className="defaultInput"
              manejadora={inputHandler}
            />
          </div>
        </div>
        <div className="col-3"></div>
      </div>
      <div className="row downRowRegister">
        <div className="register" onClick={() => polizaModify()}>
          Modificar la poliza
        </div>
      </div>
    </div>
    </>
  );
};