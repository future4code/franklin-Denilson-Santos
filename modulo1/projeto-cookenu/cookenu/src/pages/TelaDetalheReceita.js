import { useNavigate } from "react-router-dom";
import { goToTelaListaReceitas } from "../routes/coordinator";


const TelaDetalheReceita = () => {
    const navigate = useNavigate();

    return(
        <div>
            <h1>Detalhe da Receita</h1>
            {<button onClick={() => goToTelaListaReceitas(navigate)}>Voltar</button> }
            
        </div>
    )
}

export {TelaDetalheReceita}