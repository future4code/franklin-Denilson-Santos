import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import Authenticator from "./services/Authenticator"
import { authenticatorData } from "./types"
// import { IdGenerator } from "./services/IdGenerator"

// const generator = new IdGenerator().generateId()

// console.log(`Resultado Gerador: ${generator}`)

const autentication = new Authenticator()

const payload: authenticatorData = {
    id: "id-bananinha"
}

console.log(autentication.generateToken(payload))

app.post('/user/signup', createUser)
app.put('/user/edit/:id', editUser);
