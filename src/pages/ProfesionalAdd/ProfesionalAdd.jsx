import "./ProfesionalAdd.css";
import { Input } from "../../common/Input/Input";
import { useState } from "react";
import { registerProfesional } from "../../services/apiCalls";
//import { useNavigate } from "react-router-dom";

export const ProfesionalAdd = () => {
  //const navigate = useNavigate();

  const [profesionalBody, setProfesionalBody] = useState({
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


  const profesionalRegister = () => {
    console.log("entra")
      registerProfesional(profesionalBody)
        .then((resultado) => {
        })
        .catch((error) => console.log(error));
  };

  return (
    <div className="container-fluid profesionalAdd">
      <div className="space"></div>
      <div className="row upRowRegister">
      <div className="row inputRow">
        <div className="col-2"></div>
        <div className="col-10">
      <div className="row inputRow">
        <div className="scripting">Tipo de profesional</div>
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
            </select>
        </div>
        </div>
        </div>
      <div className="col-2"></div>
        <div className="col-3 inputsCol">
          <div className="row inputRow">
            <div className="scripting">Número de colegiado</div>
            <Input
              type={"number"}
              placeholder="Introduce el numero de colegiado del profesional"
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
              placeholder="Introduce el nombre"
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
              placeholder="Introduce el primer apellido"
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
              placeholder="Introduce el primer apellido"
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
              placeholder="Introduce el género"
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
              placeholder="Introduce la fecha de nacimiento"
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
              placeholder="Introduce el NIF o pasaporte"
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
              placeholder="Introduce la ciudad"
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
              placeholder="Introduce la calle"
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
              placeholder="Introduce el número"
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
              placeholder="Introduce la puerta"
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
              placeholder="Introduce el código postal"
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
        <div className="register" onClick={() => profesionalRegister()}>
          Añadir el profesional
        </div>
      </div>
    </div>
  );
};