import "./PacienteModify.css";
import { Input } from "../../common/Input/Input";
import { useState } from "react";
import { pacienteDataCheck } from "../pacienteSlice";
import { useSelector } from "react-redux";
import { modifyPaciente } from "../../services/apiCalls";

//import { useNavigate } from "react-router-dom";

export const PacienteModify = () => {
  //const navigate = useNavigate();
  const reduxPacienteData = useSelector(pacienteDataCheck);
  console.log("soy reduxPacienteData", reduxPacienteData)
  const [pacienteBody, setPacienteBody] = useState({
    id: reduxPacienteData?.pacienteData?.id,
    nhc:  reduxPacienteData?.pacienteData?.nhc,
    nombre:  reduxPacienteData?.pacienteData?.nombre,
    primerApellido:  reduxPacienteData?.pacienteData?.primerApellido,
    segundoApellido:  reduxPacienteData?.pacienteData?.segundoApellido,
    genero:  reduxPacienteData?.pacienteData?.genero,
    fechaNacimiento:  reduxPacienteData?.pacienteData?.fechaNacimiento,
    nifPasaporte:  reduxPacienteData?.pacienteData?.nifPasaporte,
    calle:  reduxPacienteData?.pacienteData?.calle,
    numero:  reduxPacienteData?.pacienteData?.numero,
    puerta:  reduxPacienteData?.pacienteData?.puerta,
    codigoPostal:  reduxPacienteData?.pacienteData?.codigoPostal,
    ciudad:  reduxPacienteData?.pacienteData?.ciudad
  });

  const [pacienteBodyError, setPacienteBodyError] = useState({
    nhc:  "",
    nombre:  "",
    primerApellido:  "",
    segundoApellido:  "",
    genero:  "",
    fechaNacimiento:  "",
    nifPasaporte:  "",
    calle:  "",
    numero:  "",
    puerta:  "",
    codigoPostal:  "",
    ciudad:  ""
  });

  //BIND
  const inputHandler = (e) => {
    setPacienteBody((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

  };

  const pacienteModify = () => {
    console.log("entra")
      modifyPaciente(pacienteBody)
        .then((resultado) => {
        })
        .catch((error) => console.log(error));
  };

  return (
    <>
    <div className="subHeader"></div>
    <div className="container-fluid pacienteModify">
      <div className="space"></div>
      <div className="row upRowRegister">
      <div className="col-2"></div>
        <div className="col-3 inputsCol">
          <div className="row inputRow">
            <div className="scripting">NHC</div>
            <Input
              type={"number"}
              placeholder=""
              value={pacienteBody.nhc}
              name={"nhc"}
              className="defaultInput"
              manejadora={inputHandler}
            />
          </div>
          <div className="row inputRow">
            <div className="scripting">Nombre</div>
            <Input
              type={"text"}
              placeholder=""
              value={pacienteBody.nombre}
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
              value={pacienteBody.primerApellido}
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
              value={pacienteBody.segundoApellido}
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
              value={pacienteBody.genero}
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
              value={pacienteBody.fechaNacimiento}
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
              value={pacienteBody.nifPasaporte}
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
              value={pacienteBody.ciudad}
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
              value={pacienteBody.calle}
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
              value={pacienteBody.numero}
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
              value={pacienteBody.puerta}
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
              value={pacienteBody.codigoPostal}
              name={"codigoPostal"}
              className="defaultInput"
              manejadora={inputHandler}
            />
          </div>
        </div>
        <div className="col-1"></div>
      </div>
      <div className="row downRowRegister">
        <div className="register" onClick={() => pacienteModify()}>
          Modificar el paciente
        </div>
      </div>
    </div>
    </>
  );
};