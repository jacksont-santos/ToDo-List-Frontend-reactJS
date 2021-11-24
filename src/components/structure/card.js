import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  const tarefa = props.data;
  return (
    <Link to={`/detalhes/${tarefa._id}`}>
      <div className="card" key={tarefa._id}>
        <hr />
        <h3>
          <p className="p1">Tarefa:</p> <p className="p2">{tarefa.titulo}</p>{" "}
        </h3>
        <hr />
        <h3>
          <p className="p1">Descrição:</p>{" "}
          <p className="p2">{tarefa.descricao}</p>{" "}
        </h3>
        <hr />
        <h3>
          <p className="p1">Prioridade:</p>{" "}
          <p className="p2">{tarefa.prioridade}</p>{" "}
        </h3>
        <hr />
        <h3>
          <p className="p1">Situação:</p> <p className="p2">{tarefa.status}</p>{" "}
        </h3>
        <hr />
        <br />
        <hr />
        <br />
        <hr />
        <h3>
          <p className="p1">Prazo:</p> <p className="p2">{tarefa.prazo}</p>{" "}
        </h3>
        <hr />
        <br />
      </div>
    </Link>
  );
};
export default Card;
