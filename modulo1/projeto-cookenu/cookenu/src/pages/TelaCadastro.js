import { useNavigate } from "react-router-dom";
import { goToTelaListaReceitas } from "../routes/coordinator"

const TelaCadastro = () => {
    const navigate = useNavigate();

    return(
        <div>
            <h1>Cadastro</h1>
            {<button onClick={() => goToTelaListaReceitas(navigate)}>Voltar</button> }
        </div>
    )
}

export {TelaCadastro}