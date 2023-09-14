'use client'

import Link from "next/link";
import Image from "next/image";

import githubIcon from "../../public/github.png";
import facebookIcon from "../../public/facebook.png";
import whatsappIcon from "../../public/whatsapp.png";
import asideMenuIcon from "../../public/asideMenu.png";
import { useState } from "react";


const NavBar = () => {
    const [menu,setMenu] = useState(false);

    const handleMenu = () => {
      setMenu(!menu)
    }

  return (
    <nav className="fixed w-full z-10">
        <div id="navbar" className="flex justify-between items-center h-16 bg-slate-900">
            <Link id="name" href='/'><h3 className="text-5xl pl-5 text-bold text-red-800">/AL/</h3></Link>
            <ul id="menu" className="flex items-center gap-4 text-white ">
                <Link href='/'><li className="hover:text-red-700 hover:cursor-pointer text-2xl">Inicio</li></Link>
                <Link href='/about'><li className="hover:text-red-700 hover:cursor-pointer text-2xl">Sobre Mi</li></Link>
                <Link href='/services'><li className="hover:text-red-700 hover:cursor-pointer text-2xl">Servicios</li></Link>
                <Link href='portafolio'><li className="hover:text-red-700 hover:cursor-pointer text-2xl">Portafolio</li></Link>
                <Link href='contact'><li className="hover:text-red-700 hover:cursor-pointer text-2xl">Contacto</li></Link>
            </ul>
            <ul id="iconsRedes" className="flex gap-4 text-white">
                <li>
                  <Image className="hover:cursor-pointer text-white" src={githubIcon} />
                </li>
                <li>
                  <Image className="hover:cursor-pointer text-white" src={facebookIcon} />
                </li>
                <li>
                  <Image className="hover:cursor-pointer text-white" src={whatsappIcon} />
                </li>
            </ul>

            <div id="menu-icon" className=" hover:cursor-pointer hidden mt-4">
              <Image
              alt='Menu'
              className="relative "
              src={asideMenuIcon}
              onClick={handleMenu}
               />
              <ul id="aside-menu" className={`${!menu ? 'noMostrar' : 'mostrar'}  text-white relative z-30 bg-slate-900`}>
                <Link href='/'><li className="hover:text-red-700 hover:cursor-pointer text-2xl text-center mx-5">Inicio</li></Link>
                <Link href='/about'><li className="hover:text-red-700 hover:cursor-pointer text-2xl text-center mx-5">Sobre Mi</li></Link>
                <Link href='/services'><li className="hover:text-red-700 hover:cursor-pointer text-2xl text-center mx-5">Servicios</li></Link>
                <Link href='portafolio'><li className="hover:text-red-700 hover:cursor-pointer text-2xl text-center mx-5">Portafolio</li></Link>
                <Link href='contact'><li className="hover:text-red-700 hover:cursor-pointer text-2xl text-center mx-5">Contacto</li></Link>
              </ul>
            </div>


        </div>
    </nav>
  )
}

export default NavBar