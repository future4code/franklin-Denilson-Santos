import React, {useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';

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
const InputConteudo = styled.input`
    display: flex;
    flex-direction: column;
    align-items: center;
    vertical-align: middle;
    margin: 0 auto;
    width: 70%;
    height: 40px;
    border-radius: 5px;
    border: 1px solid cyan;
    padding: 5px;
    margin: 10px; 

`

const Botao = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    width: 72%;
    height: 50px;
    border-radius: 5px;
    border: 1px solid cyan;
    padding: 5px;
    margin: 10px;
    background-color: #000000;
    color: #fff;
    font-size: 1.5em;
    font-weight: bold;
    cursor: pointer;
    &:hover {
        background-color: #fff;
        color: #4CAF50;
    }

`

function CadastroUsuarios() {
    const [usuarios, setUsuarios] = useState([]);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');

    const urlApi = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

    const headers = {
        headers: { Authorization: "denilson-santos-franklin" }
    }

    const cadastrarUsuario = () => { 
        const usuario = {   // criando um objeto usuario
            name: nome,
            email: email
        }
        axios.post(urlApi, usuario, headers)
            .then(() => {
                setUsuarios([...usuarios, usuario]);
                setNome('');
                setEmail('');
                alert("Usuário cadastrado com sucesso!");
            }
            )
            .catch(erro => {
                console.log(erro);
                alert("Erro ao cadastrar usuário!");
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

    return (
        <DivContainer>
            <DivConteudo>
                <Titulo>Cadastro de Usuários</Titulo>

                <InputConteudo placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} />
                <InputConteudo placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <Botao onClick={cadastrarUsuario}>Cadastrar</Botao>
            </DivConteudo>
        </DivContainer>
    );
}

export default CadastroUsuarios;

