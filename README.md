
<h1 align="center">
  <img alt="GoStack" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/masterclass.png" width="120px" />
</h1>

<h3 align="center">
  Estudo : NodeJS + Bull + Background Jobs com Redis
</h3>


<p align="center">Esse projeto foi baseado na masterclasse da rocketseat sobre Background Jobs (FILAS) com NODEJS</p>

Link do Video no [youtube](https://www.youtube.com/watch?v=uonKHztGhko)

## Liçoes

Muitas tarefas da nossa aplicação não precisam executar de forma síncrona, por exemplo, e-mails, relatórios, etc. Nesses casos, o melhor a se fazer é processar essas tarefas em segundo plano. Geralmente ao criamos uma API utilizamos a arquitetura Cliente-servidor e, portanto, existem requisiçōes e respostas HTTP. 

Dessa forma, quando uma requisição requer processamento que inevitavelmente leva mais tempo para executar, como  a geração de um relatório, deve ser considerado que tal processamento seja feito em background. 

Existem várias libs em NODEJS que permitem o gerenciamento de background tasks. Neste projeto foi utilizado o [Bull](https://github.com/OptimalBits/bull) que nos permite não só executar background tasks mas também monitorar falhas, realizar retentativas, adicionar prioridades e tudo isso de uma forma extremamente simples e performática. Existe Também o [Bee-Queue](https://github.com/bee-queue/bee-queue) que é até mais performático que o Bull, porém, possui algumas features que considero importante em um projeto como realizar retentativas e definir prioridades entre jobs.

Tanto o Bull quanto bee-queue utilizam o [Redis](https://redis.io) para realizar o gerenciamento das filas, também chamadas de background tasks. O Redis é o banco de dados que trabalha com o conceito de armazenar somente tupas Key-Value (chave-valor), o que o torna perfeito para o cenário de gerenciamento das filas criadas para execuçao em backgroun seja pelo bull, bee-queue ou similares.


É importante perceber que em desenvolvimento tanto a API Node quanto o serviço de gerenciamento de jobs podem estar na mesma máquina, porém em produção deve-se considerar a execuçao em maquinas com hadwares diferentes para melhor desempenho. Além disso, também é interessante utilizar ferramentas como o [Sentry](https://sentry.io) para monitorar erros que venham ocorrer durante a execução dos jobs.

## ✋🏻 Pré-requisitos

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/pt-BR/docs/install)
- [Docker](https://www.docker.com/products/docker-desktop)


## 🔥 Instalação e execução

0. Execute o Redis: `docker run --name redis -p 6379:6379 -d -t redis:alpine`
1. Faça um clone desse repositório;
2. Entre na pasta `cd masterclass-bgjobs`;
3. Rode `yarn` dentro da raiz do projeto
4. execute `yarn dev` pra iniciar o servidor de desenvolvimento;


## ⚡️ Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

## 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Estudo feito a partir de videos e tutoriais da Rocketseat 👋 [Entre na nossa comunidade!](https://discordapp.com/invite/gCRAFhc)

