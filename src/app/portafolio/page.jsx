import React from 'react';
import ProyectCard from '@/components/ProyectCard';

import electroAvenidaImg from '../../../public/proyectos/electroAvenida/principal.png';

const proyectos = [
  {
    title: 'Electro Avenida',
    description: 'Aplicación para la venta de materiales electricos con gestion de stock y facturacion',
    tecnologia: ['Electron.js', 'Node JS', 'Mongo DB', 'Express JS'],
    image: electroAvenidaImg
  },
  {
    title: 'Electro Avenida',
    description: 'Aplicación para la venta de materiales electricos con gestion de stock y facturacion',
    tecnologia: ['Electron.js', 'Node JS', 'Mongo DB', 'Express JS'],
    image: electroAvenidaImg
  },
  {
    title: 'Electro Avenida',
    description: 'Aplicación para la venta de materiales electricos con gestion de stock y facturacion',
    tecnologia: ['Electron.js', 'Node JS', 'Mongo DB', 'Express JS'],
    image: electroAvenidaImg
  }
];

const page = () => {
  return (
    <div className='bg-slate-600 top-16 relative grid grid-cols-3 pb-5 gap-3 pt-5'>
       {proyectos.map((services, index) => (
        <ProyectCard title={services.title} key={index} image={services.image} tecnologia={services.tecnologia} description={services.description} />
      ))}
    </div>
  )
}

export default page