import React, { useState, useEffect } from "react";
import Api from "../../api/api";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

const Edicao = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [etarefa, setTarefa] = useState({
    titulo: "",
    descricao: "",
    prioridade: "",
    status: "",
    prazo: "",
  });
  const getPutById = async () => {
    const request = await Api.getById(id);
    const dados = await request.json();
    if (dados.error) {
      console.log(dados.error);
    }
    if (dados.message) {
      alert(dados.message);
    }
    setTarefa(dados);
  };

  useEffect(() => {
    getPutById();
  }, []);

  const handleChange = (evento) => {
    const editando = { ...etarefa };
    editando[evento.target.name] = evento.target.value;
    setTarefa(editando);
  };

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    const requisicao = await Api.fetchedit(etarefa, id);
    const resultado = await requisicao.json();
    if (resultado.error) {
      console.log(resultado.error);
    }
    if (resultado.message) {
      alert(resultado.message);
    }
    navigate("/");
  };
  const esvaziar = () => {
    let tarefa = document.getElementById("titulo");
    let descricao = document.getElementById("descricao");
    let prioridade = document.getElementById("selecionar1");
    let status = document.getElementById("selecionar1");
    let prazo = document.getElementById("prazo");
    tarefa.value = "";
    descricao.value = "";
    prioridade.value = "";
    status.value = "";
    prazo.value = "";
  };

  return (
    <div className="container">
      <div className="card1">
        <form onSubmit={handleSubmit}>
          <h1> Editar Tarefa</h1>
          <div className="label-float">
            <input
              type="text"
              name="titulo"
              id="titulo"
              value={etarefa.titulo}
              placeholder=" Insira uma tarefa"
              onChange={handleChange}
              required
            />
            <label htmlFor="titulo">
              <strong>Tarefa</strong>
            </label>
          </div>
          <div className="label-float">
            <input
              type="text"
              name="descricao"
              id="descricao"
              value={etarefa.descricao}
              placeholder=" Descreva-a"
              onChange={handleChange}
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
            <select
              id="selecionar"
              name="prioridade"
              value={etarefa.prioridade}
              onChange={handleChange}
              required
            >
              <option value="Baixa"> Baixa</option>
              <option value="Média"> Média</option>
              <option value="Alta"> Alta</option>
            </select>
          </div>
          <div className="label-float">
            <label htmlFor="selecionar1">
              <strong>Status </strong>
            </label>
            <select
              id="selecionar1"
              name="status"
              value={etarefa.status}
              onChange={handleChange}
              required
            >
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
              value={etarefa.prazo}
              placeholder="Prazo para conclusão"
              onChange={handleChange}
              required
            />
            <label htmlFor="prazo">
              <strong> Prazo</strong>
            </label>
          </div>
          <div className="justify-content">
            <button type="submit" className="sucess">
              <strong > Atualizar</strong>
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
  );
};

export default Edicao;
