// Organize os produtos como mostrado em aula
// Mostre apenas produtos que forem mais caros que R$ 1500
const produtos = [
    {
        id: 1,
        nome: 'Smartphone',
        preco: 'R$ 2000',
        cores: ['#29d8d5', '#252a34', '#fc3766'],
    },
    {
        id: 2,
        nome: 'Notebook',
        preco: 'R$ 3000',
        cores: ['#ffd045', '#d4394b', '#f37c59'],
    },
    {
        id: 3,
        nome: 'Tablet',
        preco: 'R$ 1500',
        cores: ['#365069', '#47c1c8', '#f95786'],
    },
];

const divProduto = (prod) => {
    return(
        <div>
            <h1>{prod.nome}</h1>
            <p>{prod.preco}</p>
            <ul style={{display: 'flex', flexDirection: 'column', width: '1000px', gap: '5px'}}>{prod.cores.map(cor => cor1(cor))}</ul>
        </div>
    )
}

const cor1 = (cor) => {
    return(
            <li style={{backgroundColor: cor, color: 'white'}}>{cor}</li>
    )
}

const Main = () => {
    return(
        <section>
            {produtos.map((produto) => divProduto(produto))}
        </section>
    )
}

export default Main