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

app.get('/ServerRender', (request, response) => {
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
    imagem_destaque: 'https://static.vecteezy.com/ti/vetor-gratis/p3/14634478-aventura-viagem-de-viagem-cartoon-web-banner-gratis-vetor.jpg',
    url_compartilhamento: 'https://seusite.com/artigo/456',
    fonte_referencia: 'https://exemplo.com/viagens-referencia',
  };
  response.send(json);
});

app.get('/StaticRender', (request, response) => {
  const json = {
    "titulo": "A Magia das Cozinhas do Mundo",
    "subtitulo": "Uma Jornada Gastronômica de Sabores e Culturas",
    "autor": {
      "nome": "João Oliveira",
      "email": "joao@example.com",
      "perfil_social": {
        "twitter": "joaochef",
        "linkedin": "joaochef"
      }
    },
    "data_publicacao": "2023-10-16",
    "conteudo": "Explorar a culinária de diferentes regiões do mundo é uma das experiências mais saborosas e enriquecedoras que um amante da comida pode ter. Neste artigo, vou compartilhar algumas das minhas aventuras culinárias favoritas e inspirá-lo a experimentar novos sabores...\n\n## A Magia das Cozinhas\n\nConhecer as cozinhas tradicionais permite experimentar pratos autênticos, saborear ingredientes locais e mergulhar na história da comida.\n\n![Imagem de Comida](imagem-comida.jpg)\n\n## Destinos Gastronômicos\n\nAlguns dos meus destinos gastronômicos favoritos incluem:\n\n- **Bangkok, Tailândia:** Os mercados de rua são um paraíso para os amantes de comida de rua.\n- **Paris, França:** Os croissants e queijos são uma experiência única.\n- **Marrakech, Marrocos:** Tajines e especiarias encantam o paladar.\n\n## Dicas Culinárias\n\n- Aprenda a cozinhar pratos locais com chefs locais.\n- Visite mercados e feiras para ingredientes frescos e autênticos.\n- Mantenha um diário de degustação para recordar suas experiências.\n\n## Conclusão\n\nA gastronomia é uma paixão que todos deveriam explorar. Cada prato tem sua história para contar e seu sabor único para compartilhar.",
    "tags": [
      "Culinária",
      "Turismo",
      "Cultura"
    ],
    "comentarios": [
      {
        "autor_comentario": "Maria",
        "email_comentario": "maria@example.com",
        "data_comentario": "2023-10-17",
        "texto_comentario": "Adorei o artigo, João! As dicas gastronômicas são incríveis."
      },
      {
        "autor_comentario": "Antônio",
        "email_comentario": "antonio@example.com",
        "data_comentario": "2023-10-18",
        "texto_comentario": "Estou ansioso para experimentar a culinária tailandesa. Obrigado pelas recomendações!"
      }
    ],
    "artigos_relacionados": [
      {
        "titulo": "Explorando Vinhos do Mundo: Degustações e Viagens Enológicas",
        "autor": "André",
        "data_publicacao": "2023-10-15",
        "resumo": "Viaje pelos vinhedos e descubra os segredos do vinho em diferentes regiões."
      }
    ],
    "categoria": "Gastronomia",
    "visualizacoes": 2800,
    "tempo_leitura": "10 minutos",
    "idioma": "Português",
    "numero_palavras": 1600,
    "autor_foto": "joaochef.jpg",
    "imagem_destaque": "https://www.shutterstock.com/image-photo/assortment-various-barbecue-vegan-food-260nw-1738904081.jpg",
    "url_compartilhamento": "https://seusite.com/artigo/789",
    "fonte_referencia": "https://exemplo.com/culinaria-referencia"
  }
  response.send(json);
})

app.get('/ClientRender', (request, response) => {
  const json = {
    "titulo": "A Exploração do Universo: Descobrindo Segredos Cósmicos",
    "subtitulo": "Uma Jornada Científica nas Profundezas do Espaço",
    "autor": {
      "nome": "Dr. Maria Pereira",
      "email": "mariapereira@example.com",
      "perfil_social": {
        "twitter": "mariapereira",
        "linkedin": "mariapereira"
      }
    },
    "data_publicacao": "2023-10-20",
    "conteudo": "A exploração do universo é uma das atividades científicas mais emocionantes e desafiadoras que a humanidade já empreendeu. Neste artigo, vou compartilhar algumas das descobertas cósmicas mais fascinantes e inspirá-lo a mergulhar nas profundezas do espaço...\n\n## Os Segredos do Cosmos\n\nExplorar o universo nos permite descobrir segredos cósmicos, desde buracos negros até a formação de estrelas e galáxias.\n\n![Imagem do Espaço](imagem-espaco.jpg)\n\n## Destinos Cósmicos\n\nAlguns dos nossos destinos cósmicos favoritos incluem:\n\n- **Marte:** O Planeta Vermelho tem sido o foco de inúmeras missões espaciais em busca de vida.\n- **Nebulosa de Orion:** Uma nuvem de gás e poeira que abriga a formação de estrelas.\n- **Juno, a Sonda Espacial:** Que está estudando Júpiter de perto.\n\n## Avanços Científicos\n\n- Telescópios espaciais têm revolucionado nossa compreensão do cosmos.\n- Sondas espaciais estão coletando dados vitais em mundos distantes.\n- A exploração espacial está abrindo portas para o futuro da humanidade.\n\n## Conclusão\n\nA exploração do universo é uma jornada que continua a nos surpreender e nos inspirar. Cada descoberta cósmica nos aproxima de entender o vasto espaço que nos rodeia.",
    "tags": [
      "Astronomia",
      "Ciência",
      "Exploração Espacial"
    ],
    "comentarios": [
      {
        "autor_comentario": "Carlos",
        "email_comentario": "carlos@example.com",
        "data_comentario": "2023-10-21",
        "texto_comentario": "As descobertas espaciais são verdadeiramente incríveis, Maria!"
      },
      {
        "autor_comentario": "Ana",
        "email_comentario": "ana@example.com",
        "data_comentario": "2023-10-22",
        "texto_comentario": "A exploração do espaço é uma fonte inesgotável de conhecimento."
      },
      {
        "autor_comentario": "Pedro",
        "email_comentario": "pedro@example.com",
        "data_comentario": "2023-10-23",
        "texto_comentario": "A ciência espacial nos leva a lugares inimagináveis. Obrigado por compartilhar, Maria!"
      },
      {
        "autor_comentario": "Mariana",
        "email_comentario": "mariana@example.com",
        "data_comentario": "2023-10-24",
        "texto_comentario": "Astronomia é a busca pela compreensão do cosmos. Ótimo artigo!"
      }
    ],
    "artigos_relacionados": [
      {
        "titulo": "Explorando os Oceanos Profundos: Maravilhas Subaquáticas",
        "autor": "Luís",
        "data_publicacao": "2023-10-19",
        "resumo": "Descubra os segredos ocultos dos oceanos e suas criaturas misteriosas."
      },
      {
        "titulo": "O Futuro da Medicina: Avanços e Inovações",
        "autor": "Dr. Paulo",
        "data_publicacao": "2023-10-18",
        "resumo": "Explore as últimas inovações médicas que estão transformando a saúde."
      },
      {
        "titulo": "Inteligência Artificial: Os Avanços de 2023",
        "autor": "Isabel",
        "data_publicacao": "2023-10-17",
        "resumo": "Um mergulho nos avanços mais recentes em inteligência artificial."
      }
    ],
    "categoria": "Astronomia",
    "visualizacoes": 4500,
    "tempo_leitura": "15 minutos",
    "idioma": "Português",
    "numero_palavras": 2200,
    "autor_foto": "mariapereira.jpg",
    "imagem_destaque": "https://i.pinimg.com/1200x/ee/7e/40/ee7e409dba51773f05b7b22661a69a7c.jpg",
    "url_compartilhamento": "https://seusite.com/artigo/999",
    "fonte_referencia": "https://exemplo.com/astronomia-referencia"
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
