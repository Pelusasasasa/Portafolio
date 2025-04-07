import React from 'react'

export const CardProject = (elem) => {

    
    return (
        <div className='bg-white mb-5 rounded-lg'>
            <div className='mb-5'>
                <img className='rounded-lg' src={elem.imageURL} alt={elem.name} />
            </div>
            <div className='flex justify-start flex-col items-start px-2 py-2'>
                <h2 className='text-gray-900 text-2xl font-bold'>{elem.name}</h2>
                <span className='text-gray-600 text-sm'>{elem.description}</span>
            </div>
            <div className='text-black text-sm flex gap-5 mb-10 px-2'>
                {elem.technologies.map(elem => (
                    <span className='bg-gray-300 rounded-2xl px-2 font-normal' key={elem}>{elem}</span>
                ))}
            </div>
        </div>
    )
}
