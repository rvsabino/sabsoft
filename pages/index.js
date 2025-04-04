function Home() {
    document.body.innerHTML = gerarPaginaHTML();
 
}

function gerarPaginaHTML() {
    return `
  <!DOCTYPE html>
  <html lang="pt-BR">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Página de Teste | Renato Sabino</title>
      <style>
          body {
              font-family: 'Arial', sans-serif;
              max-width: 800px;
              margin: 0 auto;
              padding: 20px;
              line-height: 1.6;
              color: #333;
              background-color: #f9f9f9;
          }
          h1 {
              color: #2c3e50;
              border-bottom: 2px solid #e74c3c;
              padding-bottom: 10px;
          }
          .destaque {
              font-weight: bold;
              color: #e74c3c;
          }
          .agradecimento {
              font-style: italic;
              margin: 20px 0;
          }
          .assinatura {
              font-family: 'Georgia', serif;
              font-size: 1.2em;
              text-align: right;
              margin-top: 30px;
              font-weight: bold;
              color: #2c3e50;
          }
      </style>
  </head>
  <body>
      <h1>Meus amigos,</h1>
      <p>Essa é uma página que eu criei como <span class="destaque">teste do curso</span> que estou fazendo.</p>
      
      <p class="agradecimento">Quero muito agradecer o apoio incondicional que recebo de todos vocês para continuar nos meus estudos, com uma grande possibilidade de dar continuidade nos projetos pessoais que irei criar.</p>
      
      <p class="assinatura">RENATO SABINO</p>
  </body>
  </html>
    `;
  }
  
  // Para usar a função e obter o HTML:
  const htmlContent = gerarPaginaHTML();
  console.log(htmlContent); // Isso mostrará o HTML no console
  
  // Chame esta função para substituir o conteúdo da página atual
  // inserirPagina();

export default Home;