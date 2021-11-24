import React from "react";
import Api from "./../../api/api";
import { useNavigate } from "react-router-dom";

const Cadastro = () => {
  const navigate = useNavigate();

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    const titulo = evento.target.tarefa.value;
    const descricao = evento.target.descricao.value;
    const prioridade = evento.target.prioridade.value;
    const status = evento.target.status.value;
    const prazo = evento.target.prazo.value;

    const addTarefa = {
      titulo,
      descricao,
      prioridade,
      status,
      prazo,
    };

    const request = await Api.fetchPost(addTarefa);
    const resultado = await request.json();
    if (resultado.error) {
      console.log(resultado.error);
    }
    if (resultado.message) {
      alert(resultado.message);
    }
    navigate("/");
  };

  const esvaziar = () => {
    let tarefa = document.getElementById("tarefa");
    let descricao = document.getElementById("descricao");
    let prioridade = document.getElementById("prazo");
    let status = document.getElementById("selecionar");
    let prazo = document.getElementById("selecionar1");
    tarefa.value = "";
    descricao.value = "";
    prioridade.value = "";
    status.value = "";
    prazo.value = "";
  };

  return (
    <main>
      <div className="container">
        <div className="card1">
          <form onSubmit={handleSubmit}>
            <h1> Nova Tarefa </h1>
            <div className="label-float">
              <input
                type="text"
                name="tarefa"
                id="tarefa"
                placeholder=" Insira uma tarefa"
                required
              />
              <label htmlFor="tarefa">
                <strong>Tarefa</strong>
              </label>
            </div>
            <div className="label-float">
              <input
                type="text"
                name="descricao"
                id="descricao"
                placeholder=" Descreva-a"
                required
              />
              <label htmlFor="descricao">
                <strong>Descrição</strong>
              </label>
            </div>
            <div className="label-float">
              <label htmlFor="selecionar">
                <strong>Prioridade </strong>
              </label>
              <select id="selecionar" name="prioridade" required>
                <option value="Baixa"> Baixa</option>
                <option value="Média"> Média</option>
                <option value="Alta"> Alta</option>
              </select>
            </div>
            <div className="label-float">
              <label htmlFor="selecionar1">
                <strong>Status </strong>
              </label>
              <select id="selecionar1" name="status" required>
                <option value="Fazer"> Fazer</option>
                <option value="Fazendo"> Fazendo</option>
                <option value="Feito"> Feito</option>
              </select>
            </div>
            <div className="label-float">
              <input
                type="date"
                id="prazo"
                name="prazo"
                placeholder="Prazo para conclusão"
                required
              />
              <label htmlFor="prazo">
                <strong> Prazo</strong>
              </label>
            </div>
            <div className="justify-content">
              <button type="submit" className="sucess">
                <strong> Inserir</strong>
              </button>
            </div>
            <div className="justify-content">
              <button type="button" className="danger" onClick={esvaziar}>
                <strong> Limpar campos</strong>
              </button>
            </div>
            <div className="justify-content">
              <hr></hr>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};
export default Cadastro;
