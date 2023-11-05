import "./ShowPaciente.css";
import { pacienteDataCheck } from "../pacienteSlice";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { searchPolizas } from "../../services/apiCalls";
import { PolizaCard } from "../../common/PolizaCard/PolizaCard";

export const ShowPaciente = () => {

  const reduxPacienteData = useSelector(pacienteDataCheck);
  const [polizas, setPolizas] = useState([]);

  useEffect(() => {
    searchPolizas(reduxPacienteData.pacienteData.id)
      .then((results) => {
        setPolizas(results.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const updateMe = () => {
    searchPolizas(reduxPacienteData.pacienteData.id)
      .then((results) => {
        setPolizas(results.data.data);
      })
      .catch((error) => console.log(error));
  };

  // useEffect(() => {
  //   console.log("soy polizas", polizas)
  // }, [polizas]);


    return (
      <>      
      <div className="subHeader">
        <div className="buttonClicker" >
        AÑADIR POLIZA AL PACIENTE
        </div>
      </div>
      <div className="showPaciente">
        <div className="pacienteShowCard">
          <div className="bold">PACIENTE</div>
          <div >
          <span className="bold">Id:</span> {reduxPacienteData.pacienteData.id}{" "}
          <span className="bold">Número historial clínico:</span> {reduxPacienteData.pacienteData.nhc}
          </div>
          <div>
          <span className="bold">Nombre:</span> {reduxPacienteData.pacienteData.nombre}{" "}
          <span className="bold">Apellidos:</span> {reduxPacienteData.pacienteData.primerApellido} {reduxPacienteData.pacienteData.segundoApellido}{" "}
          <span className="bold">Género:</span> {reduxPacienteData.pacienteData.genero}
          </div>
          <div>
          <span className="bold">Fecha de nacimiento:</span> {reduxPacienteData.pacienteData.fechaNacimiento}{" "}
          <span className="bold">NIF/Pasaporte:</span> {reduxPacienteData.pacienteData.nifPasaporte}
          </div>
          <div className="bold">Dirección:</div>
          <div>
          <span className="bold">Ciudad:</span> {reduxPacienteData.pacienteData.ciudad}{" "}
          <span className="bold">Calle:</span> {reduxPacienteData.pacienteData.calle}
          </div>
          <div>
          <span className="bold">Nº:</span> {reduxPacienteData.pacienteData.numero}{" "}
          <span className="bold">Pta:</span> {reduxPacienteData.pacienteData.puerta}{" "}
          <span className="bold">C.P:</span> {reduxPacienteData.pacienteData.codigoPostal}   
          </div>
        </div>
        <div className="lettering">POLIZAS CONTRATADAS POR EL PACIENTE</div>
        {polizas.length > 0 ? (
        <div className="infinite-scroll-container-polizas">

          {polizas.map((poliza) => {

            return (
              
              <PolizaCard
                
                // Key es una palabra reservada en React
                key={poliza.id}
                ////////////////////////////////
                id={poliza.id}
                pacienteId={poliza.paciente_id}
                aseguradora={poliza.nombreAseguradora}
                tipo={poliza.tipoSeguro}
                nºTarjeta={poliza.nºTarjeta}
                poliza={poliza}
                update={updateMe}
              />
            );
          })}
        </div>
      ) : (
        <div className="home">
          <div className="title">
            No se han encontrado polizas para este paciente
          </div>
        </div>
      )}
      </div>
      </>
    );
};