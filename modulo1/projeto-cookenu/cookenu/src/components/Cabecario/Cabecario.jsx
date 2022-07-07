import { useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import { StyledToolbar } from "./style";
import Button from '@mui/material/Button';
import { goToLogin, goToRecipesList } from "../../routes/coordinator";

const Cabecario = ({botaoDireito, setBotaoDireito}) => {
    const token = localStorage.getItem("token")
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem("token")
    }
                                         
    const rightButtonAction = () => {
        if (token){
            logout()
            setBotaoDireito("Login")
            goToLogin(navigate)
        } else {
            goToLogin(navigate)
            
        }
    }

    return (
        <AppBar position="static">
            <StyledToolbar>
                <Button onClick={() => goToRecipesList(navigate)} color="inherit">Cookenu</Button>
                <Button onClick={rightButtonAction} color="inherit">{botaoDireito}</Button>
            </StyledToolbar>
        </AppBar>
    )
}

export {Cabecario}