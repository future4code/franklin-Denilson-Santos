import { useNavigate } from "react-router-dom";
import { goToTelaCadastro, goToTelaListaReceitas} from "../routes/coordinator";

const TelaLogin = () => {
    const navigate = useNavigate();

    return(
        <div>
            <h1>Login</h1>
            {<button onClick={() => goToTelaListaReceitas(navigate)}>Voltar</button> }
            {<button onClick={() => goToTelaCadastro(navigate)}>Voltar</button> }
            
        </div>
    )
}

export {TelaLogin}