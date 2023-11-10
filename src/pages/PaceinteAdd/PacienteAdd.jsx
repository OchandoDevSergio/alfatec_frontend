import "./PacienteAdd.css";
import { Input } from "../../common/Input/Input";
import { useState } from "react";
import { registerPaciente } from "../../services/apiCalls";
//import { useNavigate } from "react-router-dom";

export const PacienteAdd = () => {
  //const navigate = useNavigate();

  const [pacienteBody, setPacienteBody] = useState({
    nhc:  "",
    nombre:  "",
    primerApellido:  "",
    segundoApellido:  " ",
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

  const pacienteRegister = () => {
    if((pacienteBody.nhc!=="")&&(pacienteBody.nombre!=="")&&(pacienteBody.primerApellido!=="") ) {
      registerPaciente(pacienteBody)
      .then((resultado) => {
      })
      .catch((error) => console.log(error));
    }

  };

  return (
    <>
    <div className="subHeader"></div>
    <div className="container-fluid pacienteAdd">
      <div className="space"></div>
      <div className="row upRowRegister">
      <div className="col-2"></div>
        <div className="col-3 inputsCol">
          <div className="row inputRow">
            <div className="scripting">NHC</div>
            <Input
              type={"number"}
              placeholder="Introduce el numero de historial de paciente"
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
              placeholder="Introduce el nombre"
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
              placeholder="Introduce el primer apellido"
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
              placeholder="Introduce el segundo apellido"
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
              placeholder="Introduce el género"
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
              placeholder="Introduce la fecha de nacimiento"
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
              placeholder="Introduce el NIF o pasaporte"
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
              placeholder="Introduce la ciudad"
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
              placeholder="Introduce la calle"
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
              placeholder="Introduce el número"
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
              placeholder="Introduce la puerta"
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
              placeholder="Introduce el código postal"
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
        <div className="register" onClick={() => pacienteRegister()}>
          Añadir el paciente
        </div>
      </div>
    </div>
    </>
  );
};