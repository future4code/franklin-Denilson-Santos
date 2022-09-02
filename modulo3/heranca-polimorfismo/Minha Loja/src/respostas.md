# HERANCA

## Exercício 1

a) *Seria possível imprimir a senha (`password`) atrelada a essa instância?*
 * Por ser um metodo  `private` , a  `senha`  só pode ser vista pela classe  `Usuario` , se alterasse o metodo de  `senha` para `public` poderia ser acessado em qualque parte da aplicação, ou também se alterarmos o metodo para `protected` a  `senha` poderia ser acessada por classes derivadas/filhas da classe `Usuario`.

b) *Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal?*
* Apenas uma vez!

## Exercício 2

a) *Quantas vezes a mensagem `"Chamando o construtor da classe Customer"` foi impressa no terminal?* 
* Apenas uma vez

b) *Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal? Por quê?*
* Apenas uma vez. Porque a classe cliente herda as propriedades da classe usuário, que é chamado pela construtor do usuario!

## Exercício 3

a) Seria possível imprimir a senha (password) atrelada a essa instância? Por quê?
* Não, porque apesar de estar herdando as propriedades da classe pai, uma propriedade privada só pode ser acessada na sua classe de origem!

## Exercício 4

Adicione um método público à classe User. Esse método deve ter o nome de introduceYourself("apresente-se") e deve retornar a mensagem: "Olá, bom dia!". As classes filhas sempre têm acesso aos métodos públicos da classe pai. Então, para realizar o teste dessa sua função, faça com que a instância que você criou para a classe Customer chame esse método

```typescript
public apresenteSe(): string {
    return `Olá, Bom dia!`
}

console.log(pedro.apresenteSe())

```

## Exercício 5

Altere o método que você acabou de criar para que ele imprima a mensagem: "Olá, sou ${nome do usuário}. Bom dia!". Realize os mesmos testes anteriores.

```typescript
public apresenteSe(): string {
    return `Olá, sou ${this.nome}. Bom dia!`
}

console.log(pedro.apresenteSe())

```