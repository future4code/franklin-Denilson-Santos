import React from "react";
import styled from "styled-components";
import {PerguntaAberta} from "./PerguntaAberta";
import {PerguntaOpcoes} from "./PerguntaOpcoes";

const TerceiraFase = styled.div`
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
const FaseTresH3 = styled.h3`
  color: #ea4c89;
`

const Fase3 = () => {
  
  return (
    <TerceiraFase>
      <FaseTresH3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</FaseTresH3>
      <PerguntaAberta
        pergunta={"5. Por que você não terminou um curso de graduação?"}
      />
      <PerguntaOpcoes
        pergunta={"6. Você fez algum curso complementar?"}
        opcoes={["Nenhum", "Curso técnico", "Curso de inglês"]}
      />
    </TerceiraFase>
  );
  
}

export {Fase3};
