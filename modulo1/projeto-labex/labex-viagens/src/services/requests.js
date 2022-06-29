import axios from "axios"
import { BASE_URL } from "../constantes/BASE_URL"

export const deleteTrip = (id, getTrips) => {
    axios.delete(`${BASE_URL}/trips/${id}`, {
        headers: { auth: localStorage.getItem("token") }
    })
    .then(() => {
        alert("Viagem deletada com sucesso!")
        getTrips()
    })
    .catch((err) => alert(err.response.data.message))
}