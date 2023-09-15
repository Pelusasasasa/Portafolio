import React from 'react';
import ProyectCard from '@/components/ProyectCard';

import electroAvenidaImg from '../../../public/proyectos/electroAvenida/principal.png';
import portafolioImg from '../../../public/proyectos/portafolio/principal.png';
import getionStockImg from '../../../public/proyectos/gestionStock/Principal.png';

const proyectos = [
  {
    title: 'Electro Avenida',
    description: 'Aplicación para la venta de materiales electricos con gestion de stock y facturacion',
    tecnologia: ['Electron.js', 'Node JS', 'Mongo DB', 'Express JS'],
    image: electroAvenidaImg
  },
  {
    title: 'Mi Portafolio',
    description: 'Pagina web para presentarme y a mis proyectos',
    tecnologia: ['Next JS', 'Tailwind CSS', 'React JS'],
    image: portafolioImg
  },
  {
    title: 'Gestion de Stock',
    description: 'Aplicación para la venta de materiales electricos con gestion de stock y facturacion',
    tecnologia: ['Electron.js', 'Node JS', 'Mongo DB', 'Express JS'],
    image: getionStockImg
  }
];

const page = () => {
  return (
    <div id='proyect' className='bg-slate-600 top-16 relative grid grid-cols-3 pb-5 gap-3 pt-5'>
       {proyectos.map((services, index) => (
        <ProyectCard title={services.title} key={index} image={services.image} tecnologia={services.tecnologia} description={services.description} />
      ))}
    </div>
  )
}

export default page