import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../routes/coordinator";
import styled from "styled-components";
import axios from "axios";
import { BASE_URL } from "../constantes/BASE_URL";
import { useForm } from "../hooks/useForm";

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
    height: 200px;
    
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

    const { form, onChange } = useForm({ email: "", password: ""})

    const onSubmitLogin = (event) => {
        event.preventDefault(); // Evita que o form atualize ao enviar o form
        
        axios.post(`${BASE_URL}/login`, form) // O form é passado no lugar do body
        .then((res) => {
            console.log("Deu certo",res.data)
            localStorage.setItem("objeto", res.data)
            localStorage.setItem('token', res.data.token)  
            navigate('/admin/trips:id')
        })
        .catch( (error) => {
            console.log(" Deu errado",error.res)
            alert("Login ou senha incorreto!")
        }) 
        
    }

    return (
        <Container>
            <Section1Container>
                <FormTitulo>Pagina Login</FormTitulo>
                <Form onSubmit={onSubmitLogin}>
                    <input
                        name="email"
                        value={form.email}
                        onChange={onChange}
                        type="email"
                        placeholder="Email"
                        required
                    />
                    <input
                        placeholder="Senha"
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={onChange}
                        required
                    />
                    <div>
                        <Button>Entrar</Button>
                        {<Button onClick={() => goToHomePage(navigate)}>Voltar</Button> } 
                    </div>
                </Form>
                

            </Section1Container>
        </Container>
    )
}

export {LoginPage}