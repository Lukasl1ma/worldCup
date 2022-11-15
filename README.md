
# Trabalho de Tecnicas de Programação - API Copa do Mundo

Desenvolvimento de uma API da Copa do Mundo, Utilizando Node.js crie uma API para que todos possam utilizá-la.

## Rodando localmente

Clone o projeto

```bash
    git clone git@github.com:Lukasl1ma/worldCup.git
```

Entre no diretório do projeto

```bash
    cd worldCup
```

Instale as dependências

```bash
    npm install
```

Inicie o servidor

```bash
    npm run start
```
## Docker Image

Para fazer a build da imagem desse projeto rode:

```bash
    docker build . -t lukaslimap/lukaslimap_api_worldcup:latest
```

E depois rode a imagem do projeto:

```bash
    docker run -p 8087:8087 lukaslimap/lukaslimap_api_worldcup:latest
```

Para subir o container rode o comando:

```bash
    docker-compose up
```

E baixe a imagem do docker hub

```bash
    docker pull lukaslimap/lukaslimap_api_worldcup
```
## Documentação da API

### Endpoint da API

```bash
    http://localhost:8087/api/v1/worldcup
```

#### Adicionar partidas:

```bash
  POST /api/v1/worldcup
```

```bash
    {
    "id_partida": <number>,
    "time_casa": <string>,
    "time_fora": <string>,
    "gol_casa: <number>,
    "gol_fora": <number>,
    "data_partida": <string>
}
```

#### Alterar partidas:

```bash
  PUT /api/v1/worldcup/:Id
```
#### Excluir partidas

```bash
  DELETE /api/v1/worldcup/:Id
```
#### Retorna todas as partidas

```bash
  GET /api/v1/worldcup
```
#### Retorna todas as partidas de um time

```bash
  GET /api/v1/worldcup/:time
```
#### Retorna todas as partidas do dia escolhido

```bash
  GET /api/v1/worldcup/dia/:dia
```
#### Retorna todas as partidas do mês escolhido

```bash
  GET /api/v1/worldcup/mes/:mes
```
