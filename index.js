const express = require('express');
const cors = require('cors');

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

app.get('/teste1', (request, response) => {
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
    data_publicacao: '2023-09-15',
    conteudo:
      'Viajar pelo mundo é uma das experiências mais enriquecedoras que alguém pode ter. Neste artigo, vou compartilhar algumas das minhas aventuras de viagem favoritas e inspirá-lo a explorar novos destinos...\n\n## A Magia das Viagens\n\nViajar nos permite conhecer novas culturas, saborear culinárias incríveis e testemunhar paisagens deslumbrantes. É uma jornada de auto-descoberta.\n\n![Imagem de Viagem](imagem-viagem.jpg)\n\n## Destinos Favoritos\n\nAlguns dos meus destinos favoritos incluem:\n\n- **Kyoto, Japão:** A beleza dos templos e jardins é de tirar o fôlego.\n- **Machu Picchu, Peru:** Uma maravilha arqueológica nas montanhas.\n- **Santorini, Grécia:** As vistas do pôr do sol são inesquecíveis.\n\n## Dicas de Viagem\n\n- Sempre experimente a comida local.\n- Interaja com moradores locais para obter insights autênticos.\n- Mantenha um diário de viagem para lembranças duradouras.\n\n## Conclusão\n\nViajar é uma paixão que todos deveriam explorar. Cada destino tem sua própria história para contar e sua própria magia para compartilhar.',
    tags: ['Viagens', 'Turismo', 'Cultura'],
    comentarios: [
      {
        autor_comentario: 'João',
        email_comentario: 'joao@example.com',
        data_comentario: '2023-09-16',
        texto_comentario:
          'Adorei o artigo, Maria! Machu Picchu está na minha lista de desejos.',
      },
      {
        autor_comentario: 'Ana',
        email_comentario: 'ana@example.com',
        data_comentario: '2023-09-17',
        texto_comentario: 'Santorini é incrível, concordo totalmente!',
      },
      {
        autor_comentario: 'Pedro',
        email_comentario: 'pedro@example.com',
        data_comentario: '2023-09-18',
        texto_comentario: 'Dicas úteis para viajantes. Obrigado!',
      },
    ],
    artigos_relacionados: [
      {
        titulo: 'Aventuras na Natureza: Trilhas e Explorações',
        autor: 'Joana',
        data_publicacao: '2023-09-14',
        resumo: 'Descubra o mundo natural através de trilhas emocionantes.',
        tags: ['Aventuras', 'Natureza', 'Trilhas'],
      },
      {
        titulo: 'Culinária Internacional: Uma Viagem de Sabores',
        autor: 'Luís',
        data_publicacao: '2023-09-13',
        resumo: 'Explore a diversidade culinária ao redor do mundo.',
        tags: ['Culinária', 'Viagem', 'Gastronomia'],
      },
    ],
    categoria: 'Viagens',
    visualizacoes: 2500,
    tempo_leitura: '12 minutos',
    idioma: 'Português',
    numero_palavras: 1800,
    autor_foto: 'mariasilva.jpg',
    imagem_destaque: 'destaque-viagem.jpg',
    url_compartilhamento: 'https://seusite.com/artigo/456',
    fonte_referencia: 'https://exemplo.com/viagens-referencia',
  };
  response.send(json);
});

app.get('/teste2', (request, response) => {
  const json = {

    "produto": {
      "nome": "Smartphone XYZ",
      "preco": 599.99,
      "estoque": 50
    },
    "marca": "TechCo",
    "descricao": "O Smartphone XYZ é o dispositivo perfeito para todas as suas necessidades de comunicação e entretenimento. Com um design elegante e recursos de ponta, você ficará impressionado com o desempenho deste aparelho.",
    "especificacoes": {
      "tela": "6.4 polegadas, Super AMOLED",
      "processador": "Octa-core 2.0 GHz",
      "armazenamento": "128GB",
      "camera_principal": "Câmera de 48MP",
      "camera_frontal": "Câmera de 16MP",
      "bateria": "4000mAh",
      "sistema_operacional": "Android 11",
      "conectividade": "4G LTE, Wi-Fi 6, Bluetooth 5.0",
      "cores_disponiveis": ["Preto", "Branco", "Azul"]
    },
    "avaliacoes": [
      {
        "usuario": "João",
        "classificacao": 4.5,
        "comentario": "Este smartphone tem uma excelente câmera. Estou muito satisfeito!"
      },
      {
        "usuario": "Maria",
        "classificacao": 4.0,
        "comentario": "Boa relação custo-benefício. Funciona muito bem para jogos."
      },
      {
        "usuario": "Carlos",
        "classificacao": 3.5,
        "comentario": "A bateria poderia ser melhor, mas no geral é um bom aparelho."
      }
    ],
    "garantia": "1 ano",
    "frete_gratis": true,
    "data_lancamento": "2023-10-15",
    "url_produto": "https://exemplo.com/produto/smartphone-xyz",
    "categoria": "Tecnologia",
    "numero_visualizacoes": 1200
  }
  response.send(json);
})

app.get('/teste3', (request, response) => {
  const json = {
    "livro": {
      "titulo": "O Mistério da Floresta",
      "autor": "Ana Silva",
      "genero": "Mistério",
      "ano_publicacao": 2022,
      "sinopse": "Um thriller de mistério que se desenrola em uma floresta sombria, onde segredos antigos aguardam para serem descobertos."
    },
    "editora": "Livros Fantásticos",
    "avaliacoes": [
      {
        "leitor": "Mariana",
        "classificacao": 4.0,
        "comentario": "A trama é envolvente, não consegui parar de ler!"
      },
      {
        "leitor": "Paulo",
        "classificacao": 4.5,
        "comentario": "Intrigante e bem escrito. Recomendo."
      }
    ],
    "paginas": 320,
    "idioma": "Português",
    "capa_livro": "misterio-floresta.jpg"
  }
  response.send(json);
})

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
