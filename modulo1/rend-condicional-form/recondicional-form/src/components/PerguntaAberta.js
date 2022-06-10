import React from "react";
import styled from 'styled-components';

const AbertsPerguntas = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #a3a4f5;
  color: black;
  height: 47vh;
  width: 50%;
  margin: 0 auto;
  border-radius: 15px;
  
`
const AbertasParagrafo = styled.p`
  font-weight: bold;
`

function PerguntaAberta(props) {
  return (
    <AbertsPerguntas>
      <AbertasParagrafo>{props.pergunta}</AbertasParagrafo>
      <input onChange={props.onChange} value={props.value} />
    </AbertsPerguntas>
  );
}

export {PerguntaAberta}