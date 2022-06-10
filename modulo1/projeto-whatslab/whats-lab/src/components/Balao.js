import styled from "styled-components";
import React, {useState} from "react";
import Telegram from '../Telegram.ico';
import { Card } from "./Card";

const Container = styled.div`
    background-color: #3370A6;
    display: flex;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
    
    min-height: 97vh;
    width: 800px;
`
const Principal = styled.div`
    width: 800px;
    height: 60px;
    display: flex;
    flex-direction: column;
   
    position: relative;
    background-color: #023059;
`

 
const InputUsuario = styled.input`
    left: 8px ;
    top: 10%;
    position: absolute;

    width: 20%;
    padding: 14px;
    background: #e6e6e6;
    border-radius: 15px;
    border: none;
    font-size: 16px;
`
const InputConteudo = styled.input`
    position: absolute;
    top: 10%;
    left: 200px ;
   
    

    width: 64%;
    padding: 14px;
    background: #e6e6e6;
    border-radius: 15px;
    border: none;
    font-size: 16px;
    margin-left: 2px;
    
`
const BotaoEnviar = styled.button`
    height: 50px;
    width: 50px;
    

    position: absolute; 
    top: 10%;
    left: 745px ;
    
    font-weight: 700;
    font-size: 16px;

    border-radius: 25px;

    cursor: pointer;
    transition: filter 0.2s;
`
const ImagemEnviar = styled.img`
    height: 50px;
    width: 50px;
    position: absolute;

   
    
    left: -2px;
    top: -2px;
    
    font-weight: 700;
    font-size: 16px;
   
`



export function Balao () {
    
    const [mensagem, setMensagem] = useState([]);
    const [mensagemEnviada, setMensagemEnviada] = useState('');

    const [inputUser , setInputUser] = useState('Denilson')
    const [inputConteudo, setInputConteudo] = useState('')

    const changeInputUser = (event) => {
        setInputUser(event.target.value)
    }

    const changeInputConteudo = (event) => {
        setInputConteudo(event.target.value)
        setMensagemEnviada(event.target.value)
    }

    function enviarMensagem () {
        const newMensagem = {
            conteudo: mensagemEnviada,
            usuario: inputUser
            // time: new Date().toLocaleTimeString("pt-br", {
            //   hour: '2-digit',
            //   minute: '2-digit',
            //   second: '2-digit'
            // })
        };

        setMensagem([...mensagem, newMensagem]);
            

        setInputConteudo('');
        setInputUser('')
    }

    return (
        <div>
            <Container>
                {
                    mensagem.map(mensage => (
                    <Card   
                        conteudo={mensage.conteudo} 
                        usuario={mensage.usuario}
                    />
                    ))
                } 
                
            </Container>
            <Principal>
                <InputUsuario type="text" value={inputUser} placeholder='Usuário' onChange={changeInputUser}></InputUsuario>

                <InputConteudo type="text" value={inputConteudo} placeholder="Escreva sua mensagem" onChange={changeInputConteudo}
                ></InputConteudo>

                <BotaoEnviar onClick={enviarMensagem}><ImagemEnviar src={Telegram} alt="Enviar" /></BotaoEnviar>     
            </Principal>   
            
        </div>
    )
}