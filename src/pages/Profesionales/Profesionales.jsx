import "./Profesionales.css";
import { searchProfesionales } from "../../services/apiCalls";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProfesionalCard } from "../../common/ProfesionalCard/ProfesionalCard";

export const Profesionales = () => {
  const [profesionales, setProfesionales] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    searchProfesionales()
      .then((results) => {
        console.log("soy results",results)
        setProfesionales(results.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    console.log("soy profesionales", profesionales)
  }, [profesionales]);

  return (
    <div className="home">
      {profesionales.length > 0 ? (
        <div className="infinite-scroll-container">

          {profesionales.map((profesional) => {

            return (
              
              <ProfesionalCard
                
                // Key es una palabra reservada en React
                key={profesional.id}
                ////////////////////////////////
                id={profesional.id}
                nºColegiado={profesional.nºColegiado}
                nombre={profesional.nombre}
                primerApellido={profesional.primerApellido}
                segundoApellido={profesional.segundoApellido}
                genero={profesional.genero}
                fechaNacimiento={profesional.fechaNacimiento}
                nifPasaporte={profesional.nifPasaporte}
                tipoProfesional={profesional.tipoProfesional}
                calle={profesional.calle}
                numero={profesional.numero}
                puerta={profesional.puerta}
                codigoPostal={profesional.codigoPostal}
                ciudad={profesional.ciudad}
                profesional={profesional}
                //update={updateMe}
              />
            );
          })}
        </div>
      ) : (
        <div className="home">
          <div className="title">
            No se han encontrado profesionales
          </div>
        </div>
      )}
      </div>
  );
};
