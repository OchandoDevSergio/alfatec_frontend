import "./Register.css";
import { Input } from "../../common/Input/Input";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
//import { registerUser } from "../../services/apiCalls";

export const Register = () => {

  const [registerUserBody, setRegisterUserBody] = useState({
    rol: "",
  });

  const [registerPacienteBody, setRegisterPacienteBody] = useState({
    usuario_id: "",
    nhc: "",
    nombre: "",
    primerApellido: "",
    segundoApellido: "",
    genero: "",
    fechaNacimiento: "",
    nifPasaporte: "",
    calle: "",
    numero: "",
    puerta: "",
    codigoPostal: "",
    ciudad: ""
  });

  const [registerProfesionalBody, setRegisterProfesionalBody] = useState({
    usuario_id: "",
    nºColegiado: "",
    nombre: "",
    primerApellido: "",
    segundoApellido: "",
    genero: "",
    fechaNacimiento: "",
    nifPasaporte: "",
    tipoProfesional: "",
    calle: "",
    numero: "",
    puerta: "",
    codigoPostal: "",
    ciudad: ""
  });

  //BIND
//   const userInputHandler = (e) => {
//     setRegisterUserBody(() => ({
//       rol: e.target.value,
//     }));
//   };

  const pacienteInputHandler = (e) => {
    setRegisterPacienteBody((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const profesionalInputHandler = (e) => {
    setRegisterProfesionalBody((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // const registerElPaciente = () => {
  //   if ((registerPacienteBody.nhc !== "")&&(registerPacienteBody.nombre !== "")&&(registerPacienteBody.primerApellido !== "")) {
  //       setRegisterUserBody({rol: "paciente"})
  //       registerUser(registerUserBody)
  //       .then((resultado) => {
        
  //       })
  //       .catch((error) => console.log(error));

  //       registerPaciente(registerPacienteBody)
  //       .then((resultado) => {
        
  //       })
  //       .catch((error) => console.log(error));
        
  //   } else {
  //     console.log("Los campos obligatorios no han sido introducidos");
  //   }
  // };

  const registerElProfesional = () => {
    if ((registerProfesionalBody.nºColegiado !== "")&&(registerProfesionalBody.nombre !== "")&&(registerProfesionalBody.primerApellido !== "")) {
        setRegisterUserBody({rol: "profesional"})
        registerUser(registerUserBody)
        .then((resultado) => {
        
        })
        .catch((error) => console.log(error));

        registerProfesional(registerProfesionalBody)
        .then((resultado) => {
        
        })
        .catch((error) => console.log(error));

    } else {
      console.log("Los campos obligatorios no han sido introducidos");
    }
  };

  return (
    <div className="container-fluid register">
      <div className="space"></div>
      <div className="row upRowRegister">
        <div className="col-1"></div>
        <div className="col-5">
          <div className="row inputRow">
            <div className="scripting">Name</div>
            <Input
              type={"text"}
              placeholder="Introduce your name"
              value={registerBody.name}
              name={"name"}
              className="defaultInput"
              manejadora={inputHandler}
            />
          </div>
          <div className="row inputRow">
            <div className="scripting">e-mail</div>
            <Input
              type={"email"}
              placeholder="Introduce your e-mail"
              value={registerBody.email}
              name={"email"}
              className="defaultInput"
              manejadora={inputHandler}
            />
          </div>
          <div className="row inputRow">
            <div className="scripting">Phone</div>
            <Input
              type={"number"}
              placeholder="Introduce your phone number"
              value={registerBody.phone}
              name={"phone"}
              className="defaultInput"
              manejadora={inputHandler}
            />
          </div>
        </div>
        <div className="col-5">
          <div className="row inputRow">
            <div className="scripting">Surnames</div>
            <Input
              type={"text"}
              placeholder="Introduce your surnames"
              value={registerBody.surnames}
              name={"surnames"}
              className="defaultInput"
              manejadora={inputHandler}
            />
          </div>
          <div className="row inputRow">
            <div className="scripting">Password</div>
            <Input
              type={"password"}
              placeholder="Introduce your password"
              value={registerBody.password}
              name={"password"}
              className="defaultInput"
              manejadora={inputHandler}
            />
          </div>
          <div className="row inputRow">
            <div className="scripting">Password</div>
            <Input
              type={"password"}
              placeholder="Repeat your password"
              value={registerBody.password_repeat}
              name={"password_repeat"}
              className="defaultInput"
              manejadora={inputHandler}
            />
          </div>
          <div className="row inputRow"></div>
        </div>
        <div className="col-1"></div>
      </div>
      <div className="row downRowRegister">
        <div className="buttonBody" onClick={() => registerMe()}>
          Register
        </div>
      </div>
    </div>
  );
};
