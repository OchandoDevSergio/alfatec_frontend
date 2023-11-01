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
        setUsuarios();
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {usuarios.length > 0 ? (
        <div className="infinite-scroll-container">
          <div className="row spaceRow"></div>

          {usuarios.map((usuario) => {
            return (
              <UserCard
                // Key es una palabra reservada en React
                key={usuario.id}
                ////////////////////////////////
                id={usuario.id}
                rol={usuario.rol}
                nhc={usuario.Paciente.nhc}
                nombre_paciente={usuario.Paciente.nombre}
                primerApellido_paciente={usuario.Paciente.primerApellido}
                segundoApellido_paciente={usuario.Paciente.segundoApellido}
                genero_paciente={usuario.Paciente.genero}
                fechaNacimiento_paciente={usuario.Paciente.fechaNacimiento}
                nifPasaporte_paciente={usuario.Paciente.nifPasaporte}
                calle_paciente={usuario.Paciente.calle}
                numero_paciente={usuario.Paciente.numero}
                puerta_paciente={usuario.Paciente.puerta}
                codigoPostal_paciente={usuario.Paciente.codigoPostal}
                ciudad_paciente={usuario.Paciente.ciudad}
                nºColegiado={usuario.Profesional.nºColegiado}
                nombre_profesional={usuario.Profesional.nombre}
                primerApellido_profesional={usuario.Profesional.primerApellido}
                segundoApellido_profesional={usuario.Profesional.segundoApellido}
                genero_profesional={usuario.Profesional.genero}
                fechaNacimiento_profesional={usuario.Profesional.fechaNacimiento}
                nifPasaporte_profesional={usuario.Profesional.nifPasaporte}
                tipoProfesional={usuario.Profesional.tipoProfesional}
                calle_profesional={usuario.Profesional.calle}
                numero_profesional={usuario.Profesional.numero}
                puerta_profesional={usuario.Profesional.puerta}
                codigoPostal_profesional={usuario.Profesional.codigoPostal}
                ciudad_profesional={usuario.Profesional.ciudad}
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
    </>
  );
};
