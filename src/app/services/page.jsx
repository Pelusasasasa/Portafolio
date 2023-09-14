import Service from '@/components/Service'
import React from 'react';

import reactImg from '../../../public/react.png';
import electronImg from '../../../public/Electron.svg';
import nextImg from '../../../public/Next.png';
import mongoDBImg from '../../../public/MongoDB.png';
import nodeImg from '../../../public/Node.png';

const services = [
  {
    title:'React js',
    description:'React js es un lenguaje de programacion de alto nivel',
    image:reactImg
  },
  {
    title:'Electron js',
    description:'Electron js es un framework para crear apliacaciones de escritorio con javascript',
    image:electronImg
  },
  {
    title:'Next js',
    description:'Next js es un framework para crear apliacaciones web que utiliza la tecnologia de React',
    image:nextImg
  },
  {
    title:'Base de datos',
    description:'Gestion de Base de Datos Con Mongodb',
    image:mongoDBImg
  },
  {
    title:'Node Js',
    description:'Motor que utilzia Javascript del lado del servidor para utiizar en el backend',
    image:nodeImg
  }
]

const Servicios = () => {
  return (
    <section className='h-screen bg-slate-600 top-16 relative'>
        <div className="atencion py-5">
            <h1 className='text-4xl text-white text-center'>Los servicios que ofrezco estan en procesos de aprendizaje</h1>
        </div>
        <div className="services container mx-auto grid grid-cols-3 gap-5 w-full">
            {services.map((service, index) => (
                <Service key={index} title={service.title} description={service.description} image={service.image} />
              ))}
        </div>
    </section>
  )
}

export default Servicios