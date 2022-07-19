import { useNavigate} from "react-router-dom"
import { GoToAdminHomePage, goToHomePage} from "../routes/coordinator"
import { CardCandidato } from "../components/CardCandidato"
import { useProtectedPage } from "../hooks/useProtectedPage"
import styled from "styled-components";

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
`


const TripDetailsPage = () => {
    const navigate = useNavigate();
    useProtectedPage()
   

    return (
        <Container>
            <Section1Container>  
                <Titulo>Pagina Detalhes da Viagem</Titulo>
                <div>
                    {<Button onClick={() => goToHomePage(navigate)}>Voltar</Button> }
                    {<Button onClick={() => GoToAdminHomePage(navigate)}>Pagina Admin</Button> }
                </div>
                
                <CardCandidato />
                
            </Section1Container>
        </Container>
    )
}

export {TripDetailsPage}