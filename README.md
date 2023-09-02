# CepViewer

Este projeto foi criado com o [Angular CLI](https://github.com/angular/angular-cli) na versão 15.0.0.

## Instalar as dependências externas do projeto

Ao baixar ou clonar o projeto, entre na raiz, e execute npm i para que sejam instaladas as dependências do projeto. É necessário que seu Angular esteja na versão 15, em virtude da versão compatível do Portinari UI.

## Servidor de Desenvolvimento

Execute `ng serve` para iniciar o servidor de desenvolvimento. Acesse `http://localhost:4200/` no seu navegador. A aplicação será automaticamente recarregada se você alterar qualquer um dos arquivos de origem.


## Detalhes Adicionais

Na tela de login, sempre que o usuário e a senha são preenchidos e o botão de acesso ao sistema é clicado, um token de autenticação é mockado e armazenado no `localStorage` para simular a autenticação do usuário. Para utilizar o guard da aplicação, é necessário fazer o logout por dentro da aplicação na página /home e tentar acessar ela novamente (http://localhost:4200/home)

## Execução de Testes Unitários

Execute `ng test` para executar os testes unitários via [Karma](https://karma-runner.github.io).


## Bibliotecas e Recursos Utilizados no Projeto

Este projeto utiliza várias bibliotecas e recursos para melhorar a experiência do usuário:

- [Portinari UI](https://portinari.io/): Uma biblioteca visual que oferece componentes e estilos para aprimorar a interface do usuário.
- [Angular Material](https://material.angular.io/): Uma biblioteca de componentes de IU para Angular que segue as diretrizes de design do Material.
- [ngxMask](https://www.npmjs.com/package/ngx-mask): Uma biblioteca para adicionar máscaras a campos de entrada em formulários.
- [FlexLayout](https://github.com/angular/flex-layout): Uma biblioteca que fornece um sistema de layout flexível para o Angular.
- Gerenciamento de estado com [RxJs](https://rxjs.dev/): O projeto utiliza a biblioteca RxJs para gerenciar o estado da aplicação de forma reativa.
- [Guarda de Rota](https://angular.io/guide/router#canactivate-requiring-authentication): Utilizada para proteger rotas que exigem autenticação.
- Design Responsivo: A aplicação é responsiva, se ajustando a diferentes tamanhos de tela.
- Testes Unitários com [Jasmine](https://jasmine.github.io/): São realizados testes unitários para garantir a qualidade do código.
- Lazyload de Módulos: O carregamento de módulos é otimizado por meio do carregamento tardio (lazy loading), melhorando o desempenho da aplicação.
