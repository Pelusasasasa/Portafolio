
import Image from "next/image";
import  imgFondo from "../../public/fondo.jpg"

const HomePage = () => {
  return (
    <section>
      <Image
        className="max-w-screen max-h-screen object-cover bg-transparent"
        src={imgFondo}
        alt="Fondo"
      />
      <div>
        <h1>Soy <span className="text-red-700">Agustin Lorenzatto</span>, Desarrolador Web</h1>
      </div>
    </section>
  )
}

export default HomePage