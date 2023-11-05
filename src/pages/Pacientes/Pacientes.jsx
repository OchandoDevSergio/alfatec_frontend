import "./Pacientes.css";
import { searchPacientes } from "../../services/apiCalls";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PacienteCard } from "../../common/PacienteCard/PacienteCard";


export const Pacientes = () => {
  const [pacientes, setPacientes] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    searchPacientes()
      .then((results) => {
        console.log("soy results",results)
        setPacientes(results.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const updateMe = () => {
    searchPacientes()
      .then((results) => {
        console.log("soy results",results)
        setPacientes(results.data.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    console.log("soy pacientes", pacientes)
  }, [pacientes]);

  return (
    <div className="pacientes">
      <div className="subHeader">
        <div className="buttonClicker" >
        AÑADIR PACIENTE
        </div>
      </div>
      {pacientes.length > 0 ? (
        <div className="infinite-scroll-container">

          {pacientes.map((paciente) => {

            return (
              
              <PacienteCard
                
                // Key es una palabra reservada en React
                key={paciente.id}
                ////////////////////////////////
                id={paciente.id}
                nhc={paciente.nhc}
                nombre={paciente.nombre}
                primerApellido={paciente.primerApellido}
                segundoApellido={paciente.segundoApellido}
                genero={paciente.genero}
                fechaNacimiento={paciente.fechaNacimiento}
                nifPasaporte={paciente.nifPasaporte}
                calle={paciente.calle}
                numero={paciente.numero}
                puerta={paciente.puerta}
                codigoPostal={paciente.codigoPostal}
                ciudad={paciente.ciudad}
                paciente={paciente}
                update={updateMe}
              />
            );
          })}
        </div>
      ) : (
        <div className="home">
          <div className="title">
            No se han encontrado pacientes
          </div>
        </div>
      )}
      </div>
  );
};
