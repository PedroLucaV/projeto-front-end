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

const mario = {
    cliente: 'Mario',
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
    const dados = luana;
    const sum = dados.compras.reduce(
        (currentValue, accumulator) => accumulator+currentValue.preco, 0
    )
    return (
        <main>
            <p>Nome: {dados.cliente}</p>
            <p>Idade: {dados.idade}</p>
            <p>Situação: {verificaSituacao(dados.ativa)}</p>
            <p>Idade: {dados.idade}</p>
            <p>Gastos: {sum}</p>
        </main>
    )
}

export default Main