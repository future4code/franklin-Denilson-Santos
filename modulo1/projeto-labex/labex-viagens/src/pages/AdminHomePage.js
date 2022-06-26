import {useNavigate } from 'react-router-dom'
import { goToCreateTripsPage, goToHomePage } from '../routes/coordinator';


const AdminHomePage = () => {
    const navigate = useNavigate();
    
    return (
        <div>
            <h1>Painel Administrativo</h1>
           
            {<button onClick={() => goToHomePage(navigate)}>Voltar</button> }
            {<button onClick={() => goToCreateTripsPage(navigate)}>Criar Viagem</button> }


           
        </div>
    )
}

export {AdminHomePage}