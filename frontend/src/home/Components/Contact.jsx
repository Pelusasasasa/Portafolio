import React from 'react';
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";




export const Contact = () => {
  return (
    
    <div className='container px-4 md:px-6'>
        <div className='container px-4 md:px-6'>
            <h2 className='text-3xl md:text-4xl font-bold text-center mb-12'>Contactarme</h2>

        <div className='max-w-md mx-auto'>
                <div id='icons' className='flex justify-center gap-10 mt-5 cursor-pointer'>
                    <FaGithub size={32}/>
                    <CiLinkedin size={32}/>
                    <MdOutlineEmail size={32}/>
            </div>

            <form action="" className='mt-5 space-y-4'>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="Nombre">Nombre</label>
                    <input
                        type="text"
                        name="Nombre"
                        id="Nombre"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder='Su nombre'
                    />
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email"
                        name="email"
                        id="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="mensaje">Mensaje</label>
                    <textarea
                        name="mensaje"
                        id="mensaje"
                        rows={20}
                        cols={20}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    ></textarea>
                </div>

                <div>
                    <button className='w-full mt-5 bg-black p-2 text-xl rounded-lg hover:cursor-pointer hover:opacity-80 text-white'>Enviar Mensaje</button>
                </div>
            </form>
        </div>
        </div>
    </div>
  )
}
