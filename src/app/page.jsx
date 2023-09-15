
import Image from "next/image";
import  imgFondo from "../../public/fondo.jpg"
import Link from "next/link";

const HomePage = () => {
  console.log("a")
  return (
    <section className="relative h-screen">
      <Image
        className="max-w-screen h-full object-cover bg-black opacity-95"
        src={imgFondo}
        alt="Fondo"
      />
      <div className="absolute top-0 h-full flex items-center justify-center w-full bg-black opacity-70 flex-col gap-5">
        <h3 className="text-white text-2xl">Bienvenidos</h3>
        <h1 className="text-4xl text-center text-white">Soy <span className="text-red-700">Agustin Lorenzatto</span>, Desarrolador Web Junior</h1>
        <Link href='/portafolio'><button className="text-white rounded-2xl border border-white px-6 py-4 hover:bg-red-700 hover:text-black font-bold text-2xl">Mi Portafolio</button></Link>
      </div>
    </section>
  )
}

export default HomePage