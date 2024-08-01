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
git clone https://github.com/marinaldoj/pexels-exerc.git
```

**Backend**
```sh
cd pexels-exerc
cd backend
composer install
cp .env.example .env
```
Abra seu editor de texto no arquivo .env e no campo 
```sh 
PEXELS_API_KEY=insira aqui
```
Insira sua key da pexels -> [Tutorial para conseguir sua API Key Pexels](https://help.pexels.com/hc/en-us/articles/900004904026-How-do-I-get-an-API-key) 
Exemplo:
```sh 
PEXELS_API_KEY=jpnhyZ1fOitH8I1fOi769MyZ1fOitH8IFBxccsN5X0BnFhoUJBjSrWWv
```
Depois disso basta executar os proximos comandos
```sh
php artisan key:generate
php artisan migrate
php artisan serve
```

Se tudo deu certo seu backend está rodando localmente aqui [http://localhost:8000](http://localhost:8000) 🥳🥳🥳

**Obs: caso não estaja funcionando volte o tutorial do inicio e leia tudo novamente com atenção, se mesmo após reler o erro existir me contacte por email posso tentar te ajudar. Obrigado 😁😁😁**

**Email:** junior_qst@hotmail.com

Com tudo isso finalizo a entrega do projeto, agradeço a todos pela oportunidade e tempo disponibilizado. 

 [NPM Node Package Manager]: <https://nodejs.org/en>
 [Yarn]: <https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable>
 [GIT]: <https://git-scm.com/>
