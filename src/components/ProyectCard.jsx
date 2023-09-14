import Image from "next/image"
import Link from "next/link"

const ProyectCard = ({title,description,image}) => {
  return (
    <div className="border border-white rounded-2xl hover:cursor-pointer hover:bg-slate-500 ">
      <figure >
        <Image className="rounded-t-2xl h-40" alt={title} src={image}/>
      </figure>
      <h1 className="text-white text-4xl text-center mt-2 font-bold">{title}</h1>
      <p className="text-slate-300 pb-5 text-2xl text-center ">{description}</p>

      <div className="w-full flex justify-center mb-4">
        <Link href={`portafolio/${title}`}><button className="bg-white text-black text-2xl font-bold rounded-2xl p-2 align-middle hover:bg-gray-300 hover:text-red-700">Ver Mas</button></Link>
      </div>
    </div>
  )
}

export default ProyectCard