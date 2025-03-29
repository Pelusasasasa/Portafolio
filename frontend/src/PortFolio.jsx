import React from 'react'
import { useProjectStore } from './hooks';

export const PortFolio = () => {

    const { startGetProjects } = useProjectStore();

    startGetProjects()

    return (
        <div className='w-full'>
            <h1 className='text-center'>PortFolio</h1>
        </div>
    )
}
