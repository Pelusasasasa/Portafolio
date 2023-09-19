import Image from "next/image";

const about = () => {

  return (
    <section id="about" className="grid grid-cols-2 container gap-4 pt-20">
        <div id="img" className="mx-4 my-4">
            <Image className="mx-auto" width={500} height={500} src="/perfil.jpg" alt="Perfil" />
        </div>
        <div id="informacion" className="my-4">
            <h1 className="text-5xl text-red-800 font-bold">Sobre Mi</h1>
            <hr />
            <h2 className="text-3xl font-bold text-gray-800 my-2">Agustin Lorenzatto</h2>
            <p className="text-xl grid gap-8 text-white">
                <span>
                    Soy Estudiante en analistas de sistemas de la facultad Autonoma de Entre Rios.
                </span>
                <span>
                    Tambien me encuentro aprendiendo las distintas tecnologias del desarrollo web tanto FrontEnd como el BackEnd.
                    Me concidero una persona autodidacta en al programacion, teniendo interes por distintos lenguajes y arquitecturas en la programacion.
                    Mi interes principal es el desarrollo web pero tambien me interesa aprender a programar en diferentes areas como la robotica o en las redes informaticas.
                </span>
                
                <span>
                    Me considero una persona muy intuitiva, curiosa y sociable, donde no me cuesta la integracion en grupos de trabajos.
                </span>
            </p>
            <button className="border text-white bg-transparent rounded-3xl border-black p-5 mt-5 text-3xl hover:bg-red-800 hover:text-white">Descargar CV</button>
        </div>
    </section>

  )
}

export default about