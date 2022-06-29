import {useNavigate } from 'react-router-dom'
import React from 'react'
import { useProtectedPage } from '../hooks/useProtectedPage'
import { goToCreateTripsPage, goToHomePage, GoToLoginPage } from '../routes/coordinator'
import { UseRequestData } from '../hooks/UseRequestData'
import { BASE_URL } from '../constantes/BASE_URL'
import styled from "styled-components";
import { deleteTrip } from '../services/requests'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 97vw;
    height: auto;

    background: #FFFFFF;
`

const SectionContainer = styled.div`
    background-color:#FFD868;

    display: flex;
    flex-direction: column;
    
    align-items: center;
    width: 91vw;
    height: 100%;
` 

const CardContainer = styled.div`
    display: flex;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.3);
    padding: 10px 20px;
    border-radius: 4px;
    margin: 10px 0;
    align-items: center;
    justify-content: space-between;
    background-color: #721B65;
    color: #FFD868;
    width: 790px;
    &:hover{
        cursor: pointer;
        background-color: #b6d4e3;
    }
`
const Titulo = styled.h1`
    width: 500px;
    height: auto;

    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 400;
    font-size: 55px;
    text-align: center;

    color: #721B65;

    
`
const Button = styled.button`
    font-size: 18px;
    width: 260px;
    height: 50px;
    margin: 10px;
    

    background: #721B65;
    border-radius: 10px;
    margin-bottom: 40px;
`

const ButtonDel = styled.button`
    padding: 10px;
    color: #FFD868;
    background-color: #721B65;
    &:hover{
        cursor: pointer;
        background-color: #d1e4ed;
        border-radius: 24px;
        color: darkred;
    }
`
const NomeTrip = styled.p`
     color: #FFD868;
`

const AdminHomePage = () => {
    useProtectedPage()
    const { id, name, getTrips } = UseRequestData(`${BASE_URL}/trips/:id`)
    const [trips, error, isLoading] = UseRequestData(`${BASE_URL}/trips`);
    const navigate = useNavigate()

    const onClickDelete = (e) => {
        e.stopPropagation()
        if (window.confirm(`Tem certeza que deseja deletar a viagem ${name}?`)) {
            deleteTrip(id, getTrips)
        }
    }


    return (
        <Container>
            
            <SectionContainer>
                
                <Titulo>Painel Administrativo</Titulo>
                <div>
                    <Button onClick={() => goToHomePage(navigate)}>Voltar</Button>
                    <Button onClick={() => goToCreateTripsPage(navigate)}>Criar Viagem</Button>
                    <Button onClick={() => GoToLoginPage(navigate)}>Logout </Button>
                </div>
                {isLoading && <p>Carregando...</p>}
                {!isLoading && error && <p>Ocorreu um erro na sua busca</p>}
                {!isLoading && trips && trips.length > 0 && trips.map((viagem) => {
                    return (
                            
                        <CardContainer>
                            <NomeTrip>{viagem.name} </NomeTrip>
                            <ButtonDel onClick={onClickDelete}>X</ButtonDel>
                        </CardContainer>
                                        
                    )
                })}
            </SectionContainer> 
        </Container>
    )
}

export {AdminHomePage}