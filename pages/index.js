// index -> significa índice, como se fosse o título de um livro e o número da página.
// No next cada pasta que tenha um arquivo index.js dentro dela, automaticamente vira uma rota pública
// outros nomes também viram uma rota púlica, é igual com php onde o nome do arquivo vira a rota de acesso via URL

// Home com H maiusculo é convenção do React para componentes
function Home() {
    return <h1>Sandrine, eu amo você. Se você me ama, dá uma risadinha :D </h1>
}

// Default para mostrar ao next.js que esse é o arquivo padrão para redenrizar a página, a partir dele pode-se chamar outros componentes pelo export
export default Home;
