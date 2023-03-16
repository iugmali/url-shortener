# URL shortener 
#### Projeto referente às atividades 03 e 04 da disciplina "Desenvolvimento Back-end para Aplicações Mobile" da pós-graduação "MBA em Desenvolvimento Mobile" da Faculdade Unyleya, mês 03/2023.

A aplicação foi feita em Node.JS e desenvolvida para rodar em containers Docker.

Antes de rodar o projeto, alimente o arquivo .env com o conteúdo do arquivo .env.example. 

#### Para rodar a aplicação, execute:
```
docker-compose up -d
```

Por padrão, a aplicação será rodada em http://localhost:8088.
A documentação (via Swagger) por padrão estará disponível em http://localhost:8088/docs.

### API Endpoints
|  | Endpoint         | Ação                                                                                                                                                                                    |
|-------|------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| POST  | /urls            | Cria uma url curta e salva como novo registro no banco de dados. O request deve ter obrigatoriamente o campo "longUrl". Exemplo: <br/>{<br/>"longUrl" : "https://www.example.com"<br/>} |
| GET   | /urls?date=:date | Retorna todos os registros criado no dia específico. A query :date precisa ser no formato AAAA-MM-DD. Exemplo: 2023-03-15                                                               |
| GET   | /url/:urlId      | Retorna o registro referente ao id digitado no param :urlId                                                                                                                             |
| GET   | /:shortUrlCode   | Redireciona para a URL longa relacionada ao código da URL curta salva no banco de dados                                                                                                 |
