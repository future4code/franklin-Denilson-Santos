import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BASE_URL } from "../constantes/BASE_URL";
import { UseRequestData } from "../hooks/UseRequestData";
import { goToListTripsPage } from "../routes/coordinator";
import { useState } from 'react';


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 97vw;
    height: auto;

    background: #FFFFFF;
`

const Section1Container = styled.div`
    background-color: #FFD868;
    display: flex;
    flex-direction: column;
    
    align-items: center;

    width: 91vw;
    height: 100%;

`
const FormTitulo = styled.h1`
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
`


const AplicationFormPage = () => {
    const navigate = useNavigate();

    // getTrips 
    const [viagens, setViagens] = useState('') 
    const [trips] = UseRequestData(`${BASE_URL}`);
    const onChangeTrip = (event) => {
        setViagens(event.target.value)
    }
    const optionTrip = trips && trips.map( (trip) => {
        return <option key={trip.id}>{trip.name}</option>
    })

    // aplyToTrips
    
    

    return (
        <Container>
            <Section1Container>
                <FormTitulo>Pagina Formulário da Aplicação</FormTitulo>
                
                <form>
                    <select value={viagens} onChange={onChangeTrip}>
                        <option selectd>Escolha sua viagem</option>
                        {optionTrip}
                    </select>
                    
                    <input
                        placeholder={"Nome"}
                        pattern={"^.{3,}$"}
                        title={"O nome deve ter no mínimo 3 caracteres"}
                        required
                    />
                    <input
                        placeholder={"Idade"}
                        type={"text"}
                        required
                       
                    />
                    <input
                        placeholder={"Texto de Candidatura"}
                        required
                        pattern={"^.{30,}$"}
                        title={"O texto deve ter no mínimo 30 caracteres"}
                    />
                    <input
                        placeholder={"Profissão"}
                        required
                        pattern={"^.{10,}$"}
                        title={"A profissão deve ter no mínimo 10 caracteres"}
                    />
                    <input
                        placeholder={"País"}
                        required
                    />
                    
                </form>
                <div>
                    {<Button onClick={() => goToListTripsPage(navigate)}>Enivar</Button> } 
                    <Button onClick={() => goToListTripsPage(navigate)}>Ver Viagens</Button>
                </div>
               
            </Section1Container>
        </Container>
)
}

export {AplicationFormPage}