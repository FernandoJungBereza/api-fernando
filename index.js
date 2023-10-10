const express = require('express');
const cors = require('cors');

const listenPort = 4000;
const app = express();
app.use(cors({
    origin: '*'
}), express.json());


app.get('/testes', (request, response) => {
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


app.listen(listenPort, () => { 
    console.log('listening on http://localhost:' + listenPort); 
});
