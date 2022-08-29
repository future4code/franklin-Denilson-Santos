# Exercício 1
    
No nosso sistema, os filmes podem ser avaliados com uma nota de 0 a 10. Só que, agora, queremos pegar comentários junto com essas notas. Para isso, teremos que criar uma tabela para guardar essas informações. 

As avaliações estão diretamente relacionadas aos filmes. Cada filme pode ter várias avaliações; e uma avaliação está sempre atrelada a apenas um filme. Ou seja, é uma relação **1:N**. Essa situação é representada colocando uma referência da tabela de filmes na tabela de avaliação, através de uma chave estrangeira. Abaixo, há a Query que cria essa tabela

```sql
CREATE TABLE Avaliação (
    id VARCHAR(255) PRIMARY KEY,
    comentarios TEXT NOT NULL,
    avaliar FLOAT NOT NULL,
    filme_id VARCHAR(255),
    FOREIGN KEY (filme_id) REFERENCES Filmes(id)
);
```

*a) Explique o que é uma chave estrangeira*
* Chave estrangeira (foreign key) é o campo que estabelece o relacionamento entre duas tabelas.

*b) Crie a tabela e, ao menos, uma avaliação para cada um dos filmes*
```sql
INSERT INTO Avaliação (id, comentarios, avaliar, filme_id) 
VALUES ("001", "Um bom filme, engraçado e para toda a família!", 7, "001"),
("003", "Um bom filme, em uma grande obra de romance de Jorge Amado!", 7, "003"),
("004", "Muito bom filme, engraçado e alto astral!", 8, "004"),
("005", "Sem duvidas o melhor filme nacional de todos os tempos, grandes atuações e otima direção!", 10, "005"),
("006", "Um otimo filme, realista, que escancara uma façe da realidade do Rio de Janeiro!", 10, "006");
```

*c) Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.*
```sql
INSERT INTO Avaliação (id, comentarios, avaliar, filme_id) 
VALUES ("002", "Um bom filme, engraçado e para toda a família!", 7, "002");
```
Código de erro: 1452. Não é possível adicionar ou atualizar uma linha filho: uma restrição de chave estrangeira falha (`franklin-denilson-santos`.`Avaliação`, CONSTRAINT `Avaliação_ibfk_1` FOREIGN KEY (`filme_id`) REFERÊNCIAS `Filmes` (`id` ))

* Não é possivel inserir um comentário a um filme, referenciado por uma chave extrangeira, passando um referencia incorreta!


d) *Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.*
```sql
ALTER TABLE Filmes DROP COLUMN avaliação;
```

*e) Tente apagar um filme que possua avaliações. Anote e explique o resultado da query.*

```sql
DELETE FROM Filmes
WHERE id = 001;
```
Código de erro: 1175. Você está usando o modo de atualização segura e tentou atualizar uma tabela sem um WHERE que usa uma coluna KEY. Não é possível usar o acesso de intervalo no índice 'PRIMARY' devido à conversão de tipo ou agrupamento no campo 'id' Para desabilitar o modo de segurança, alterne a opção em Preferências -> Editor SQL e reconecte.

# Exercício 2
    
Algo muito importante que está faltando na nossa aplicação é representar o elenco dos filmes. Até agora, possuímos uma tabela com os filmes e outra tabela com os atores. Nós sabemos que um ator pode participar de vários filmes; e um filme pode ser estrelado por vários autores. Isso caracteriza uma relação **N:M.**

Essa relação é normalmente representada por uma tabela de relação. No nosso caso, vamos chamar essa tabela de `MovieCast` ("elenco do filme"). Ela vai possuir apenas duas colunas que fazem referências aos filmes e aos atores através de duas chaves estrangeiras.

```sql
CREATE TABLE Elenco (
    filme_id VARCHAR(255),
    ator_id VARCHAR(255),
    FOREIGN KEY (filme_id) REFERENCES Filmes(id),
    FOREIGN KEY (ator_id) REFERENCES Actor(id)
);
```

*a) Explique, com as suas palavras, essa tabela*

* É uma tabela que faz referencia a filmes e atores!

*b) Crie, ao menos, 6 relações nessa tabela* 
```sql
INSERT INTO Elenco(filme_id, ator_id)
VALUES( "004", "006"), 
	( "001", "001"), 
    ( "001", "002"), 
    ( "003", "004"), 
    ( "006", "003"), 
    ("005", "005");
```

*c) Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query*
```sql
INSERT INTO Elenco(filme_id, ator_id)
VALUES( "002", "006");
```
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`franklin-denilson-santos`.`Elenco`, CONSTRAINT `Elenco_ibfk_1` FOREIGN KEY (`filme_id`) REFERENCES `Filmes` (`id`))

* Não é possivel inserir referencia por duas chaves extrangeiras, passando uma chave incorreta!

*d) Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query*
```sql
DELETE FROM Actor
WHERE id = 006;
```
* Código de erro: 1175. Você está usando o modo de atualização segura e tentou atualizar uma tabela sem um WHERE que usa uma coluna KEY. Não é possível usar o acesso de intervalo no índice 'PRIMARY' devido à conversão de tipo ou agrupamento no campo 'id' Para desabilitar o modo de segurança, alterne a opção em Preferências -> Editor SQL e reconecte.

# Exercício 3
    
Para ler informações dessas tabelas, nós podemos aproveitar a relação entre elas e já **juntar** informações delas duas. Isso pode ser feito através do operador `JOIN`. 

Vamos começar estudando o `INNER JOIN`. Esse operador retorna somente os dados que possuem **correspondentes** **nas duas tabelas**. Então, por exemplo, se quisermos pegar todos os filmes que já foram avaliados e as suas respectivas avaliações, poderíamos fazer assim: 

```sql
SELECT * FROM Filmes 
INNER JOIN Avaliação ON Filmes.id = Avaliação.filme_id; 
```

*a) Explique, com suas palavras, a query acima. O que é o operador `ON`?*
 * A query acima seleciona todos os filmes e faz a junção com as Avaliações entre as tabelas de filmes e avaliaçõs! Já o operador `ON` é utilizado quando se tem nomes de colunas diferentes ou iguais entre as tabelas,

*b) Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados.*
```sql
SELECT m.id as filme_id, r.avaliar as Avaliação FROM Filmes m
INNER JOIN Avaliação r ON m.id = r.filme_id;
```