import React from 'react';
import data from './assets/data.json';
import memory from './assets/assets/images/icon-memory.svg';
import reaction from './assets/assets/images/icon-reaction.svg';
import verbal from './assets/assets/images/icon-verbal.svg';
import visual from './assets/assets/images/icon-visual.svg';

const categoryIcons = {
    'Memory': memory,
    'Reaction': reaction,
    'Verbal': verbal,
    'Visual': visual
};

const SummaryItems = ({ data, categoria }) => {
    const dados = data.find(item => item.category === categoria);
    const iconSrc = categoryIcons[categoria];
    return (
        <>
            <h2>{dados.category}</h2>
            <p>Score: {dados.score}</p>
            <img src={iconSrc} alt={dados.category} />
        </>
    );
};

const media = ({ data }) => {
    const soma = data.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.score;
    }, 0);

    const media = soma / data.length;

    return Number.parseInt(media);
};

const resultadoMedia = media({ data: data });

const App = () => {
    return (
        <main>
            <SummaryItems data={data} categoria='Reaction' />
            <SummaryItems data={data} categoria='Memory' />
            <SummaryItems data={data} categoria='Verbal' />
            <SummaryItems data={data} categoria='Visual' />
            <p>Media: {resultadoMedia}</p>
        </main>
    );
};

export default App;