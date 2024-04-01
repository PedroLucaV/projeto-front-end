/* eslint-disable react/prop-types */
// Propriedades Props
const Titulo = (props) => {
    return(
        <h1 style={{color: props.cor}}>{props.texto}</h1>
    )
}

const SubTitulo = ({texto, cor}) => {
    return(
        <p style={{color: cor}}>{texto}</p>
    )
}

const Cabecalho = (props) => {
    return(
        <h1>{props.children}</h1>
    )
}

const App = () => {
    let nome = window.prompt('Qual seu nome')
    return(
        <>
            <Cabecalho>
                <p>{`Olá ${nome}, bem vindo ao site`}</p>
            </Cabecalho>
            <Titulo cor='blue' texto="Meu Titulo"/>
            <SubTitulo cor='purple' texto="Este é o subtitulo"/>
            <Titulo cor='red' texto="Este é meu outro titulo"/>
            <Titulo cor='green' texto="Esse é o terceiro titulo"/>
        </>
    )
}

export default App;