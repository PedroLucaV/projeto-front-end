/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './style.css'
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
            <span className={`${dados.category} data`}>
                <div className='nome-image'>
                    <img src={iconSrc} alt={dados.category} />
                    <p>{dados.category}</p>
                </div>
                <p className='score'>{dados.score}/100</p>
            </span>
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
            <span className='media'>
                <h3>Your Result</h3>
                <span className='mediaCircle'>
                    <h1>{resultadoMedia}</h1>
                    <p className='of'>of 100</p>
                </span>
                <div className='rest-of-text'>
                    <h2>Great</h2>
                    <p>You scored higher than 65% of the people who have taken these tests.</p>
                </div>
            </span>
            <span className='summary'>
                <div className='datas'>
                    <h2>Summary</h2>
                    <SummaryItems data={data} categoria='Reaction'/>
                    <SummaryItems data={data} categoria='Memory' />
                    <SummaryItems data={data} categoria='Verbal' />
                    <SummaryItems data={data} categoria='Visual' />
                </div>
                <div className='button-box'><input type="button" value="Continue" className='button'/></div>
            </span>
        </main>
    );
};

export default App;