## Exercício 1

Leia os comandos abaixo e indique o que eles fazem. **Não** **os rode** nas tabelas desse projeto! Explique o que elas fariam **se fossem** rodadas.  Você, provavelmente, terá que fazer algumas pesquisas para responder

a)

```sql
ALTER TABLE Actor DROP COLUMN salary;
```
* O comando acima altera a tabela `Actor` excluindo a coluna `salary`.

b)

```sql
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
```
* O comando acima altera a tabela  `Actor`, mudando o nome da coluna `grender` para `sex` com string de até seis caracteres

c) 

```sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
```
* O comando acima altera a tabela  `Actor`, mudando a coluna `grender` para que ela aceite strings com  até 255 caracteres

d) *Agora,  altere a coluna `gender` da tabela `ACTOR` para que ele aceite strings com até 100 caracteres*

```sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

## Exercício 2

O próximo passo é colocar dados nessa tabela. Vamos começar criando a linha de um ator brasileiro muito famoso.

a) *Escreva uma query que atualize o nome e a data de nascimento do ator com o id `003`*

```sql
    UPDATE Actor
    SET 
        name = "Dira Paes",
        birth_date = "2069-06-130"
    WHERE id = "003";
```

b) *Escreva uma query que atualize o nome da atriz `Juliana Paes` para `JULIANA PAES`. Então, escreva outra query para voltar ao nome anterior.*

```sql
    UPDATE Actor
    SET name = "JULIANA PÃES"
    WHERE name = "Juliana Paes";

    UPDATE Actor
    SET name = "Juliana Paes"
    WHERE name = "JULIANA PÃES";
```

c) *Escreva uma query que atualize todas as informações do ator com o id `005`*

```sql
    UPDATE Actor
    SET 
    name = "Isis Valverde",
    birth_date = "1987-02-17",
    salary = 1600000,
    gender = "female"
    WHERE id = "005";
```

d) *Escreva uma query em que você tente atualizar um dado da tabela que não existe (com um id inválido, por exemplo). Teste, anote e explique o resultado.*

```sql
    UPDATE Actor
    SET 
        name = "Vera Fisher"
    WHERE id = "009";
```

0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0

* O comando rodou, mas não afetou nenhuma linha, nem encontrou nenhuma linha, não houve nenhuma mudança e também não emitiu nenhum aviso!


## Exercício 3

Para finalizar o CRUD, vamos ver o D: `DELETE`. Esse operador permite deletar toda uma linha de uma tabela, seria como apagar um elemento dela. 

Por exemplo, se quisermos apagar o ator com o nome `Tony Ramos`

```sql
DELETE FROM Actor WHERE name = "Tony Ramos"
```

a) *Escreva uma query que apague a atriz com o nome `Fernanda Montenegro`*

```sql
DELETE FROM Actor WHERE name = "Fernanda Montenegro`"
```

b) *Escreva uma query que apague todos os atores (do gênero `male`) com o salário maior do que R$1.000.000,00*
```sql
    DELETE FROM Actor
    WHERE
        gender = "male" AND
        salary > 1000000
```
## Exercício 4

Para finalizar vamos ver a função `COUNT`, que permite contar a quantidade de elementos. Por exemplo, se quisermos contar todos os atores, poderíamos fazer assim:

```sql
    SELECT COUNT(*) FROM Actor
```
Ou, então, poderíamos ver a quantidade de atrizes no nosso banco, colocando uma condição para entrar na contagem:
```sql
    SELECT COUNT(*) FROM Actor WHERE gender = "female"
```
Para encerrar os nossos exemplos, vamos falar da função AVG ("Average" - média em inglês) que permite calcular a média de alguma das colunas dos nossos dados. Por exemplo, a query abaixo devolve a média dos salários dos atores
```sql
    SELECT AVG(salary) FROM Actor;
```
Existem outras funções, tais como: MAX e MIN que permitem determinar os valores máximos e mínimos de uma coluna.
a) *Escreva uma query que pegue o maior salário de todos os atores e atrizes*
```sql
    SELECT MAX(salary) FROM Actor;
```

b) *Escreva uma query que pegue o menor salário das atrizes*
```sql
    SELECT MIN(salary) FROM Actor WHERE gender = "female";
```

c) *Escreva uma query que pegue a quantidade de atrizes*
```sql
    SELECT COUNT(*) FROM Actor WHERE gender = "female";
```

d) *Escreva uma query que pegue a soma de todos os salários*
```sql
    SELECT SUM(salary) FROM Actor;
```


## Exercício 5

Para finalizar o que vimos na aula, temos que treinar as operações indicadas por `LIMIT`, `ORDER BY` e `GROUP BY`.

### Exemplos

O `LIMIT`, como o próprio nome sugere, limita a quantidade de dados retornados. Se quisermos somente 3 atores da tabela:

```sql
    SELECT * FROM Actor LIMIT 3
```

`ORDER BY` permite que ordenemos os dados dependendo de alguma coluna da tabela. Podemos dizer se queremos na ordem crescente (`ASC`) ou decrescente (`DESC`). A sintaxe é: `ORDER BY coluna ASC/DESC`. Se quisermos os atores em ordem alfabética:

```sql
    SELECT * FROM Actor ORDER BY name ASC
```

Podemos juntar com o `LIMIT` e pegarmos os 4 primeiros atores (em ordem alfabética):

```sql
    SELECT * FROM Actor ORDER BY name ASC LIMIT 4
```

Até pegar somente as 4 primeiras atrizes em ordem alfabética:

```sql
    SELECT * FROM Actor
    WHERE gender = 'female'
    ORDER BY name ASC
    LIMIT 4
```

O último é um operador que permite agrupar os dados em relação a alguma coluna da tabela: `GROUP BY`. Ele normalmente é usado junto com algumas das funções que já vimos: `AVG`, `COUNT`, `SUM`, etc. A query abaixo retorna a quantidade de atores e atrizes na tabela (ou seja, em relação ao `gender`)
```sql
    SELECT COUNT(*), gender
    FROM Actor
    GROUP BY gender
```
### Fim dos Exemplos 

a) *Releia a última query. Teste-a. Explique o resultado com as suas palavras*
* A query faz a contagem da coluna `grender` da tabela `Actor` agrupando pelas linhas da coluna `grender` que é male e female.

b) *Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética*
```sql
    SELECT id, name FROM Actor
    ORDER BY name DESC;
```

c) *Faça uma query que retorne todos os atores ordenados pelo salário*
```sql
    SELECT name, salary FROM Actor
    ORDER BY salary ASC;
```

d) *Faça uma query que retorne os atores com os três maiores salarios*
```sql
    SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;
```

e) *Faça uma query que retorne a média de salário por gênero*
```sql
    SELECT AVG(salary), gender
    FROM Actor
    GROUP BY gender;
```


## Exercício 6

Escreva uma query que:

a) *Altere a tabela de `Movie` e adicione um novo parâmetro: `playing_limit_date` que indique a data limite em que o filme será passado no cinema.* 
```sql
    ALTER TABLE Filmes ADD data_fim_exibicao DATE;
```

b) *Altere a tabela de `Movie` para que o parâmetro `rating` possa aceitar valores não inteiros, como, por exemplo, uma avaliação `8.5`.*
```sql
    ALTER TABLE Filmes CHANGE avaliação avaliação FLOAT;
```

c) *Atualize dois filmes de tal forma que tenhamos um que ainda esteja em cartaz e um que já tenha saído*
```sql
    UPDATE Filmes
    SET
        data_fim_exibicao = "2013-12-27"
    WHERE id = "002"

    UPDATE Filmes
    SET
        data_fim_exibicao = "2022-11-02"
    WHERE id = "003"
```

d) *Delete algum dos filmes, mas guarde o id. Tente fazer uma query para atualizar a sinopse desse filme que você acabou de deletar (usando o mesmo id). Anote o resultado e explique.*
```sql
    DELETE FROM Filmes WHERE id = "002";
```
```sql
    UPDATE Filmes
    SET
        sinopse = "O filme foi deletado"
    WHERE id = "002";
```





