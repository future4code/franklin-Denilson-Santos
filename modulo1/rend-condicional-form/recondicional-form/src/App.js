import React, {useState} from "react";
import styled from "styled-components";
import {Fase1} from "./components/Fase1";
import {Fase2} from "./components/Fase2";
import {Fase3} from "./components/Fase3";
import { FaseFinal } from "./components/FaseFinal";

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #000000;
  color: black;
  height: 97vh;
  width: 97vw;
 
`
const AppButtom = styled.button`
  width: 50%;
  padding: 24px;
  font-weight: 700;
  font-size: 16px;

  background: #a3a4f5;
  border-radius: 5px;
  margin: 12px 0 84px;
  border: none;

  cursor: pointer;
  transition: filter 0.2s;
`



function App() {
  const [formState, setFormState] = useState( {fase:1});


  const mostraFases = () => {
    switch (formState.fase) {
      case 1:
        return <Fase1 />;
      case 2:
        return <Fase2 />;
      case 3:
        return <Fase3 />;
      case 4:
        return <FaseFinal/>;
      default:
        return <FaseFinal />;
    }
  };

  const proximaFase = () => {
    setFormState({ fase: formState.fase + 1 });
  };

  
  return (
    <AppContainer >
      {mostraFases()}
      <br />
      {formState.fase !== 4 && (
        <AppButtom onClick={proximaFase}>Próxima etapa</AppButtom>
      )}
    </AppContainer>
  );
  
}

export default App;

