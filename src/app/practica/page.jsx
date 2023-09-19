import PracticaCard from '@/components/PracticaCard';
import taskIMG from '../../../public/practicas/crudTask.png';
import firstProjectIMG from '../../../public/practicas/firstProject.png';

const practicas = [
    {
        title:'Primer Poyecto en NextJS',
        description: 'Mi primera apliacon en next Js que usamos una api para traer usuarios',
        tecnologias: ['NextJS', 'Taiwind CSS'],
        img: firstProjectIMG
    },
    {
        title: 'Crud de Tareas',
        description: 'Aplicacion para crear, eliminar,modificar y ver tareas pendientes a cumplor',
        tecnologias: ['MongoDB', 'NextJS', 'Taiwind CSS'],
        img: taskIMG
    },
    {
        title: 'Claculadora con React',
        description: 'Aplicacion sencilla de calculadora con React',
        tecnologias: ['vite', 'React', 'Taiwind CSS'],
        img: taskIMG
    }
]

const practica = () => {
  return (
    <section className='relative top-16'>
        <h1 className='text-center text-4xl pt-4 font-bold text-white'>En esta seccion voy a mostrar las practicas que hice con distintas tecnolgias</h1>
        <main id='practicas' className='grid px-5 py-5 gap-4 grid-cols-3'>
            {practicas.map((practica, index) => (
                <PracticaCard practica={practica} key={index} />
            ))}
        </main>
    </section>
  )
}

export default practica