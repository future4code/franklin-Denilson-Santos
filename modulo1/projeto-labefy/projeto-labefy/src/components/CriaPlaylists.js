import React, { useState} from "react";
import axios from 'axios';
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  width: 100%;
  height: 100vh;
  border: 3px solid black;
`
const Botao = styled.button`
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    border-radius: 8px;
    cursor: pointer;

`

const Imput = styled.input`
    width: 60%;
    height: 50px;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 0 15px;
    margin: 10px 0;

`


function CriarPlaylists () {
    const [playlists, setPlaylists] = useState([]);
    const [playlistName, setPlaylistName] = useState("");
    
    const urlApi = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

    const headers = { 
        headers: { Authorization: "denilson-santos-franklin"}
    };

    const criaPlaylists = () => {
        const body = {  name: playlistName };

        axios.post(urlApi, body, headers)
        .then((response) => {
            setPlaylists([...playlists, response.data]);
            setPlaylistName("");
            alert("Playlist criada com sucesso!");
        })
        .catch(error => {
            alert("Erro ao criar playlist");
            console.log(error.response);
        }
        );
    };

    return (
        <Container>
            <h1>Criar Playlists</h1>
            <Imput
                type="text"
                placeholder="Nome da playlist"
                value={playlistName}
                onChange={(e) => setPlaylistName(e.target.value)}
            />
            <Botao onClick={criaPlaylists}>Criar Playlist</Botao>
        </Container>
    );
}

export {CriarPlaylists};