import Image from "next/image"

const PracticaCard = ({practica}) => {
    console.log(practica)
  return (
    <article>
        <div className="flex h-full flex-col justify-center items-center">
            <Image src={practica.img} alt={practica.title}/>
            <h1 className="text-white text-3xl  text-center">{practica.title}</h1>
            <p className="text-white text-center text-xl">{practica.description}</p>
            <p className="flex gap-2  mt-auto items-center text-white">Tecnlogias: 
                {practica.tecnologias.map((tecnologia) => (
                    <span className="bg-slate-700 rounded-xl hover:cursor-pointer hover:bg-slate-800 px-2 py-2">{tecnologia}</span>
                ))}
            </p>
        </div>
    </article>
  )
}

export default PracticaCard