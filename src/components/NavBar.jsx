'use client'

import Link from "next/link";
import Image from "next/image";
import {usePathname,useSearchParams} from 'next/navigation';

import githubIcon from "../../public/github.png";
import facebookIcon from "../../public/facebook.png";
import whatsappIcon from "../../public/whatsapp.png";
import asideMenuIcon from "../../public/asideMenu.png";
import { useEffect, useState } from "react";


const NavBar = () => {
    const [menu,setMenu] = useState(false);

    let path = usePathname();

    useEffect(() => {
      setMenu(false);
    }, [path]);
    

    const handleMenu = () => {
      setMenu(!menu)
    };
    
  return (
    <nav className="fixed w-full z-10">
        <div id="navbar" className="flex justify-between items-center h-16 bg-slate-900">
            <Link id="name" href='/'><h3 className="text-5xl pl-5 text-bold text-red-800">/AL/</h3></Link>
            <ul id="menu" className="flex items-center gap-4 text-white">
                <Link href='/' className={path === '/' ? 'text-red-700' : ''}><li className="hover:text-red-700 hover:cursor-pointer text-2xl">Inicio</li></Link>
                <Link href='/about' className={path === '/about' ? 'text-red-700' : ''}><li className="hover:text-red-700 hover:cursor-pointer text-2xl">Sobre Mi</li></Link>
                <Link href='/services' className={path === '/services' ? 'text-red-700' : ''}><li className="hover:text-red-700 hover:cursor-pointer text-2xl">Servicios</li></Link>
                <Link href='/portafolio' className={path === '/portafolio' ? 'text-red-700' : ''}><li className="hover:text-red-700 hover:cursor-pointer text-2xl">Portafolio</li></Link>
                <Link href='/practica' className={path === '/practica' ? 'text-red-700' : ''}><li className="hover:text-red-700 hover:cursor-pointer text-2xl">Practicas</li></Link>
            </ul>
            <ul id="iconsRedes" className="flex gap-4 text-white">
                <li>
                  <Link href='https://github.com/pelusasasasa' target="_blank">
                    <Image className="hover:cursor-pointer text-white" src={githubIcon} alt="GitHub" />
                  </Link>
                </li>
                <li>
                  <Link href='https://www.facebook.com/agustin.lorenzatto' target="_blank">
                    <Image className="hover:cursor-pointer text-white" src={facebookIcon} alt="Facebook"/>
                  </Link>
                </li>
                <li>
                  <Link href='https://api.whatsapp.com/send?phone=3456445977' target="_blanck">
                    <Image className="hover:cursor-pointer text-white" src={whatsappIcon} alt="WhatsApp"/>
                  </Link>
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
                <Link href='/' className={path === '/' ? 'text-red-700' : ''}><li className="hover:text-red-700 hover:cursor-pointer text-2xl text-center mx-5">Inicio</li></Link>
                <Link href='/about' className={path === '/about' ? 'text-red-700' : ''}><li className="hover:text-red-700 hover:cursor-pointer text-2xl text-center mx-5">Sobre Mi</li></Link>
                <Link href='/services' className={path === '/services' ? 'text-red-700' : ''}><li className="hover:text-red-700 hover:cursor-pointer text-2xl text-center mx-5">Servicios</li></Link>
                <Link href='/portafolio' className={path === '/portafolio' ? 'text-red-700' : ''}><li className="hover:text-red-700 hover:cursor-pointer text-2xl text-center mx-5">Portafolio</li></Link>
                <Link href='/practica' className={path === '/practica' ? 'text-red-700' : ''}><li className="hover:text-red-700 hover:cursor-pointer text-2xl text-center mx-5">Practicas</li></Link>
              </ul>
            </div>


        </div>
    </nav>
  )
}

export default NavBar