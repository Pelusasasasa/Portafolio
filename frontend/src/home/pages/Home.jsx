import React from 'react'
import { AboutMe } from '../Components/AboutMe'
import { Skills } from '../Components/Skills'
import { Projects } from '../Components/Projects'

export const Home = () => {
    return (
        <div className='min-h-screen bg-background'>
            <section className='relative py-20 md:py-32 overflow-hidden md:flex-row flex-col items-center flex w-full justify-around'>
                <div className='absolute inset-0 bg-gradient-to-br from-10%/10 to-blue-200 z-0'></div>
                <div className='px-4 relative z-10 flex flex-col gap-5'>
                    <div>
                        <h1 className='text-center'>Hola, Yo soy Agustin Lorenzatto</h1>
                        <p className='mt-2 text-2xl'>Estudiante de analista de sistemas, FrontEnd y BackEnd</p>
                    </div>
                    <div className='mt-20 flex gap-5 justify-center'>
                        <button>Contactarme</button>
                        <button>Ver Informacion</button>
                    </div>
                </div>

                <div className='rounded-full overflow-hidden w-80 h-80 z-10 mt-10'>
                    <img src="/Perfil.jpg" alt="" className='w-full h-full object-cover' />
                </div>
            </section>

            <section>
                <AboutMe />
            </section>

            <section>
                <Skills />
            </section>

            <section>
                <Projects />
            </section>
        </div>


    )
}
