import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../routes/coordinator";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 97vw;
    height: 97vh;

    background: #FFFFFF;
`

const Section1Container = styled.div`
    background-color: #FFD868;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    align-items: center;

    width: 91vw;
    height: 97vh;

    

`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 600px;
    height: 150px;
    
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

const LoginPage = () => {
    const navigate = useNavigate();

    // Criar logica de validar email

    return (
        <Container>
            <Section1Container>
                <FormTitulo>Pagina Login</FormTitulo>
                <Form >
                    <input
                        placeholder={"E-mail"}
                        type={"email"}
                        name={"email"}
                    
                        required
                    />
                    <input
                        placeholder={"Senha"}
                        type={"password"}
                        name={"password"}
                    
                        required
                    />
                </Form>
                <div>
                    {<Button onClick={() => goToHomePage(navigate)}>Voltar</Button> }
                    <Button type={"submit"}>Entrar</Button>
                </div>
                

            </Section1Container>
        </Container>
    )
}

export {LoginPage}