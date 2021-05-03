<p align="center">
  <h1 align="center">Backend Ada's Girls</h1>
</p>

<h4 align="center">
  <a href="#information_source-sobre-o-projeto">Sobre</a> |
  <a href="#nut_and_bolt-funcionalidades">Funcionalidades</a> |
  <a href="#books-tecnologias-e-ferramentas">Tecnologias e ferramentas</a> |
  <a href="#running-demonstração-da-aplicação">Demostração</a>
</h4>
<h4 align="center">
  <a href="#package-como-baixar-o-projeto">Como baixar o projeto</a> |
  <a href="#recycle-como-atualizar-seu-fork">Como atualizar seu fork</a>
</h4>

## :information_source: Sobre o Projeto
Template utilizado para avalização de code review na Hack GRRRL 2021 ✨👩‍💻✨
### Objetivo e Motivações

Mesmo com todos os avanços em pleno século XXI, a sociedade continua sendo em sua maior parte machista. Tendo em vista o desafio "Ética e Marketing para o público feminino", resolvemos abordar a questão de como as mulheres, antes de comprar algum produto ou serviço, podem saber se a empresa/marca por trás do mesmo tem uma boa representatividade de mulheres em propagandas. Portanto, temos como propósito trazer informações relacionadas as propagandas das marcas (se têm diversidade, inclusão ou se são sexistas, machistas, objetificam a mulher...) e como é o engajamento delas em prol das causas femininas.

Nosso objetivo é prover, para as mulheres, de maneira simplificada, uma plataforma que reúna empresas/marcas e suas respectivas reputações com propagandas relacionadas a mulheres, além de notícias que corroborem com as avaliações.

Uma das principais inspirações para o desenvolvimento da nossa solução foi o site https://modalivre.org.br/. Uma plataforma de funcionamento semelhante, que incentiva o consumidor a comprar roupas de maneira consciente ao avalia marcas quanto ao emprego de trabalho escravo em suas produções e suas ações para evitar que isso aconteça.

### Que tecnologias vocês usaram no hackathon?
Para esse hackathon desenvolvemos 3 aplicações integradas para resolver o problema proposto.
Optamos por separar bem as funções entre os 3:

- Frontend utilizando javascript com ReactJS para desenvolver as interfaces com as usuárias.
- Backend, utilizando javascript com NodeJS e uma base de dados não relacional MongoDB, para armazenar e prover os dados sobre as empresas e notícias.
- Web Crawler, utilizando python para obter e analisar dados de sites de notícias


### Por que vocês escolheram essas tecnologias?
No frontend e backend utilizamos as tecnologias anteriormente citadas por já serem de conhecimento prévio de algumas integrantes da equipe. Já para o crawler foi escolhido o python pois pareceu a opção com a menor curva de aprendizado para atingir o objetivo proposto para ele.

### Qual foi a maior desafio (da parte de desenvolvimento) durante o hackathon? Como vocês resolveram?
Houveram algumas complicações relacionadas ao desenvolvimento do Crawler. Localizar a posição correta das tags e dos links foi um desafio, pois para cada site existe uma estrutura diferente. Para resolver esse desafio foi necessário uma análise detalhada do código de cada página, para assim, localizar corretamente as partes necessárias. Além disso, o curto tempo para desenvolver tamanha solução foi restritívo tendo que nos limitar a fazer um MVP.

### Qual foi o maior aprendizado (ou uma parte do código que vocês achem massa e estão orgulhosas)?
Ficamos orgulhosas de aprender a desenvolver um crawler, pois não tínhamos experiência, e com a qualidade em geral da solução entregue.

### Se vocês fossem participar de um hackathon semana que vem, fariam algo de diferente com relação às escolhas das tecnologias utilizadas?
Não, pois acreditamos que as tecnologias nos proporcionaram um grande aprendizado, além de entregar uma boa solução.

## :nut_and_bolt: Funcionalidades


 ✔️ Rota 1 - Company: Busca as empresas ou de uma específica, cria e altera dados de empresas

 ✔️ Rota 2 - Contact: Cria e busca mensagens enviadas pelo formulário de contato. 

 ✔️ Rota 3 - News: Cria e busca notícias, sendo a rota utilizada pelo crawler.

## :books: Tecnologias e ferramentas

O projeto foi desenvolvido utilizando as seguintes tecnologias

- [Visual Studio Code](https://code.visualstudio.com/)
- [NodeJS](https://nodejs.org/en/)
- [Express](http://expressjs.com/)
- [Mongoose](https://github.com/Automattic/mongoose)
- [Cors](https://github.com/expressjs/cors)
- [Axios](https://github.com/axios/axios)
- [nodemon](https://www.npmjs.com/package/nodemon)

## :running: Demonstração da Aplicação

Você pode conferir o backend em: https://backend-hack-grrrl.herokuapp.com/

## :package: Como baixar o projeto

Para copiar o projeto, utilize os comandos:

```bash
  # Clonar o repositório
  ❯ git clone https://github.com/JuDCraide/Backend-HackGrrrl

  # Entrar no diretório
  ❯ cd Backend-HackGrrrl
```

Para instalar as dependências e iniciar o projeto, você pode utilizar o Yarn ou NPM:

**Utilizando yarn**

```bash
  # Instalar as dependências
  ❯ yarn

  # Iniciar o projeto usando nodemon
  ❯ yarn dev

  # Iniciar o projeto usando node
  ❯ yarn start
```

**Utilizando npm**

_PS: Caso utilize o NPM, apague o arquivo `yarn.lock` para ter todas as dependências instaladas da melhor forma._

```bash
  # Instalar as dependências
  ❯ npm install

  # Iniciar o projeto usando nodemon
  ❯ npm dev

  # Iniciar o projeto usando node
  ❯ npm start
```

## :recycle: Como atualizar seu fork

- Certifique-se de que você está no branch master:
  - `❯ git checkout master`
- Obtenha as alterações mais recentes do upstream para o repositório local:
  - `❯ git pull upstream master`
- Leve as alterações do seu repositório local para a _"origem"_:
  - `❯ git push origin master`

_PS: Talvez você precise forçar um push para o seu próprio repositório do Github. Você pode fazer isso com:_

- `❯ git push -f origin master`

<h4 align="center">
  Feito com ❤️ por Júlia D. Craide 👋️ Entre em contato!
</h4>
