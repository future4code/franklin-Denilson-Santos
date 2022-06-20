import React, {useState} from "react";
import axios from "axios";
import styled from "styled-components";

const DivContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    vertical-align: middle;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    padding: 20px;
    background-color: lightgray;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`

const Titulo = styled.h1`
    font-size: 3.4em;
    color: #fff;
    text-align: center;
    margin: 0;
    padding: 20px;
    background-color: #4CAF50;
    
`
const DivConteudo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    vertical-align: middle;
    margin: 0 auto;
    width: 100%;
    max-width: 800px;
    height: 90%;
    background-color: #4CAF50;
    border-radius: 15px;
   
`
const Paragrafo = styled.p`
    font-size: 2em;
    color: #fff;
    text-align: center;
    justify-content: center;
    margin: 0 auto;
    padding: 2px;
    background-color: #4CAF50;

    &:hover {
        cursor: pointer;
    }

`

const Botao = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid cyan;
    padding: 2px;
    margin: 1px;
    background-color: red;
    color: #000000;
    cursor: pointer;
    &:hover {
        background-color: red;
        color: #4CAF50;
    }

`

function ListaUsuarios() {
    const [usuarios, setUsuarios] = useState([]);

    const urlApi = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

    const headers = {
        headers: { Authorization: "denilson-santos-franklin" }
    }

    const deletarUsuario = (id) => { 
        axios.delete(`${urlApi}/${id}`, headers)
            .then(() => {
                setUsuarios(usuarios.filter(usuario => usuario.id !== id));
                alert("Usuário deletado com sucesso!");
            }
            )
            .catch(erro => {
                console.log(erro);
                alert("Erro ao deletar usuário!");
            }
            )
    }

    const listarUsuarios = () => {
        axios.get(urlApi, headers)
            .then(response => { 
                setUsuarios(response.data);
            }
            )
            .catch(erro => {
                console.log(erro);
            }
            )
    }

    listarUsuarios();

    const mostraUsuarios = () => {
        return usuarios.map(usuario => {    
            return (
                <DivConteudo key={usuario.id}>
                    <Paragrafo>{usuario.name}</Paragrafo>
                    <Paragrafo>{usuario.email}</Paragrafo>
                    <Botao onClick={() => deletarUsuario(usuario.id)}>X</Botao>
                </DivConteudo>
            )
        })
    }

    return (
        <DivContainer>
            <DivConteudo>
            <Titulo>Lista de Usuários</Titulo>
            {mostraUsuarios()}
            </DivConteudo>
        </DivContainer>
    )
}


export default ListaUsuarios;
