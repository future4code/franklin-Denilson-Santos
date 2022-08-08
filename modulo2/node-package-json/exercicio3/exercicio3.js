export const exercicio3 = () => {

    let listaTarefas = [
        "Lavar a louca",
        "Comprar leite",
        "Fazer as malas",
        "Fazer o jantar"
    ]

    console.log(listaTarefas)

    listaTarefas.push(process.argv[2]);
    

    console.log(listaTarefas)
    console.log("Tarefa adicionada com sucesso")
}