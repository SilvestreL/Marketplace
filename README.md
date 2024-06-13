# Projeto Marketplace
Bem-vindo ao Projeto Marketplace! Este é um projeto desenvolvido para criar uma plataforma de comércio eletrônico onde os usuários podem comprar e vender produtos. Este README fornece uma visão geral das tecnologias utilizadas, como configurar o ambiente de desenvolvimento e executar o projeto.

# Visão Geral do Projeto
O Projeto Marketplace é uma aplicação full-stack que permite aos usuários navegar, listar e comprar produtos. Ele foi desenvolvido utilizando uma variedade de tecnologias modernas para garantir uma experiência de usuário fluida e um back-end robusto.

# Tecnologias Utilizadas
Front-end
- __ReactJS:__ Utilizado para a construção da interface do usuário. ReactJS é uma biblioteca JavaScript eficiente e flexível para criar interfaces de usuário reutilizáveis e componentes interativos.
- __Framer Motion:__ Biblioteca de animação para React, utilizada para adicionar animações fluidas e interações aos componentes da aplicação, proporcionando uma experiência visual atraente.
- __Vite:__ Ferramenta de build que oferece um ambiente de desenvolvimento rápido e eficiente para projetos React. Vite melhora a performance e facilita o desenvolvimento com HMR (Hot Module Replacement).
  
Back-end
-  __NodeJS:__ Plataforma de execução de JavaScript do lado do servidor, utilizada para criar um back-end eficiente e escalável.
Express: Framework para NodeJS que simplifica a construção de APIs RESTful. Utilizado para gerenciar as rotas e middlewares do servidor.
Banco de Dados
-  __MySQL:__ Sistema de gerenciamento de banco de dados relacional utilizado para armazenar informações dos produtos, usuários e transações. Escolhido por sua performance, escalabilidade e robustez.
Outras Tecnologias
  -    __API Rest:__ Arquitetura utilizada para comunicação entre o front-end e o back-end. Facilitando a manipulação de dados entre o cliente e o servidor.
-  __GIT/GitHub:__ Sistema de controle de versão usado para gerenciar o código-fonte do projeto. GitHub é utilizado para armazenar e colaborar no repositório.
-  __Jest:__ Framework de teste utilizado para garantir a qualidade do código e a confiabilidade do sistema. Jest facilita a criação de testes unitários para componentes e funções.
___
# Configuração do Ambiente de Desenvolvimento
Para configurar o ambiente de desenvolvimento e executar o projeto localmente, siga os passos abaixo:

__Requisitos__
*NodeJS (versão 14 ou superior)
*MySQL (qualquer versão estável)
*Git (para clonar o repositório)

__Passos para Configuração__
1. Clone o repositório
```
git clone https://github.com/seu-usuario/marketplace.git
cd marketplace
```
2. Instale as dependências
Navegue até os diretórios do front-end e back-end e instale as dependências usando npm ou yarn:

__Para o front-end__
```
cd frontend
npm install
```
**Para o back-end**
```
cd ../backend
npm install
```
3. Configure o Banco de Dados
Crie um banco de dados MySQL e atualize o arquivo de configuração do back-end com as credenciais do banco de dados.

__Crie um arquivo .env na pasta do backend com as seguintes variáveis de ambiente:__
```
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=marketplace
```
4. Inicie a Aplicação

Navegue até os diretórios do front-end e back-end e inicie os servidores de desenvolvimento:
__Para o front-end__
```
cd frontend
npm run dev
```

__Para o back-end__
```
cd ../backend
npm start
```

5. Acesse a Aplicação
Abra o navegador e acesse http://localhost:3000 para ver a aplicação em execução.

**Contribuição**
Contribuições são bem-vindas! Se você deseja contribuir com o projeto, por favor, siga estas etapas:

1. Faça um fork do projeto.
2. Crie uma nova branch (git checkout -b feature/descricao-da-feature).
3. Commit suas alterações (git commit -m 'Adiciona uma nova feature').
4. Envie para a branch (git push origin feature/descricao-da-feature).
5. Abra um Pull Request.

__Licença__
Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
