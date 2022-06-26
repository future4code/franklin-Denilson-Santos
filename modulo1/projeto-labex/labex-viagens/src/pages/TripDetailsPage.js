import { goToHomePage } from "../routes/coordinator"



const TripDetailsPage = () => {

    return (
        <div>
            <h1>Pagina Detalhes da Viagem</h1>
            {<button onClick={() => goToHomePage()}>Voltar</button> }
        </div>
    )
}

export {TripDetailsPage}