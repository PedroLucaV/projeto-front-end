const luana = {
    cliente: 'Luana',
    idade: 27,
    compras: [
        { nome: 'Notebook', preco: 'R$ 2500' },
        { nome: 'Geladeira', preco: 'R$ 3000' },
        { nome: 'Smartphone', preco: 'R$ 1500' },
    ],
    ativa: true,
};

const pedro = {
    cliente: 'Pedro',
    idade: 31,
    compras: [
        { nome: 'Notebook', preco: 'R$ 2500' },
        { nome: 'Geladeira', preco: 'R$ 3000' },
        { nome: 'Smartphone', preco: 'R$ 1500' },
        { nome: 'Guitarra', preco: 'R$ 3500' },
    ],
    ativa: false,
};

const verificaSituacao = (dados) => {
    if (dados == true) {
        return 'Ativa'
    } else {
        return 'Inativa'
    }
}

const Main = () => {
    const dados = pedro;
    const total = dados.compras.map((comprar) => {
        return Number(comprar.preco.replace('R$ ',""))
    }).reduce((a, b) => a + b, 0)

    return (
        <main>
            <p>Nome: {dados.cliente}</p>
            <p>Idade: {dados.idade}</p>
            <p>Situação: <span style={dados.ativa == true ? {color: 'green'}: {color: 'red'}}>{verificaSituacao(dados.ativa)}</span></p>
            <p>Gastos: {total}</p>
            <p>{total > 10000 ? "Você está gastando muito" : "Está no caminho certo"}</p>
        </main>
    )
}

export default Main