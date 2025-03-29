import React from 'react';
import { CardSkill } from './CardSkill';

const habilidades = [
    'REACT.JS',
    'JAVASCRIPT',
    'ELECTRON',
    'CSS',
    'HTML',
    'TAILWIND CSS',
    'NODE.JS',
    'EXPRESS.JS',
    'MONGODB',
    'GIT',
    'REDUX'
];

export const Skills = () => {
    return (
        <div className='container px-4 md:px-6'>
            <h2 className='text-3xl md:text-4xl font-bold text-center mb-12 mt-10'>Habilidades y Teconologias</h2>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-4xl mx-auto'>
                {habilidades.map(elem => (
                    <CardSkill text={elem} key={elem} />
                ))}
            </div>
        </div>
    )
};
