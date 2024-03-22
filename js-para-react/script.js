import areaQuadrado from "./app.js"
console.log(areaQuadrado(8))

// Destructuring

// function MouseMove(event) {
//     const clientY = event.clientY
//     const clientX = event.clientY
//     console.log(clientY, clientX)
// }

// const MouseMoving = () => {
//     const {clientX, clientY} = event
//     console.log(clientX, clientY)
// }

// const MouseHandle = ({clientX, clientY}) => {
//     console.log(clientX, clientY)
// }

const MouseHandle = ({clientX, clientY}) => console.log(clientX, clientY)

// document.documentElement.addEventListener('mousemove', MouseHandle)

// Array

const frutas = ['banana', 'maçã', 'Pera']

const [banada, maca] = frutas;

//Rest

const showList = (empresas, ...funcionarios) => {
    funcionarios.forEach((funcionario) => {
        console.log(`${funcionario} - ${empresas}`)
    })
}

showList('Senai', 'Carlos', 'Leticia', 'Bruno')

// Spread

const numeros = [12, 13, 21, 30, 4, 6]

const maior = Math.max(...numeros)

console.log(maior)

const carro = {
    cor: 'Cinza',
    ano: '2020',
    modelo: 'Hilux',
    movimento: 'Tuts Tuts'
}

const marca = {...carro, marca: 'Toyota'}

// array map e filter

const compras = ['150', 'R$ 500', 'R$ 210', '100', 'Shampoo', 'Pica-nha']

const precosFIltros = compras.filter((preco) => {
    return preco.includes('R$')
})

const precosNumeros = compras.filter((preco) => {
    const numeros = Number(preco)

    if(!isNaN(numeros)){
        return preco
    }else if(preco.includes('R$')){
        return preco
    }
})

const transformaPreco = precosNumeros.map((preco) => preco.replace('R$ ', ''))

console.log(...transformaPreco)

//Operadores Ternarios

const csa = 1
const crb = 2

                //comparador  verdadeiro       falso
const vencedor = crb > csa ? 'CRB venceu' : 'CSA venceu'

const situacaoAtiva = true
const mensagem = situacaoAtiva && 'Situação ativa'

console.log(mensagem)