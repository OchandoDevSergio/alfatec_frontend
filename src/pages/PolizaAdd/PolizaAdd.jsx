import "./PolizaAdd.css";
import { Input } from "../../common/Input/Input";
import { useState, useEffect } from "react";
import { pacienteDataCheck } from "../pacienteSlice";
import { useSelector } from "react-redux";
import { registerPoliza } from "../../services/apiCalls";
//import { useNavigate } from "react-router-dom";

export const PolizaAdd = () => {
  //const navigate = useNavigate();
  const reduxPacienteData = useSelector(pacienteDataCheck);

  //console.log("soy reduxPacienteData", reduxPacienteData)

  const [polizaBody, setPolizaBody] = useState({
    paciente_id:  reduxPacienteData.pacienteData.id,
    nombreAseguradora:  "",
    tipoSeguro:  "",
    nºTarjeta:  "",
  });

  useEffect(() => {
    console.log("soy polizaBody", polizaBody)
  }, [polizaBody]);

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

  const polizaRegister = () => {
    console.log("entra")
      registerPoliza(polizaBody)
        .then((resultado) => {
        })
        .catch((error) => console.log(error));
  };

  return (
    <>
    <div className="subHeader"></div>
    <div className="container-fluid polizaAdd">
      <div className="space"></div>
      <div className="row upRowRegister">
      <div className="col-3"></div>
        <div className="col-6 inputsCol">
          <div className="row inputRow">
            <div className="scripting">Nombre de la compañía aseguradora</div>
            <Input
              type={"text"}
              placeholder="Introduce el nombre de la aseguradora"
              value={polizaBody.nombreAseguradora}
              name={"nombreAseguradora"}
              className="defaultInput"
              manejadora={inputHandler}
            />
          </div>
          <div className="row inputRow">
        <div className="scripting">Tipo de seguro</div>
          <select
            className="tipoSeguroDropdown"
            onChange={dropdownHandler}
            name={"tipoSeguro"}
          >
            <option value="Selecciona un tipo de seguro">
              {" "}
              -- Selecciona un tipo de seguro --{" "}
            </option>
            <option value="salud">salud</option>
            <option value="familiar">familiar</option>
            <option value="dental">dental</option>
            </select>
          </div>
          <div className="row inputRow">
            <div className="scripting">Número de tarjeta</div>
            <Input
              type={"number"}
              placeholder="Introduce el número de tarjeta"
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
        <div className="register" onClick={() => polizaRegister()}>
          Añadir la poliza
        </div>
      </div>
    </div>
    </>
  );
};