import React from "react";
import { Link } from "react-router-dom";

const Inicio = ({ listaEncuestas }) => {
  console.log(listaEncuestas);

  const renderEncuestas = () => {
    if (listaEncuestas.length === 0) {
      return <p>No hay encuestas disponibles.</p>;
    }

    return listaEncuestas.map((encuesta) => {
      const { id, titulo, descripcion } = encuesta;

      return (
        <div className="encuesta-item-container" key={id}>
          <div className="encuesta-item">
            <h2>{titulo}</h2>
            <p>{descripcion}</p>
            <Link to={`/encuesta/${id}`}>Ver encuesta</Link>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <h1>Lista de Encuestas Disponibles</h1>
      {renderEncuestas()}
    </div>
  );
};

export default Inicio;