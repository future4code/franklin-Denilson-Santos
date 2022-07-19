import { GoToApplicationFormPage, goToHomePage } from "../routes/coordinator"
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { UseRequestData } from "../hooks/UseRequestData";
import { BASE_URL } from "../constantes/BASE_URL";
import { TripsCard } from "../components/TripsCard";

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
const ViagensTitulo = styled.h1`
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



// mostrar lista de viagens
const ListTripsPage = () => {
    const navigate = useNavigate();

    const [trips, error, isLoading] = UseRequestData(`${BASE_URL}/trips`);
   


    return (
        <Container>
            <Section1Container>
                <div>
                    <ViagensTitulo>Lista de Viagens</ViagensTitulo>
                </div>
                <div>
                    {<Button onClick={() => GoToApplicationFormPage(navigate)}>Inscreva-se</Button> }
                     {<Button onClick={() => goToHomePage(navigate)}>Voltar</Button> } 
                     <div>
                        {isLoading && <p>Carregando...</p>}
                        {!isLoading && error && <p>Ocorreu um erro na sua busca</p>}
                        {!isLoading && trips && trips.length > 0 && trips.map((viagem) => {
                            return (
                                <TripsCard
                                    name={viagem.name}
                                    description={viagem.description}
                                    planet={viagem.planet}
                                    duration={viagem.durationInDays}
                                    date={viagem.date}
                                />
                            )
                        })}
                    </div> 
                     
                </div>
              
            </Section1Container>

            
        </Container>
    )
}

export {ListTripsPage}