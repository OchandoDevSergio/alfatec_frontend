import "./ProfesionalModify.css";
import { Input } from "../../common/Input/Input";
import { useState } from "react";
import { profesionalDataCheck } from "../profesionalSlice";
import { useSelector } from "react-redux";
import { modifyProfesional } from "../../services/apiCalls";

//import { useNavigate } from "react-router-dom";

export const ProfesionalModify = () => {
  //const navigate = useNavigate();
  const reduxProfesionalData = useSelector(profesionalDataCheck);

  const [profesionalBody, setProfesionalBody] = useState({
    id: reduxProfesionalData?.profesionalData?.id,
    nºColegiado:  reduxProfesionalData?.profesionalData?.nºColegiado,
    nombre:  reduxProfesionalData?.profesionalData?.nombre,
    primerApellido:  reduxProfesionalData?.profesionalData?.primerApellido,
    segundoApellido:  reduxProfesionalData?.profesionalData?.segundoApellido,
    genero:  reduxProfesionalData?.profesionalData?.genero,
    fechaNacimiento:  reduxProfesionalData?.profesionalData?.fechaNacimiento,
    nifPasaporte:  reduxProfesionalData?.profesionalData?.nifPasaporte,
    tipoProfesional: reduxProfesionalData?.profesionalData?.tipoProfesional,
    calle:  reduxProfesionalData?.profesionalData?.calle,
    numero:  reduxProfesionalData?.profesionalData?.numero,
    puerta:  reduxProfesionalData?.profesionalData?.puerta,
    codigoPostal:  reduxProfesionalData?.profesionalData?.codigoPostal,
    ciudad:  reduxProfesionalData?.profesionalData?.ciudad
  });

  const [profesionalBodyError, setProfesionalBodyError] = useState({
    nºColegiado:  "",
    nombre:  "",
    primerApellido:  "",
    segundoApellido:  "",
    genero:  "",
    fechaNacimiento:  "",
    nifPasaporte:  "",
    tipoProfesional: "",
    calle:  "",
    numero:  "",
    puerta:  "",
    codigoPostal:  "",
    ciudad:  ""
  });

  //BIND
  const inputHandler = (e) => {
    setProfesionalBody((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const dropdownHandler = (e) => {
    setProfesionalBody((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const profesionalModify = () => {
      modifyProfesional(profesionalBody)
        .then((resultado) => {
        })
        .catch((error) => console.log(error));
  };

  return (
    <>
    <div className="subHeader"></div>
    <div className="container-fluid profesionalModify">
      <div className="space"></div>
      <div className="row upRowRegister">
        <div className="col-2"></div>
        <div className="col-10">
      <div className="row inputRow">
        <div className="scripting">Tipo de profesional</div>
        {reduxProfesionalData?.profesionalData?.tipoProfesional === "médico" && (
            <select
            className="tipoProfesionalDropdown"
            onChange={dropdownHandler}
            name={"tipoProfesional"}
            >
            <option value={reduxProfesionalData?.profesionalData?.tipoProfesional}>
            {"Mantener como "}{reduxProfesionalData?.profesionalData?.tipoProfesional}
            </option>
            <option value="enfermero">Modificar a enfermero</option>
            <option value="administrativo">Modificar a administrativo</option>
            </select>)}
        {reduxProfesionalData?.profesionalData?.tipoProfesional === "enfermero" && (
            <select
            className="tipoProfesionalDropdown"
            onChange={dropdownHandler}
            name={"tipoProfesional"}
            >
            <option value={reduxProfesionalData?.profesionalData?.tipoProfesional}>
            {"Mantener como "}{reduxProfesionalData?.profesionalData?.tipoProfesional}
            </option>
            <option value="médico">Modificar a médico</option>
            <option value="administrativo">Modificar a administrativo</option>
            </select>)}
        {reduxProfesionalData?.profesionalData?.tipoProfesional === "administrativo" && (
            <select
            className="tipoProfesionalDropdown"
            onChange={dropdownHandler}
            name={"tipoProfesional"}
            >
            <option value={reduxProfesionalData?.profesionalData?.tipoProfesional}>
            {"Mantener como "}{reduxProfesionalData?.profesionalData?.tipoProfesional}
            </option>
            <option value="médico">Modificar a médico</option>
            <option value="enfermero">Modificar a enfermero</option>
            </select>)}
        {(reduxProfesionalData?.profesionalData?.tipoProfesional !== "médico")&&(reduxProfesionalData?.profesionalData?.tipoProfesional !=="enfermero")&&(reduxProfesionalData?.profesionalData?.tipoProfesional !=="administrativo") && (
          <select
          className="tipoProfesionalDropdown"
          onChange={dropdownHandler}
          name={"tipoProfesional"}
        >
          <option value="Selecciona un tipo de profesional">
            {" "}
            -- Selecciona un tipo de profesional --{" "}
          </option>
          <option value="médico">médico</option>
          <option value="enfermero">enfermero</option>
          <option value="administrativo">administrativo</option>
          </select>)}
        </div>
        </div>
      <div className="col-2"></div>
        <div className="col-3 inputsCol">
          <div className="row inputRow">
            <div className="scripting">Número de colegiado</div>
            <Input
              type={"number"}
              placeholder=""
              value={profesionalBody.nºColegiado}
              name={"nºColegiado"}
              className="defaultInput"
              manejadora={inputHandler}
            />
          </div>
          <div className="row inputRow">
            <div className="scripting">Nombre</div>
            <Input
              type={"text"}
              placeholder=""
              value={profesionalBody.nombre}
              name={"nombre"}
              className="defaultInput"
              manejadora={inputHandler}
            />
          </div>
          <div className="row inputRow">
            <div className="scripting">Primer apellido</div>
            <Input
              type={"text"}
              placeholder=""
              value={profesionalBody.primerApellido}
              name={"primerApellido"}
              className="defaultInput"
              manejadora={inputHandler}
            />
          </div>
          <div className="row inputRow">
            <div className="scripting">Segundo apellido</div>
            <Input
              type={"text"}
              placeholder=""
              value={profesionalBody.segundoApellido}
              name={"segundoApellido"}
              className="defaultInput"
              manejadora={inputHandler}
            />
          </div>
        </div>
        <div className="col-3 inputsCol">
          <div className="row inputRow">
            <div className="scripting">Género</div>
            <Input
              type={"text"}
              placeholder=""
              value={profesionalBody.genero}
              name={"genero"}
              className="defaultInput"
              manejadora={inputHandler}
            />
          </div>
          <div className="row inputRow">
            <div className="scripting">Fecha de nacimiento</div>
            <Input
              type={"text"}
              placeholder=""
              value={profesionalBody.fechaNacimiento}
              name={"fechaNacimiento"}
              className="defaultInput"
              manejadora={inputHandler}
            />
          </div>
          <div className="row inputRow">
            <div className="scripting">NIF/Pasaporte</div>
            <Input
              type={"text"}
              placeholder=""
              value={profesionalBody.nifPasaporte}
              name={"nifPasaporte"}
              className="defaultInput"
              manejadora={inputHandler}
            />
          </div>
          <div className="row inputRow">
            <div className="scripting">Ciudad</div>
            <Input
              type={"text"}
              placeholder=""
              value={profesionalBody.ciudad}
              name={"ciudad"}
              className="defaultInput"
              manejadora={inputHandler}
            />
          </div>
        </div>
        <div className="col-3 inputsCol">
          <div className="row inputRow">
            <div className="scripting">Calle</div>
            <Input
              type={"text"}
              placeholder=""
              value={profesionalBody.calle}
              name={"calle"}
              className="defaultInput"
              manejadora={inputHandler}
            />
          </div>
          <div className="row inputRow">
            <div className="scripting">Número</div>
            <Input
              type={"number"}
              placeholder=""
              value={profesionalBody.numero}
              name={"numero"}
              className="defaultInput"
              manejadora={inputHandler}
            />
          </div>
          <div className="row inputRow">
            <div className="scripting">Puerta</div>
            <Input
              type={"text"}
              placeholder=""
              value={profesionalBody.puerta}
              name={"puerta"}
              className="defaultInput"
              manejadora={inputHandler}
            />
          </div>
          <div className="row inputRow">
            <div className="scripting">Código postal</div>
            <Input
              type={"number"}
              placeholder=""
              value={profesionalBody.codigoPostal}
              name={"codigoPostal"}
              className="defaultInput"
              manejadora={inputHandler}
            />
          </div>
        </div>
        <div className="col-1"></div>
      </div>
      <div className="row downRowRegister">
        <div className="modify" onClick={() => profesionalModify()}>
          Modificar el profesional
        </div>
      </div>
    </div>
    </>
  );
};