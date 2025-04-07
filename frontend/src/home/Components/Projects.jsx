import React, { useEffect } from 'react';
import { useProjectStore } from "../../hooks/useProjectStore"
import { CardProject } from "./cardProject";

export const Projects = () => {

    const { projects, startGetProjects } = useProjectStore();
    console.log(projects)

    useEffect(() => {
        startGetProjects()
    }, [])

    return (
        <div className="text-3xl md:text-4xl font-bold text-center mb-12 mt-10">
            <h3>Projectos Destacados</h3>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-10'>
                {
                    projects.map((elem) => (
                        <CardProject key={elem._id} {...elem} />
                    ))
                }
            </div>
        </div>
    )
}
