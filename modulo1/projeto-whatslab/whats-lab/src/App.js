import React from 'react';
import styled from 'styled-components';
import { Balao } from './components/Balao';
import { Cabecario } from './components/Cabecario';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f1f1f1;
  min-height: 97vh;
  padding: 0px 15vw;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`

function App() {
 
  return (
    <Container>
      <Cabecario nome="Denilson" imagem="https://github.com/DenilsonNovais.png"/>
      <Balao/>
      
    </Container>
  );
}

export default App;
