<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Git INFO
Olá! ✋🙋‍♂️ Sejam bem vindos(as), ao **Git INFO**, uma aplicação de consulta aos dados de um usuário do GitHub, essa aplicação foi desenvolvida para um teste de código, fique a vontade para clonar e usar como bem entender.

# Requisitos para instalação
- [NPM Node Package Manager] - Usado para instalar as dependencias em JS.
- [GIT] - Controle de versão e histórico de código.
**Extras**
- [Yarn] - Usado para instalar as dependencias em JS.

# Intruções para instalação e execução

Existe diversas formas para executar esse projeto porem nesse passo a passo vou ensinar a executar o projeto localmente como um ambiente de desenvolvimento.

Primeiro abra o terminal para executar os codigos a seguir.

**Criando a pasta do projeto.**
```sh
$ git clone https://github.com/marinaldoj/git-info.git
```

**Backend**
```sh
$ cd git-info
$ npm install ou yarn 
```

Após digitar esses comando aguarde até que a instalação do pacote seja finalizada pode levar de 2 a 10 minutos dependendo da sua conexão.

Após finalizar a instalação siga com os seguintes comandos.
```sh
$ npx prisma generate ou yarn prisma generate
$ npx prisma db push ou yarn prisma db push
$ npm run start ou yarn start 
```

Se tudo deu certo seu backend está rodando localmente aqui [http://localhost:3000](http://localhost:3000) 🥳🥳🥳

**Obs: caso não estaja funcionando volte o tutorial do inicio e leia tudo novamente com atenção, se mesmo após reler o erro existir me contacte por email posso tentar te ajudar. Obrigado 😁😁😁**

**Email:** junior_qst@hotmail.com

**Endpoints**
Existem um total de 3 endpoint

```sh
# /user/:login -> usado para verificar se um usario existe no github e copia para a base de dados os dados do usuario e seus repositórios
# /user/list/:login -> lista todos os repositorios de um usuario salvo na base de dados
# /user/search/:busca -> utilizado para buscar em repositorios salvaos na base de dados
```

Com tudo isso finalizo a entrega do projeto, agradeço a todos pela oportunidade e tempo disponibilizado. 

 [NPM Node Package Manager]: <https://nodejs.org/en>
 [Yarn]: <https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable>
 [GIT]: <https://git-scm.com/>
