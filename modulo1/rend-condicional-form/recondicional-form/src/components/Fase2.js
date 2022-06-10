import React from "react";
import styled from "styled-components";
import {PerguntaAberta} from "./PerguntaAberta";

const SegundaFase = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #a3a4f5;
  color: black;
  height: 77vh;
  width: 50%;
  border-radius: 15px;
  margin-top: 10px;
  
`
const FaseDoisH3 = styled.h3`
  color: #ea4c89;
`


const Fase2 = () => {
  
  return (
    <SegundaFase>
      <FaseDoisH3>FASE 2 - INFORMAÇÕES SOBRE ENSINO SUPERIOR</FaseDoisH3>
      <PerguntaAberta pergunta={"5. Qual curso?"} />
      <PerguntaAberta pergunta={"6. Qual a unidade de ensino?"} />
    </SegundaFase>
  );
  
}

export {Fase2};
