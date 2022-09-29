import UserDatabase from "../database/UserDatabase"
import { User, USER_ROLES } from "../model/User"
import { Authenticator, ITokenPayload } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export default class UserBusiness {
    public signup = async (input: any) => {
        const name = input.name
        const email = input.email
        const password = input.password

        if (!name || typeof name !== "string") {
            throw new Error("Parâmetro 'name' inválido")
        }

        if (!email || typeof email !== "string") {
            throw new Error("Parâmetro 'email' inválido")
        }

        if (!email.includes('@')) {
            throw new Error("Email inválido")
        }

        const idGenerator = new IdGenerator()
        const id = idGenerator.generate()

        const hashManager = new HashManager()
        const hashPassword = await hashManager.hash(password)

        const user = new User(
            id,
            name,
            email,
            hashPassword
        )

        const userDatabase = new UserDatabase()
        await userDatabase.createUser(user)

        const payload: ITokenPayload = {
            id: user.getId(),
            role: user.getRole()
        }

        const authenticator = new Authenticator()
        const token = authenticator.generateToken(payload)

        const response = {
            token
        }

        return response
    }

    public login = async (input: any) => {
        const email = input.email
        const password = input.password

        if (!email || !password) {
            throw new Error("Parametro faltando")
        }

        if (!email.includes('@')) {
            throw new Error("Email inválido")
        }

        if (typeof password !== "string" || password.length > 3) {
            throw new Error("Senha invalida")
        }

        const userDB = await new UserDatabase().findByEmail(email)

        if(!userDB) {
            throw new Error("Email não cadastrado")
            
        }

        const user = new User(
            userDB.id,
            userDB.name,
            userDB.email,
            userDB.password,
            userDB.role
        )

        const isCorrectPassword = await new HashManager().compare(password, user.getPassword())

        if (isCorrectPassword) {
            throw new Error("Senha incorreta")
        }

        const payload: ITokenPayload = {
            id: user.getId(),
            role: user.getRole()
        }

        const token = new Authenticator().generateToken(payload)
        
        const response = {
            message: "Sucesso ao realizar o login",
            token
        }

        return response
    }
}