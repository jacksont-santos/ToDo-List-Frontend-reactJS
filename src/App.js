import "./App.css";
import Header from "./components/shared/header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/home";
import Cadastro from "./components/pages/cadastro";
import Detail from "./components/pages/detalhes";
import Edicao from "./components/pages/edit";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/Cadastro"} element={<Cadastro />} />
        <Route path={"/detalhes/:id"} element={<Detail />} />
        <Route path={"/editar/:id"} element={<Edicao />} />
      </Routes>
    </div>
  );
}

export default App;
