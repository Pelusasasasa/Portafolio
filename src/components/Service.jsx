import Image from "next/image"

const Service = ({title, description, image}) => {
  return (
    <main className="w-full h-full border h-50 hover:cursor-pointer hover:bg-slate-500 border-gray bg-slate-600 rounded-2xl">
        <figure className="my-5 h-28 w-28 mx-auto">
            <Image
            className="mx-auto object-contain"
            src={image}
            width={200}
            height={200}
            alt={title}
            />
        </figure>
        <h1 className="text-4xl text-center text-white">{title}</h1>
        <p className="text-center align-bottom text-2xl text-slate-300 mb-4">{description}</p>
    </main>
  )
}

export default Service