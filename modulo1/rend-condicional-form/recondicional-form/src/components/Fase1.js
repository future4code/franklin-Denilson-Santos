import React from 'react';
import styled from 'styled-components'
import {PerguntaAberta }from "./PerguntaAberta";
import {PerguntaOpcoes} from "./PerguntaOpcoes";

const FaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #a3a4f5;
  color: black;
  height: 77vh;
  width: 50%;
  margin: 0 auto;
  border-radius: 15px;
  margin-top: 10px;
  
`
const FaseUmH3 = styled.h3`
  color: #ea4c89;
`

const Fase1 = () => {
  
  return (
    <FaseContainer>
      <FaseUmH3>FASE 1 - INFORMAÇÕES GERAIS</FaseUmH3>
      <PerguntaAberta pergunta={"1. Qual o seu nome?"} />
      <PerguntaAberta pergunta={"2. Qual a sua idade?"} />
      <PerguntaAberta pergunta={"3. Qual o seu email?"} />
      <PerguntaOpcoes
        pergunta={"4. Qual a sua escolaridade?"}
        opcoes={[
          "Ensino médio incompleto",
          "Ensino médio completo",
          "Ensino superior incompleto",
          "Ensino superior completo"
        ]}
      />
    </FaseContainer>
  );
 
}

  export {Fase1};