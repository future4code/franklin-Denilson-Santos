import React from "react";
import styled from "styled-components";

const UltimaFase = styled.div`
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
const UltimaFaseP = styled.p`
  font-weight: bold;
`
const UltimaFaseH3 = styled.h3`
  color: #ea4c89;
`

function FaseFinal() {
  return (
    <UltimaFase>
      <UltimaFaseH3>ACABOU O FORMULÁRIO </UltimaFaseH3>
      <UltimaFaseP>Muito obrigado por participar! </UltimaFaseP>
      <UltimaFaseP>Entraremos em contato!</UltimaFaseP>
    </UltimaFase>
  );
}

export {FaseFinal}
