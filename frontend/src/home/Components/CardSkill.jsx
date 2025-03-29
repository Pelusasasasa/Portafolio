import React from 'react'

export const CardSkill = ({ text }) => {
    return (
        <div className='flex items-center justify-center p-4 bg-background border rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer'>
            <span className='font-medium'>{text}</span>
        </div>
    )
}
