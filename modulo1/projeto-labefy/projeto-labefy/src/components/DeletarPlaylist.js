import React, { useState, useEffect} from "react";
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
    background-color: #ff0000;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
   
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

function DeletarPlaylist () {
    const [playlists, setPlaylists] = useState([]);

    const urlApi = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

    const headers = { 
        headers: { Authorization: "denilson-santos-franklin"}
    };

    const deletaPlaylist = (id) => {
        axios.delete(`${urlApi}/${id}`, headers)
        .then(() => {
            setPlaylists(playlists.filter(playlist => playlist.id !== id));
            alert("Playlist deletada com sucesso!");
        })
        .catch(error => {
            alert("Erro ao deletar playlist");
            console.log(error.response);
        }
        );
    };

    const listaPlaylists = () => {
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

    useEffect(() => {   
        listaPlaylists();
    }, []);


    const mostraPlaylists = () => {
        return playlists.map((playlist) => {
            return (
                <ListaLi key={playlist.id}>{playlist.name}
                    <Botao onClick={() => deletaPlaylist(playlist.id)}>X</Botao>
                </ListaLi>
            )

        })
    };
            
    return (
        <Container>
            <Lista>
                <h1>Deletar Playlists</h1>
                {mostraPlaylists()}
            </Lista>
        </Container>
    );
}

export { DeletarPlaylist };