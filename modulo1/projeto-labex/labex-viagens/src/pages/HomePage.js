import React from "react";
import {useNavigate} from 'react-router-dom'
import {  GoToAdminHomePage, goToListTripsPage, GoToLoginPage } from "../routes/coordinator";
import styled from "styled-components";
import RoketImg from "../img/rocket.png"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 97vw;
    height: 100vh;

    background: #FFFFFF;
`

const Section1Container = styled.div`
    background-color: #FFD868;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 100px;
    

    width: 75vw;
    height: 60%;
    left: 0px;
    top: 0px;

`
const Section2Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 100px;

    width: 75vw;
    height: 60%;
    left: 0px;
    top: 0px;

    background-color: #E5E5E5;
`
const LabexTitulo = styled.h1`
    width: 500px;
    height: 100px;

    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 400;
    font-size: 55px;
    line-height: 73px;
    text-align: center;

    color: #721B65;


    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
`
const LabexSubtitulo = styled.p`
    width: 372px;
    height: 99px;

    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 400;
    font-size: 35px;
    line-height: 46px;

    color: rgba(0, 0, 0, 0.6);


    /* Inside auto layout */

    flex: none;
    order: 0;
    align-self: center;
    justify-content: center;
    flex-grow: 0;
`
const ImagemFogete = styled.div`
    width: 530px;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content:center;
    

    border-radius: 9px;
    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
`
const Foguete = styled.img`
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 300px;
`
const MsgViagens = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
   

    width: 97vh;
    height: 250px;
    margin-left: 100px;

    
`

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 10px;
    font-size: 18px;

    
    width: 260px;
    height: 50px;
    

    background: #721B65;
    border-radius: 10px;
`

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <Section1Container>
                <div>
                    <LabexTitulo>Labex Viagens</LabexTitulo>

                    <LabexSubtitulo>A viagem mais especial de sua vida. Uma viagem ao espaço</LabexSubtitulo>
                    
                </div>
                <ImagemFogete>
                     <Foguete src={RoketImg}/>
                </ImagemFogete>
                
            </Section1Container>
            <Section2Container>
                <MsgViagens>
                    <div>
                        <LabexSubtitulo>Cadastre e crie as suas viagens!</LabexSubtitulo>
                        <Button onClick={() => GoToLoginPage(navigate)}>Pagina de Login</Button>
                    </div>
                    <div>
                        <LabexSubtitulo>Todas as opções de viagens a sua disposição</LabexSubtitulo>
                        <Button onClick={() => goToListTripsPage(navigate)}>Ver Viagens</Button>
                    </div>
                    <div>
                        <LabexSubtitulo>Area Adminstrador da Pagina</LabexSubtitulo>
                        <Button onClick={() => GoToAdminHomePage(navigate)}>Area Admin</Button>
                    </div>
                </MsgViagens>
                
            </Section2Container>
        </Container>
           
        
    )
}

export {HomePage}