import Link from "next/link"

const NavBar = () => {
  return (
    <nav>
        <div className="flex justify-around items-center h-16 px-4 bg-slate-900">
            <Link href='/'><h3 className="text-5xl text-bold text-red-800">/AL/</h3></Link>
            <ul className="flex items-center gap-4 text-white ">
                <Link href='/'><li className="hover:text-red-700 hover:cursor-pointer text-2xl">Inicio</li></Link>
                <Link href='/about'><li className="hover:text-red-700 hover:cursor-pointer text-2xl">Sobre Mi</li></Link>
                <Link href='/services'><li className="hover:text-red-700 hover:cursor-pointer text-2xl">Servicios</li></Link>
                <Link href='portafolio'><li className="hover:text-red-700 hover:cursor-pointer text-2xl">Portafolio</li></Link>
                <Link href='contact'><li className="hover:text-red-700 hover:cursor-pointer text-2xl">Contacto</li></Link>
            </ul>
            <ul className="flex gap-4 text-white">
                <li>G</li>
                <li>F</li>
                <li>W</li>
            </ul>
        </div>
    </nav>
  )
}

export default NavBar