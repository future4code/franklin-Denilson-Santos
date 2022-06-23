import axios from "axios";
import React,{ useState } from "react";
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

const Lista = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`
const ListaLi = styled.li`
    list-style: none;
    margin: 0;
    padding: 0;
    font-weight: bold;

`


const PegarTodasPlaylists = () => { 
    const [playlists, setPlaylists] = useState([]);

    const urlApi = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

    const headers = { 
        headers: { Authorization: "denilson-santos-franklin"}
    };

    const pegaPlaylists = () => {
        axios.get(urlApi, headers)
        .then((response) => {
            setPlaylists(response.data.result.list);
        })
        .catch(error => {
            alert("Erro ao pegar playlists");
            console.log(error.response);
        }   
        );
    };


    return (
        <Container>
            <h1>Buscar Todas as playlists</h1>
            <Botao onClick={pegaPlaylists}>Pegar Playlists</Botao>
            <Lista>
                {playlists.map((playlist) => {
                    return (
                        <ListaLi key={playlist.id}>{playlist.name}</ListaLi>
                    )
                }
                )}
            </Lista>
        </Container>
    );
};

export { PegarTodasPlaylists };