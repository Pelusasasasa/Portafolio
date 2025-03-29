import React, { useEffect } from 'react';
import { useProjectStore } from "../../hooks/useProjectStore"
import { CardProject } from "./cardProject";

export const Projects = () => {

    const { projects, startGetProjects } = useProjectStore();


    useEffect(() => {
        startGetProjects()
    }, [])

    return (
        <div className="text-3xl md:text-4xl font-bold text-center mb-12 mt-10">
            <h3>Projectos Destacados</h3>

            <div>
                {
                    projects.map((elem) => (
                        <CardProject key={elem._id} {...elem} />
                    ))
                }
            </div>
        </div>
    )
}
