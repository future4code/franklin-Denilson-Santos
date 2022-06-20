import React, {useState} from "react";
import CadastroUsuarios from "./components/CadastroUsuarios";
import ListaUsuarios from "./components/ListaUsuarios";
import styled from "styled-components";

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  background-color: lightgray;
`

const Botao = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 60%;
  height: 60px;
  border-radius: 15px;
  border: 1px solid cyan;
  background-color: #4CAF50;
  color: #fff;
  font-size: 1.2em;
  font-weight: bold;
  margin-left: 290px;
  margin-bottom: 40px;
  cursor: pointer;
  &:hover {
    background-color: #000000;
    color: #fff;
  }

`


function App() {
  const [telaAtual, setTelaAtual] = useState("cadastro");

  const alternarTela = () => { 
    if (telaAtual === "cadastro") {
      setTelaAtual("lista");
    } else {
      setTelaAtual("cadastro");
    }
  }


  return (
    <DivContainer className="App">
      {telaAtual === "cadastro" ? ( // Se a tela atual for cadastro, mostra a tela de cadastro
        <CadastroUsuarios />
      ) : ( // Se a tela atual for lista, mostra a tela de lista
        <ListaUsuarios />
      )}
      <Botao onClick={alternarTela}>
        {telaAtual === "cadastro" ? "Lista de Usuários" : "Cadastro de Usuários"} 
      </Botao>
    </DivContainer>
  );
}

export default App;
