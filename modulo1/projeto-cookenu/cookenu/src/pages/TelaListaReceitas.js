import { useNavigate } from "react-router-dom"
import { goToTelaLogin } from "../routes/coordinator";

const TelaListaReceitas = () => {
    const navigate = useNavigate();

    return(
        <div>
            <h1>Lista de Receitas</h1>
            {<button onClick={() => goToTelaLogin(navigate)}>Voltar</button> }
        </div>
    )
}

export {TelaListaReceitas}