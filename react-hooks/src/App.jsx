// O estado de uma aplicação representa as caracteristicas dela naquela momento.

import React from "react";

// const App = () => {
//   const ativo = false
//   return(
//     <button disabled={!ativo ? true : false}>{ativo == true ? 'Botão Ativo' : 'Botão Inativo'}</button>
//   )
// };

// Hooks
// São funções especiais do React que permitem controlarmos o estado e o ciclo de vida de componentes funcionais.

// React.useState - É uma funcao que retorna um array com 2 valores. O primeiro valor guarda o dado do estado atual, que pode ser qualquer tipo de dado como strings, arrays, numeros, boolean, null, undefined ou objetos. O segundo valor é uma função que pode ser utilizada para modificarmos o estado do primeiro valor;

// Quando a função de modificação do estado é ativdada, todos os componentes que dependerem do estado, serão renderizados e os seus filhos tambem. É isso que garante a reatividade de componentes funcionais no react

const App = () => {
  const [ativo, setAtivo] = React.useState(true)
  return (
    <>
    <h1>Deixe os dois botões inativos</h1>
      <button onClick={() => setAtivo(!ativo)} disabled={!ativo ? true : false}>{ativo ? 'Botão Ativo' : 'Botão Inativo'}</button>
      <button onClick={() => setAtivo(!ativo)} disabled={ativo ? true : false}>{!ativo ? 'Botão Ativo' : 'Botão Inativo'}</button>
    </>
  )
};

export default App;