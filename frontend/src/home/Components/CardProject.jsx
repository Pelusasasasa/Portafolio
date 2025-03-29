import React from 'react'

export const CardProject = (elem) => {

    console.log(elem);
    return (
        <div>
            <div>
                <img src={elem.imageURL} alt={elem.name} />
            </div>
            <div>
                <h2>{elem.name}</h2>
                <span>{elem.description}</span>
            </div>
            <div>
                {elem.technologies.map(elem => (
                    <span key={elem}>{elem}</span>
                ))}
            </div>
        </div>
    )
}
