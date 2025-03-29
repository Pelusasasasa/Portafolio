import React from 'react'

export const AboutMe = () => {
    return (
        <div className=' container px-4 md:px-6'>
            <h2 className='text-3xl md:text-4xl font-bold text-center mb-12 mt-10'>Sobre Mi</h2>

            <div className='max-w-3xl mx-auto'>
                <p className='text-lg text-muted-foreground mb-6'>I'm a passionate developer with over 5 years of experience building web applications. I specialize in React, Next.js, and modern JavaScript frameworks to create fast, responsive, and user-friendly experiences.</p>
                <p className='text-lg text-muted-foreground mb-6'>My journey in web development started when I built my first website in college. Since then, I've worked with startups and established companies to deliver high-quality software solutions that solve real-world problems.</p>
                <p className='text-lg text-muted-foreground'>When I'm not coding, you can find me hiking, reading tech blogs, or experimenting with new technologies to stay at the cutting edge of web development.</p>
            </div>
        </div>
    )
}
