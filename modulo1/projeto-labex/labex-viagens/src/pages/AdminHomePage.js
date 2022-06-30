import {useNavigate} from 'react-router-dom'
import React from 'react'
import { useProtectedPage } from '../hooks/useProtectedPage'
import { goToCreateTripsPage, goToHomePage, goToTripsDetailsPage} from '../routes/coordinator'
import { UseRequestData } from '../hooks/UseRequestData'
import { BASE_URL } from '../constantes/BASE_URL'
import styled from "styled-components";
import { logout } from '../services/requests'
import axios from 'axios'

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
    const navigate = useNavigate()

    const [trips, error, isLoading] = UseRequestData(`${BASE_URL}/trips`);

    const deleteTrip = (id) => {
        const token = localStorage.getItem('token')
        const content = 'application/JSON'
    
        axios.delete(`${BASE_URL}/trips/${id}`, {
            headers: {
                ContentType: content,
                auth: token
            }
        }).then((res) => {
            if (window.confirm(`Tem certeza que deseja deletar a viagem?`)) {
                
                alert('Viagem deletada com sucesso!')
                console.log(res.data)
            }
        }).catch((err) => {
            console.log(err)
        })
    }


    return (
        <Container>
            
            <SectionContainer>
                
                <Titulo>Painel Administrativo</Titulo>
                <div>
                    <Button onClick={() => goToHomePage(navigate)}>Voltar</Button>
                    <Button onClick={() => goToCreateTripsPage(navigate)}>Criar Viagem</Button>
                    <Button onClick={() => logout(navigate)}>Logout </Button>
                </div>
                {isLoading && <p>Carregando...</p>}
                {!isLoading && error && <p>Ocorreu um erro na sua busca</p>}
                {!isLoading && trips && trips.length > 0 && trips.map((viagem) => {
                    return (
                            
                        <CardContainer>

                            <NomeTrip><Button onClick={() => goToTripsDetailsPage(navigate, viagem.id)}>{viagem.name} </Button></NomeTrip>

                            <ButtonDel onClick={() => deleteTrip(viagem.id)}>X</ButtonDel>
                        </CardContainer>
                                        
                    )
                })}
            </SectionContainer> 
        </Container>
    )
}


export {AdminHomePage}