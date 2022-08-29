# Exercício 1

### Utilize os *raws* para criar funções de Typescript que realizem as operações abaixo. Tente prestar atenção nos tipos das variáveis de entrada e de saída.

a) *Explique como é a resposta que temos quando usamos o `raw`.* 

b) *Faça uma função que busque um ator pelo nome;*

```TypeScript
const getActorByName = async (req: Request, res: Response ) => {
    try {

        const result = await connection("Actor")
        .where({
            name: req.params.name
        })

        console.log(result);
        res.send(result);

    } catch (error) {
        console.log(error)
        res.status(500).send("Erro inesperado")
    }
}
```

c) *Faça uma função que receba um `gender` retorne a quantidade de itens na tabela Actor com esse `gender`. Para atrizes, `female` e para atores `male`.*

```TypeScript
const getActorByGender = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `);
      
    const count = result[0][0].count;
    return count;
};
```

# Exercício 2
    
Agora vamos treinar um pouco os *query builders*. Eles são uma forma mais simples de fazer requisições que já tratam as respostas e as queries usando elementos diretamente do Javascript (objetos e arrays). Abaixo, há uma query que cria um ator:
```TypeScript
const createActor = async (
  id: string,
  name: string,
  salary: number,
  dateOfBirth: Date,
  gender: string
): Promise<void> => {
  await connection
    .insert({
      id: id,
      name: name,
      salary: salary,
      birth_date: dateOfBirth,
      gender: gender,
    })
    .into("Actor");
};
```
Utilize os queries builders para criar funções de Typescript que realizem as operações abaixo. Tente prestar atenção nos tipos das variáveis de entrada e de saída.

a) *Uma função que receba um salário e um id e realiza a atualização do salário do ator em questão*
```TypeScript
const updateActor = async (id: string, salary: number): Promise<any> => {
  await connection("Actor")
    .update({
      salary: salary,
    })
    .where("id", id);
};
```

b) *Uma função que receba um id e delete um ator da tabela*
```TypeScript
const deleteActor = async (id: string): Promise<void> => {
  await connection("Actor")
    .delete()
    .where("id", id);
}; 
```

c) *Uma função que receba um `gender` e devolva a média dos salários de atrizes ou atores desse `gender`*
```TypeScript
const avgSalary = async (gender: string): Promise<any> => {
  const result = await connection("Actor")
    .avg("salary as average")
    .where({ gender });

  return result[0].average;
};
```
# - Exercício 3
    
Está na hora de começar a criar alguns endpoints. O mais simples de todos talvez seja o de pegar o ator pelo `id`.  Queremos criar um método GET que receba como *path param* o *id* do ator cujas informações queremos pegar. Para isso, devemos:
    
- Usar a função `get` do express
- Definir o *path param* com a **chave id: `/actor/:id`.** Dessa forma, poderemos acessar o endpoint assim: `http://localhost:3000/user/id-do-usuario`

```TypeScript
app.get("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const actor = await getActorById(id);

    res.status(200).send(actor)
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```
a) Crie um endpoint com as especificações acima
```TypeScript
const deleteActor = async (id: string): Promise<void> => {
  await connection("Actor")
    .delete()
    .where("id", id);
}; 
```

b) Crie um endpoint agora com as seguintes especificações:

- Deve ser um GET (`/actor`)
- Receber o gênero como um *query param* (`/actor?gender=`)
- Devolver a quantidade de atores/atrizes desse gênero
```TypeScript
app.get("/actor", async (req: Request, res: Response) => {
  try {
    const count = await countActors(req.query.gender as string);
    res.status(200).send({
      quantity: count,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```
# - Exercício 4
    
Para finalizar o estudo, você vai criar mais um endpoint. Só que, antes, queremos dar mais um exemplo. Vamos fazer um endpoint para criar um novo ator. Para isso, devemos:

- Definir o método como `POST`
- Criar um path: `/actor`
- Receber os parâmetros pelo body
```TypeScript
app.post("/actor", async (req: Request, res: Response) => {
  try {
    await createActor(
      req.body.id,
      req.body.name,
      req.body.salary,
      new Date(req.body.dateOfBirth),
      req.body.salary
    );

    res.status(200).send();
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```
Perceba que tivermos que criar uma nova data. Isso acontece porque o JSON só envia para gente um número, um booleano ou uma string. Assim, como a nossa função espera receber um `Date`, devemos criar uma nova instância dessa classe.

Crie um endpoint para cada uma das especificações abaixo:

a) Endpoint para atualizar salário com id
- Deve ser um PUT (`/actor`)
- Receber o salário e o id pelo body
- Simplesmente atualizar o salário do ator com id em questão
```TypeScript
app.put("/actor", async (req: Request, res: Response) => {
  try {
    await updateSalary(req.body.id, req.body.salary);
    res.status(200).send({
      message: "Success",
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```
b) Endpoint para deletar ator da tabela
- Deve ser um DELETE (`/actor/:id`)
- Receber id do ator como *path param*
- Simplesmente deletar o ator da tabela
```TypeScript
app.delete("/actor/:id", async (req: Request, res: Response) => {
  try {
    await deleteActor(req.params.id);
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```

