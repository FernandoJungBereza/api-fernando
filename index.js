const express = require('express');
const cors = require('cors');
const serverSideController = require('./serversideController');
const clientSideController = require('./clientsideController');
const staticRenderController = require('./staticrenderController');

const listenPort = 4000;
const app = express();
app.use(cors({
  origin: '*'
}), express.json());


app.get('/', (request, response) => {
  const json = {
    titulo: 'Viagens pelo Mundo: Descobrindo Novos Destinos',
    subtitulo: 'Uma Jornada Inesquecível de Aventuras e Culturas',
    autor: {
      nome: 'Maria Silva',
      email: 'mariasilva@example.com',
      perfil_social: {
        twitter: 'mariasilva',
        linkedin: 'mariasilva',
      },
    },
  }

  response.send(json);
});

app.use('/ServerRender', serverSideController);
app.use('/ClientRender', clientSideController);
app.use('/StaticRender', staticRenderController);

app.get('/teste4', (request, response) => {
  const json = {
    "restaurante": {
      "nome": "Delícias da Itália",
      "tipo_culinaria": "Italiana",
      "endereco": "Rua da Pizza, 123",
      "horario_funcionamento": "11:00 - 22:00",
      "especialidades": ["Pizza Margherita", "Massa Carbonara", "Tiramisu"],
      "classificacao": 4.7
    },
    "chef": "Luigi Rossi",
    "menu": [
      {
        "prato": "Lasanha à Bolonhesa",
        "preco": 19.99
      },
      {
        "prato": "Risoto de Funghi",
        "preco": 17.99
      }
    ],
    "avaliacoes": 98,
    "website": "https://deliciasdaitalia.com",
    "cidade": "São Paulo"
  }
  response.send(json);
})

app.get('/teste5', (request, response) => {

  const json = {
    "carro": {
      "marca": "Audi",
      "modelo": "A6",
      "ano_fabricacao": 2023,
      "cor": "Prata",
      "preco": 65000.00
    },
    "especificacoes": {
      "motor": "2.0 TFSI",
      "potencia": "245 cavalos",
      "transmissao": "Automática",
      "consumo_combustivel": "9.5 km/l (cidade), 14.2 km/l (estrada)"
    },
    "avaliacoes": [
      {
        "cliente": "Roberto",
        "classificacao": 4.5,
        "comentario": "Um carro de luxo com excelente desempenho."
      },
      {
        "cliente": "Isabel",
        "classificacao": 4.0,
        "comentario": "Muito confortável e elegante."
      }
    ],
    "garantia": "2 anos",
    "estoque": 10
  }
  response.send(json);
})

app.get('/teste6', (request, response) => {

  const json = {
    "filme": {
      "titulo": "O Segredo do Tempo",
      "diretor": "Carlos Mendes",
      "genero": "Ficção Científica",
      "ano_lancamento": 2023,
      "sinopse": "Uma equipe de cientistas descobre uma maneira de viajar no tempo, desencadeando eventos que desafiam o curso da história."
    },
    "atores_principais": ["Laura Silva", "Miguel Torres", "César Ferreira"],
    "avaliacao_IMDb": 7.8,
    "duracao_minutos": 130,
    "idiomas_disponiveis": ["Inglês", "Espanhol"],
    "classificacao_etaria": "PG-13"
  }
  response.send(json);
})

app.get('/teste7', (request, response) => {

  const json = {
    "produto_eletronico": {
      "nome": "Fone de Ouvido Estéreo",
      "marca": "SonicSound",
      "cor": "Preto",
      "preco": 49.99,
      "garantia": "1 ano"
    },
    "especificacoes": {
      "conectividade": "Bluetooth 5.0",
      "bateria": "Até 20 horas de reprodução",
      "cancelamento_ruido": true,
      "microfone_integrado": true
    },
    "acessorios_inclusos": ["Cabo USB", "Estojo de transporte", "Manual do usuário"],
    "avaliacoes": [
      {
        "usuario": "Ana",
        "classificacao": 4.0,
        "comentario": "Qualidade de som surpreendente pelo preço."
      },
      {
        "usuario": "Pedro",
        "classificacao": 4.5,
        "comentario": "Fácil de emparelhar e confortável de usar."
      }
    ],
    "estoque_disponivel": 100
  }
  response.send(json);
})

app.get('/teste8', (request, response) => {

  const json = {
    "receita": {
      "nome": "Bolo de Chocolate Fudge",
      "chef": "Isabel Santos",
      "tempo_preparo": "60 minutos",
      "porcoes": 12
    },
    "ingredientes": [
      "2 xícaras de farinha de trigo",
      "1 xícara de cacau em pó",
      "1 colher de chá de fermento em pó",
      "1/2 colher de chá de sal",
      "2 xícaras de açúcar",
      "4 ovos",
      "1 xícara de leite",
      "1 xícara de óleo vegetal",
      "1 colher de chá de extrato de baunilha",
      "1 xícara de água quente"
    ],
    "instrucoes": "..."
  }
  response.send(json);
})

app.get('/teste9', (request, response) => {

  const json = {
    "artigo_ciencia": {
      "titulo": "Avanços na Inteligência Artificial",
      "autor": "Dr. Carlos Oliveira",
      "ano_publicacao": 2023,
      "resumo": "Este artigo explora os recentes avanços na área de inteligência artificial e seu impacto em diversas indústrias."
    },
    "topico_destaque": "Aprendizado Profundo",
    "contribuicoes": ["Melhorias em reconhecimento de voz", "Avanços em visão computacional", "Aplicações em medicina"],
    "fontes_referencia": ["https://exemplo.com/ia-avancos-2023", "https://exemplo.com/pesquisa-ia"]
  }
  response.send(json);
})

app.get('/teste10', (request, response) => {

  const json = {
    "jogo": {
      "titulo": "Aventuras Cósmicas",
      "plataforma": "PlayStation 5",
      "genero": "Ação-Aventura",
      "classificacao_etaria": "Mature (17+)"
    },
    "desenvolvedora": "Galaxy Games",
    "sinopse": "Embarque em uma jornada épica pelo espaço sideral, enfrentando desafios intergalácticos e descobrindo segredos cósmicos."
  }
  response.send(json);
})

app.get('/teste11', (request, response) => {

  const json = {
    "curso": {
      "titulo": "Programação em Python",
      "instrutor": "Prof. João Silva",
      "duracao": "8 semanas",
      "certificado": true
    },
    "descricao": "Aprenda programação em Python do zero e adquira habilidades para desenvolver aplicativos e automatizar tarefas."
  }
  response.send(json);
})

app.get('/teste12', (request, response) => {

  const json = {
    "evento_esportivo": {
      "nome": "Campeonato de Tênis de Mesa",
      "local": "Ginásio Esportivo XYZ",
      "data_inicio": "2023-11-01",
      "data_fim": "2023-11-03"
    },
    "participantes": ["Equipe A", "Equipe B", "Equipe C"],
    "premio_em_dinheiro": 5000.00,
    "transmissao_ao_vivo": true
  }
  response.send(json);
})

app.listen(listenPort, () => {
  console.log('listening on http://localhost:' + listenPort);
});
