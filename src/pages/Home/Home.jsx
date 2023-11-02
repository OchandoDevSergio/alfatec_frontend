import "./Home.css";
import { searchUsuarios } from "../../services/apiCalls";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserCard } from "../../common/UserCard/UserCard";

export const Home = () => {
  const [usuarios, setUsuarios] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    searchUsuarios()
      .then((results) => {
        //console.log("soy results",results)
        setUsuarios(results.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    console.log("soy usuarios", usuarios)
  }, [usuarios]);

  return (
    <div className="home">
      {usuarios.length > 0 ? (
        <div className="infinite-scroll-container">

          {usuarios.map((usuario) => {

            return (
              
              <UserCard
                
                // Key es una palabra reservada en React
                key={usuario.id}
                ////////////////////////////////
                id={usuario.id}
                rol={usuario.rol}
                nhc={usuario?.Pacientes[0]?.nhc}
                nombre_paciente={usuario?.Pacientes[0]?.nombre}
                primerApellido_paciente={usuario?.Pacientes[0]?.primerApellido}
                segundoApellido_paciente={usuario?.Pacientes[0]?.segundoApellido}
                genero_paciente={usuario?.Pacientes[0]?.genero}
                fechaNacimiento_paciente={usuario?.Pacientes[0]?.fechaNacimiento}
                nifPasaporte_paciente={usuario?.Pacientes[0]?.nifPasaporte}
                calle_paciente={usuario?.Pacientes[0]?.calle}
                numero_paciente={usuario?.Pacientes[0]?.numero}
                puerta_paciente={usuario?.Pacientes[0]?.puerta}
                codigoPostal_paciente={usuario?.Pacientes[0]?.codigoPostal}
                ciudad_paciente={usuario?.Pacientes[0]?.ciudad}
                nºColegiado={usuario?.Profesionals[0]?.nºColegiado}
                nombre_profesional={usuario?.Profesionals[0]?.nombre}
                primerApellido_profesional={usuario?.Profesionals[0]?.primerApellido}
                segundoApellido_profesional={usuario?.Profesionals[0]?.segundoApellido}
                genero_profesional={usuario?.Profesionals[0]?.genero}
                fechaNacimiento_profesional={usuario?.Profesionals[0]?.fechaNacimiento}
                nifPasaporte_profesional={usuario?.Profesionals[0]?.nifPasaporte}
                tipoProfesional={usuario?.Profesionals[0]?.tipoProfesional}
                calle_profesional={usuario?.Profesionals[0]?.calle}
                numero_profesional={usuario?.Profesionals[0]?.numero}
                puerta_profesional={usuario?.Profesionals[0]?.puerta}
                codigoPostal_profesional={usuario?.Profesionals[0]?.codigoPostal}
                ciudad_profesional={usuario?.Profesionals[0]?.ciudad}
                usuario={usuario}
                //update={updateMe}
              />
            );
          })}
        </div>
      ) : (
        <div className="home">
          <div className="title">
            No se han encontrado usuarios
          </div>
        </div>
      )}
      </div>
  );
};
