import React, { useEffect, useState } from "react";
import Card from "./card";
import Api from "../../api/api";

const List = () => {
  const [tarefas, setTarefas] = useState([]);

  const getTarefas = async () => {
    const request = await Api.getAll();
    const dados = await request.json();
    if (dados.error) {
      console.log(dados.error);
    }
    if (dados.message) {
      console.log(dados.message);
    }
    setTarefas(dados);
  };

  useEffect(() => {
    getTarefas();
  }, []);

  return (
    <div className="container">
      {tarefas.map((tarefa) => (
        <Card data={tarefa} key={tarefa._id} />
      ))}
    </div>
  );
};
export default List;
