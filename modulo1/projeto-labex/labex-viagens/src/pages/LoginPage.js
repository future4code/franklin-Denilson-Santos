import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../routes/coordinator";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constantes/BASE_URL";

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
    const [ email, setEmail] = useState("");
    const [ password, setPassword] = useState("");

    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value);
    }

    const onSubmitLogin = () => {
        const body = {
            email: email,
            password: password
        };

        axios.post(`${BASE_URL}/login`, body)
        .then((res) => {
            console.log("Deu certo",res.data)
            localStorage.setItem("objeto", res.data)
            localStorage.setItem('token', res.data.token)  
            navigate('/admin/trips:id')
        })
        .catch( (error) => {
            console.log(" Deu errado",error.res)
        })
        
    
    }

    return (
        <Container>
            <Section1Container>
            <FormTitulo>Pagina Login</FormTitulo>
                <Form >
                    <input
                        placeholder="Email"
                        type="email"
                        name="email"
                        value={email}
                        onChange={onChangeEmail}
                        required
                    />
                    <input
                        placeholder="Senha"
                        type="password"
                        name="password"
                        value={password}
                        onChange={onChangePassword}
                        required
                    />
                </Form>
                <div>
                    {<Button onClick={() => goToHomePage(navigate)}>Voltar</Button> }
                    <Button type={"submit"} onClick={onSubmitLogin}>Entrar</Button>
                </div>
                

            </Section1Container>
        </Container>
    )
}

export {LoginPage}