import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate, Link } from "react-router-dom";
import Api from "../../api/api";
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

const Detail = () => {
  const { id } = useParams();
  const [tarefa, setTarefa] = useState({});

  const [aberto, setAbrir] = useState(false);
  const AbreModal = () => setAbrir(true);
  const FechaModal = () => setAbrir(false);

  const getDadosById = async () => {
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
    getDadosById();
  }, []);

  const navigate = useNavigate();

  const deletar = async () => {
    const resposta = await Api.fetchdelete(tarefa._id);
    const resultado = await resposta.json();
    if (resultado.error) {
      console.log(resultado.error);
    }
    if (resultado.message) {
      alert(resultado.message);
    }
    navigate("/");
  };

  return (
    <main>
      <div className="container">
        <div className="cardb" key={tarefa._id}>
          <hr />
          <h3>{tarefa.titulo}</h3>
          <hr />
          <h3>{tarefa.descricao}</h3>
          <hr />
          <h3>{tarefa.prioridade}</h3>
          <hr />
          <h3>{tarefa.status}</h3>
          <hr />
          <h3>{tarefa.prazo}</h3>
          <hr />
          <Link to={`/editar/${tarefa._id}`}>
            <button className="sucess"> Editar</button>
          </Link>
          <button className="danger" onClick={AbreModal}>
            Excluir Tarefa
          </button>
        </div>
      </div>
      <Modal open={aberto} onClose={FechaModal} center showCloseIcon={false}>
      <h2>Deseja Excluir a Tarefa?</h2>
      <div>
      <button className="sucess" onClick={FechaModal}>Não</button>
      <button className="danger" onClick={deletar}>Sim</button>
      </div>
    </Modal>
    </main>
  );
};
export default Detail;
