import React from "react";
import styled from 'styled-components';

const OpcoesPerguntas = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #a3a4f5;
  color: black;
  height: 37vh;
  width: 50%;
  margin: 0 auto;
  border-radius: 15px;
  
`
const OpcoesParagrafo = styled.p`
  font-weight: bold;
`

function PerguntaOpcoes(props) {
  return (
    <OpcoesPerguntas>
      <OpcoesParagrafo>{props.pergunta}</OpcoesParagrafo>
      <select>
        {props.opcoes.map(opcao => (
          <option value={opcao}>{opcao}</option>
        ))}
      </select>
    </OpcoesPerguntas>
  );
}

export {PerguntaOpcoes}