import axios from "axios"
import { BASE_URL } from "../constantes/BASE_URL"
import { GoToLoginPage } from "../routes/coordinator"

export const enviaCandidatura = (body, id) => {
    axios.post(`${BASE_URL}/trips/${id}/apply`, body)
        .then(() => {
            alert("Aplicação enviada com sucesso!")
        })
        .catch((err) => alert(err.response.message))
}

export const logout = (navigate) => {
    localStorage.removeItem("token")
    GoToLoginPage(navigate)
}

export const deleteTrip = (id) => {
    const token = localStorage.getItem('token')
    const content = 'application/JSON'

    axios.delete(`${BASE_URL}/trips/${id}`, {
        headers: {
            ContentType: content,
            auth: token
        }
    }).then((res) => {
        if (window.confirm(`Tem certeza que deseja deletar a viagem?`)) {
            
            alert('Viagem deletada com sucesso!')
            console.log(res.data)
        }
    }).catch((err) => {
        console.log(err)
    })
}


