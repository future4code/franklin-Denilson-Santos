import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BASE_URL } from "../constantes/BASE_URL";
import { UseRequestData } from "../hooks/UseRequestData";
import { goToListTripsPage} from "../routes/coordinator";
import { useForm } from "../hooks/useForm";
import axios from "axios";


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


const AplicationFormPage = () => {
    const navigate = useNavigate();

    const [ todasViagens ] = UseRequestData(`${BASE_URL}/trips`)
    const {form, onChange} = useForm({ name: "", age: "", applicationText: "", profession: "", country: "", tripSelected: "" })

    const onSubmitLogin = (event) => {
        event.preventDefault(); // Evita que o form atualize ao enviar o form
        
        axios.post(`${BASE_URL}/trips/${form.tripSelected}/apply`, form) // O form é passado no lugar do body
        .then((res) => {
            console.log("Deu certo",res.data.trip)
            console.log("Viagem Selecionada", form.tripSelected)
            alert("Aplicação enviada com sucesso!") 
           
        })
        .catch( (error) => {
            console.log(" Deu errado",error.res)
        }) 
        
    }

    

    const tripsOptions = todasViagens && todasViagens.length > 0 && todasViagens.map((viagens) => {
        return <option key={viagens.id} value={viagens.id}>{viagens.name}</option>
    })
    
    return (
        <Container>
            <Section1Container>
                <FormTitulo>Pagina Formulário da Aplicação</FormTitulo>
                
                <form onSubmit={onSubmitLogin}>
                    <select defaultValue="" name="tripSelected" required value={form.tripSelected}>
                        <option value="" disabled>Escolha uma Viagem</option>
                        {tripsOptions}
                    </select>
                    
                    <input
                        name="name"
                        value={form.name}
                        onChange={onChange}
                        type="text"
                        placeholder="Nome"
                        required
                        pattern={"^.{3,}$"}
                        title={"O nome deve ter no mínimo 3 caracteres"}
                    />
                    <input
                        name="age"
                        value={form.age}
                        onChange={onChange}
                        type="number"
                        placeholder="Idade"
                        required
                        min={18}
                    />
                    <input
                        name="applicationText"
                        value={form.applicationText}
                        onChange={onChange}
                        type="text"
                        placeholder={"Texto de Candidatura"}
                        required
                        pattern={"^.{30,}$"}
                        title={"O texto deve ter no mínimo 30 caracteres"}
                    />
                    <input
                        name="profession"
                        value={form.profession}
                        onChange={onChange}
                        type="text"
                        placeholder={"Profissão"}
                        required
                        pattern={"^.{10,}$"}
                        title={"A profissão deve ter no mínimo 10 caracteres"}
                    />
                    <input
                        name="country"
                        value={form.country}
                        onChange={onChange}
                        type="text"
                        placeholder={"País"}
                        required
                    />
                    <div>
                        {<Button >Enivar</Button> } 
                        <Button onClick={() => goToListTripsPage(navigate)}>Ver Viagens</Button>
                    </div>
                    
                </form>
               
            </Section1Container>
        </Container>
)
}

export {AplicationFormPage}