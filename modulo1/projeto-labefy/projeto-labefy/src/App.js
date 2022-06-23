import React from "react";
import styled from "styled-components";
import {CriarPlaylists} from "./components/CriaPlaylists";
import { DeletarPlaylist } from "./components/DeletarPlaylist";
import { PegarTodasPlaylists } from "./components/PegaTodasPlaylists";


const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`
const Conteudo = styled.div`
  /* o conteudo deve ficar um ao lado do outro em caixas autoajustaveis em altura e com uma largura fixa */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;


`

const App = () => {
  
    
  return (
    <Container>
      <Conteudo>
        <CriarPlaylists />
      </Conteudo>

      <Conteudo>
      <PegarTodasPlaylists />
      </Conteudo>

      <Conteudo>
      <DeletarPlaylist  />
      </Conteudo>

    </Container>
  );
}

export default App;
