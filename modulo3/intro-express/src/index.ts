import express, { Response, Request } from "express";
import cors from "cors";
import { listaUsers } from "./listaUsers";
import { listaPost } from "./listaPosts";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log('Server is running in http://localhost:3003')
})

app.get("/exercicio1", (req:Request, res:Response) => {
    res.send("Hello from Express").status(201)
})
//Optei por realizar o array de posts fora do array de usuários, pois é o mesmo formato apresentado pelo exemplo da API JSONPlaceholder. Evita ficar um objeto muito complexo.
app.get("/users", (req:Request, res:Response) => {
    res.send(listaUsers).status(201)
})

app.get("/posts", (req:Request, res:Response) => {
    res.send(listaPost).status(201)
})

app.get("/posts/:userId", (req:Request, res:Response) => {
const userId = Number(req.params.userId)
const getPostsUser = listaPost.filter((post) => {
    return post.userId === userId 
})
if(!getPostsUser) {
    res.status(404).send({message: "Usuário não encontrado para este ID"})
}
res.status(201).send(getPostsUser)
})

app.delete("/posts/:postId", (req:Request, res:Response) => {
    const postid = Number(req.params.id)

    const index = listaPost.findIndex((i) => i.id === postid);
    if(index) {
        listaPost.splice(index, 1) 
        res.send('Ok! Deletado!').status(201)
    }
    if(!index){
        res.send("Erro")

    }

})


