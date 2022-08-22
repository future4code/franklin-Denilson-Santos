## Exercício 1

Abaixo está a query que cria essa tabela no MySQL

```
    CREATE TABLE Actor (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR (255) NOT NULL,
        salary FLOAT NOT NULL,
        birth_date DATE NOT NULL,
        gender VARCHAR(6) NOT NULL
    );
```
*a) Nesta tabela, utilizamos o `FLOAT` para declarar o salário, porque esta é uma forma de representar um número não inteiro em uma tabela. Explique os demais comandos que estão nessa query.*
* VARCHAR - Um campo de caracter variável de tamanho indeterminado.
* (255) - A quantidade de caracteres que pode ter o VARCHAR.
* PRIMARY KEY - é o identificador único de um registro na tabela.
* DATE - Retorna uma data especificada com o intervalo número especificado
* NOT NULL - Determina que o campo da tabela não pode ser nulo.

*b) O comando `SHOW` é bem útil para nos prover informações sobre bancos, tabelas, e mais. Utilize os comandos: `SHOW DATABASES` e `SHOW TABLES`. Explique os resultados.*
* SHOW DATABASES - Retorna os Bancos existentes;
* SHOW TABLES - Mostra as tabelas dentro do banco

*c) O comando `DESCRIBE` pode ser usado para ver estrutura de uma tabela. Utilize o comando  `DESCRIBE Actor` e explique os resultados.*
* DESCRIBE Actor - Descreve toda a tabela, com linhas e colunas, chaves primarias e tipos;


## Exercício 2

O próximo passo é colocar dados nessa tabela. Vamos começar criando a linha de um ator brasileiro muito famoso.

```
    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
        "001", 
        "Tony Ramos",
        400000,
        "1948-08-25", 
        "male"
    );
```

*a) Escreva uma query que crie a atriz `Glória Pires`, com o id `002`, salário R$1.200.000 e data de nascimento 23 de Agosto de 1963*
```
    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
        "002", 
        "Glória Pires",
        1200000,
        "1963-08-23", 
        "male"
    );
```

b) *Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior `002`. Isso gerará um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu.*

    Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'
    Código de erro: 1062. Entrada duplicada '002' para a chave 'PRIMARY'

* O erro aconteceu porque uma chave primaria como é o ID não pode ter valores repetidos!


Tente usar as queries abaixo. Você vai reparar que elas vão gerar um erro. Anote as mensagens de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esses erros aconteceram. Por fim, corrija individualmente cada query para que funcione, teste o comando e anote-o também como resposta

c)
    
==> COM ERRO

    INSERT INTO Actor (id, name, salary)
    VALUES(
        "003", 
        "Fernanda Montenegro",
        300000,
        "1929-10-19", 
        "female"
    );

==> ERRO CORRIGIDO

    INSERT INTO Actor (id, name, salary)
    VALUES(
        "003", 
        "Fernanda Montenegro",
        300000,
        "1929-10-19", 
        "female"
    );


Error Code: 1036. Column count doesn't match value count at row 1
Código de erro: 1036. A contagem de colunas não corresponde à contagem de valores na linha 1

* O erro acontece porque é passado valores para 5 colunas, mas só é declarada 3 colunas!

d) 

==> COM ERRO
```
    INSERT INTO Actor (id, salary, birth_date, gender)
    VALUES(
        "004",
        400000,
        "1949-04-18", 
        "male"
    );
```
==> ERRO CORRIGIDO

    INSERT INTO Actor (id, salary, birth_date, gender)
    VALUES(
        "004", 
        "Antônio Fagundes",
        400000,
        "1949-04-18", 
        "male"
    );

Error Code: 1164. Field 'name' doenn't have a default value
Código de erro: 1164. O campo 'nome' não tem um valor padrão

* O erro acontece porque a coluna 'name' não tem um valor padrão, então precisa ser declarada

e) 

==> COM ERRO
```
    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
        "005", 
        "Juliana Paes",
        719333.33,
        1979-03-26, 
        "female"
    );
```
==> ERRO CORRIGIDO
```
    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
        "005", 
        "Juliana Paes",
        719333.33,
        "1979-03-26", 
        "female"
    );
```
Error Code: 1292. Incorrect data value '1950' for column 'birth_date' at row 1 
Código de erro: 1292. Valor de dados incorreto '1950' para a coluna 'birth_date' na linha 1

* O erro acontece porque o valor de 'birth_date' foi passado sem as aspas.

## Exercício 3

Com os dados criados, podemos nos aventurar nas queries de seleção de dados. Elas são indicadas pelo operador SELECT. Talvez a query mais famosa que existe é:

```
    SELECT * FROM Actor
```
a) *Escreva uma query que retorne todas as informações das atrizes*

```
    SELECT * FROM Actor WHERE gender = "female";
```

b) *Escreva uma query que retorne o salário do ator com o nome `Tony Ramos`*

```
    SELECT salary FROM Actor WHERE name = "Tony Ramos";
```

c) *Escreva uma query que retorne todas as informações que tenham o `gender` com o valor `"invalid"`. Explique o resultado.*

```
    SELECT * FROM Actor WHERE gender = "invalid";
```

d) *Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000*

```
    SELECT id, name, salary FROM Actor WHERE salary < 500000;
```

e) *Tente usar a query abaixo. Você vai reparar que ela vai gerar um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu. Por fim, corrija individualmente a query para que funcione, teste o comando e anote-o também como resposta*

==> COM ERRO
```
    SELECT id, nome FROM Actor WHERE id = "002"
```
==> ERRO CORRIGIDO
```
    SELECT id, name FROM Actor WHERE id = "002"
```

Error Code: 1054. Unknown column 'nome' in 'field list'
Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos'

* O erro acontece porque o nome da coluna estava errado, foi passado 'nome' e o certo é 'name'.

## Exercício 4

Para finalizar o nosso estudo nas tabelas de atores, vamos fazer uma query mais complexa. Queremos encontrar todos os atores e atrizes:

- cujos nomes começam com "A" ou "J"; e
- cujos salários são maiores do que R$300.000

===> Query
```
    SELECT * FROM Actor
    WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000
```

a) *Explique com as suas palavras a query acima*
* A query faz: Seleciona tudo da tabela Actor, onde o name começa com a letra A ou o nome comece com a letra J e o valor do campo salary é maior que 300000.

b) *Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00*

```
    SELECT * FROM Actor
    WHERE name NOT LIKE "A%" AND salary > 350000;
```

c) *Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome.* 

```
    SELECT * FROM Actor
    WHERE name LIKE "%g%" OR name LIKE "%G%";
```

d) *Escreva uma query com os atores que tenham a letra "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00*

```
    SELECT * FROM Actor
    WHERE 
    (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
    AND salary BETWEEN 350000 AND 900000;
```

## Exercício 5

Terminamos de fazer um belo estudo sobre a tabela de Atores. Agora, você vai ficar mais independente. Precisamos criar a tabela de Filmes com as informações: id, nome, sinopse, data de lançamento e avaliação (que pode ser de 0 a 10)

a) Escreva a query que cria essa tabela. Para sinopse, utilize o tipo TEXT, pesquise sobre ele se precisar. Explique a query resumidamente.

```
    CREATE TABLE Filmes (
            id VARCHAR(255) PRIMARY KEY,
        titulo VARCHAR(255) NOT NULL UNIQUE,
        sinopse TEXT NOT NULL,
        data_lançamento DATE NOT NULL,
        avaliação INT NOT NULL
    );
```

Crie 4 filmes com as seguintes informações: 

===> RESPOSTAS PARA OS EXERCICIOS: 

b), c), d), e)

```
    INSERT INTO Filmes (id, titulo, sinopse, data_lançamento, avaliação) 
    VALUES
    (
        "001",
        "Se Eu Fosse Você",
        "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
        "2006-01-06",
        7
    ),
    (
        "002",
        "Doce de mãe",
        "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
        "2012-12-27",
        10
    ),
    (
        "003",
        "Dona Flor e Seus Dois Maridos",
        "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
        "2017-11-02",
        8
    ),
    (
        "004",
        "Deus é Brasileiro",
        "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
        "2003-01-31",
        9
    );
```

## Exercício 6

Escreva uma query que:

a) Retorne o id, título e avaliação a partir de um id específico;

```
    SELECT id, titulo, avaliação FROM Filmes WHERE id = "004";
```

b) Retorne um filme a partir de um nome específico;

```
    SELECT * FROM Filmes WHERE titulo = "Doce de mãe";
```

c) Retorne o id, título e sinopse dos filmes com avaliação mínima de `7`

```
    SELECT id, titulo, sinopse FROM Filmes WHERE avaliação > 7;
```

## Exercício 7

Escreva uma query que:

a) Retorna um filme cujo título contenha a palavra `vida`
```
    SELECT * FROM Filmes
    WHERE titulo LIKE "%vida%";
```

b) Realize a pesquisa de um filme, ou seja: pesquise se o termo de busca está contido no título ou na sinopse. Utilize qualquer `TERMO DE BUSCA` para exemplificar.
```
    SELECT * FROM Filmes
    WHERE titulo LIKE "%vida%" OR
      sinopse LIKE "%vida%";
```

c) Procure por todos os filmes que já tenham lançado
```
    SELECT * FROM Filmes
    WHERE data_lançamento < "2022-08-16";
```

d) Procure por algum filme que já tenha lançado, com o termo de busca contido no título ou sinopse e com a avaliação maior do que `7`.
```
    SELECT * FROM Filmes
    WHERE data_lançamento < "2022-08-16" AND 
      (titulo LIKE "%Dona%" OR
      sinopse LIKE "%Dona%") AND avaliação > 7;
```

