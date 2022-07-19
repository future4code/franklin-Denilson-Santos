import axios from "axios"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from "../constantes/BASE_URL"
import { planetas } from "../constantes/planetas"
import { useForm } from "../hooks/useForm"
import { GoToAdminHomePage } from "../routes/coordinator"
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 97vw;
    height: auto;

    background: #FFFFFF;
`

const Section1Container = styled.div`
    background-color: #FFD868;
    display: flex;
    flex-direction: column;
    
    align-items: center;

    width: 91vw;
    height: 100%;

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


const CreateTripPage = () => {
    const navigate = useNavigate()

    const {form, onChange} = useForm({ name: "", planet: "", date: "", description: "", durationInDays: "" })


    const createTrip = (body) => {
        axios.post(`${BASE_URL}/trips`, body, {
            headers: {auth: localStorage.getItem("token")}
        })
        .then(() => {
            alert("Viagem adicionada com sucesso!")
        
        })
        .catch((err) => alert(err.response.data.message))
    }

    const onClickCreate = (e) => {
        e.preventDefault()
        createTrip(form)
    }

    return (
        <Container>
            <Section1Container>

                <FormTitulo>Pagina de Criação de viagens</FormTitulo>
                <form onSubmit={onClickCreate}>
                    <input
                        placeholder={"Nome"}
                        name={"name"}
                        value={form.name}
                        onChange={onChange}
                        pattern={"^.{5,}$"}
                        title={"O nome da viagem deve ter no mínimo 5 caracteres"}
                        required
                    />
                    <select
                        placeholder={"Planeta"}
                        name={"planet"}
                        defaultValue={""}
                        onChange={onChange}
                        required
                    >
                        <option value={""} disabled>Escolha um Planeta</option>
                        {planetas.map((planet) => {
                            return <option value={planet} key={planet}>{planet}</option>
                        })}
                    </select>
                    <input
                        placeholder={"Data"}
                        type={"date"}
                        name={"date"}
                        value={form.date}
                        onChange={onChange}
                        required
                        pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
                        
                    />
                    <input
                        placeholder={"Descrição"}
                        name={"description"}
                        value={form.description}
                        onChange={onChange}
                        required
                        pattern={"^.{30,}$"}
                        title={"O nome deve ter no mínimo 30 caracteres"}
                    />
                    <input
                        placeholder={"Duração em dias"}
                        type={"number"}
                        name={"durationInDays"}
                        value={form.durationInDays}
                        onChange={onChange}
                        required
                        min={50}
                    />
                    <div>
                        <Button onClick={() => GoToAdminHomePage(navigate)}>Voltar</Button>
                        <Button type={"submit"}>Criar</Button>
                    </div>
                </form>
            </Section1Container>
        </Container>
    )
}

export {CreateTripPage}