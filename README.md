# NLW E-Sports
Projeto <b>Find your DUO</b>, ambiente de desenvolvimento com Node, React e mobile (React Native).
<br>
<br>Trata-se de um cadastro de anúncios que permitem o usuário encontrar um DUO baseado nas informações do anúncio, como jogo, horário e discord.
<br><br>
<h3 align="left">Funcionalidades da aplicação</h3>


- Home page, apresentando os games e a quantidade de anúncio cadastrado por cada game.. 

![lp](https://user-images.githubusercontent.com/49600131/201557968-415a7e73-07f5-4b95-9f9e-185c2a6852ec.png)

<br>

- Modal de cadastro, aqui o usuário vai adicionar o anúncio relacionado a um dos games, indicando que ele está buscando um DUO.

![cadastro](https://user-images.githubusercontent.com/49600131/201558027-b0bf04e0-7da4-483f-b363-438358d3bf1c.png)


<h3 align="left">Back-end</h3>

Back-end foi realizando com Node e utilizando a ORM Prisma para gerenciar o banco de dados (SQLite)

![prisma](https://user-images.githubusercontent.com/49600131/201558955-ef1ff62e-edec-4288-a5fd-cf1870e6cfca.png)

<h3 align="left">Melhorias</h3>

- Tornar a parte web responsiva
- Carousel na listagem de games (keen-slider)
- Radix no componente de select
- Validação nos campos do formulário (react-hook-form, zod)
- Autenticação (talvez login com discord)
