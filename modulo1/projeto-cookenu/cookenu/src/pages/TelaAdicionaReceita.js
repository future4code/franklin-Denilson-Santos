import { useNavigate } from "react-router-dom"
import { goToTelaListaReceitas } from "../routes/coordinator"

const TelaAdicionaReceita = () => {
    const navigate = useNavigate();

    return(
        <div>
            <h1>Lista de Receitas</h1>
            {<button onClick={() => goToTelaListaReceitas(navigate)}>Voltar</button> }
        </div>
    )
}

export {TelaAdicionaReceita}