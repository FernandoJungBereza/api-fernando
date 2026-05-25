# TCC 2023 — API (backend)

Trabalho de Conclusão de Curso — **Fernando Jung Bereza** (2023).

API **Express** que servia os artigos do experimento de renderização (SSR, CSR e SSG). Repositório **arquivado** — sem deploy ativo.

| Item | Situação |
|------|----------|
| Produção antiga | `api.fernandobereza.tech` (**offline**) |
| Frontend do TCC | [tcc-fernando](https://github.com/FernandoJungBereza/tcc-fernando) |
| Este repositório | Backend (Node.js + Express) |

## Papel no TCC

O frontend ([tcc-fernando](https://github.com/FernandoJungBereza/tcc-fernando)) consumia três bases de artigos **idênticas em estrutura**, uma por estratégia de renderização:

| Prefixo da rota | Arquivo de dados | Tema dos artigos |
|-----------------|------------------|------------------|
| `/ServerRender` | `serverside.json` | Viagens |
| `/ClientRender` | `clientside.json` | Universo / exploração espacial |
| `/StaticRender` | `staticrender.json` | Culinária |

Assim os testes de desempenho comparavam só **como** a página era gerada, não o formato do JSON.

## Stack

- **Node.js**
- **Express** 4
- **CORS** habilitado (`origin: '*'`)
- Persistência em arquivos JSON (leitura na subida do processo; sem banco)

## Endpoints usados pelo frontend

Base local: `http://localhost:4000`

| Método | Rota | Descrição |
|--------|------|-----------|
| `GET` | `/ServerRender` | Lista de artigos (SSR) |
| `GET` | `/ServerRender/:id` | Artigo por id |
| `GET` | `/ClientRender` | Lista de artigos (CSR) |
| `GET` | `/ClientRender/:id` | Artigo por id |
| `GET` | `/StaticRender` | Lista de artigos (SSG) |
| `GET` | `/StaticRender/:id` | Artigo por id |

Resposta 404 com texto `Not Found` se o id não existir.

### Outras rotas (não usadas pelo portal)

- `GET /` — JSON de exemplo (metadados de viagem)
- `GET /teste4` … `GET /teste12` — payloads extras para experimentos ou testes pontuais

## Rodar localmente

```bash
npm install
npm start
```

Servidor em [http://localhost:4000](http://localhost:4000).

Com nodemon (se instalado globalmente ou via `npx`):

```bash
npm run start:dev
```

Teste rápido:

```bash
curl http://localhost:4000/ServerRender
curl http://localhost:4000/ServerRender/1
```

### Usar com o frontend local

1. Suba esta API na porta **4000**.
2. No repo [tcc-fernando](https://github.com/FernandoJungBereza/tcc-fernando), troque temporariamente as URLs de `fetch` de `https://api.fernandobereza.tech` para `http://localhost:4000` nos arquivos em `src/app/ServerRender`, `ClientRender` e `StaticRender` (listagem e `artigo/[id]`).

## Estrutura do projeto

```
index.js                  # App Express, CORS, rotas
serversideController.js   # Rotas /ServerRender
clientsideController.js   # Rotas /ClientRender
staticrenderController.js # Rotas /StaticRender
*Service.js               # Leitura dos JSON
serverside.json           # Dados SSR
clientside.json           # Dados CSR
staticrender.json         # Dados SSG
old/                      # Protótipo antigo em NestJS (não usado no deploy do TCC)
```

Cada artigo segue o mesmo modelo (id, titulo, subtitulo, autor, conteudo, comentarios, artigos_relacionados, tags, imagem_destaque, etc.) — alinhado ao tipo `IDataRender` no frontend.

## Pasta `old/`

Versão inicial em **NestJS** (`old/src/testes/…`). A API que foi para produção no TCC é a **Express** na raiz deste repo. A pasta `old/` fica só como referência histórica.

## Autor

**Fernando Jung Bereza** — [GitHub](https://github.com/FernandoJungBereza)
