"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import { FaTimes } from 'react-icons/fa'

const Navbar = () => {

  let Links = [
    {name: "Ana Sayfa", to: "/"},
    {name: "Projelerim", to:"/my-projects"},
    {name: "İletişim", to:"/contact"},
  ]

  const [navbarOpen, setNavbarOpen] = useState(false)
  
  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen)
  }

  const closeNavbar = () => {
    setNavbarOpen(false);
  };

  

  return (

    <div className='flex justify-between items-center py-5 px-10 shadow-lg bg-gray-500 text-white'>

      <Link href={"/"}>Batuhan Karaahmetoğlu Blog</Link>

      <div className='flex'>

        <div className='md:hidden'>

      <button onClick={toggleNavbar}>
        <Image 
        src={'/hamburger-menu.png'} 
        alt={'hamburger-menu'} 
        width={25} 
        height={20}
        style={{marginTop:"4px"}}
        />
      </button>

        </div>

        <div
          className={`md:hidden fixed top-0 right-0 h-screen w-2/4 bg-gray-500 text-white p-6 transform transition-transform ${
            navbarOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className='flex justify-center flex-col'>
            <button
              onClick={closeNavbar}
              className="ml-auto my-auto p-2 text-white text-2xl"
            >
              <FaTimes />
            </button>
            {Links.map(link => (
              <div className='mr-auto mt-2' key={link.to}>
                <Link href={link.to} onClick={closeNavbar}>
                  {link.name}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className='hidden md:flex md:space-x-4'>
          {Links.map(link => (
            <Link key={link.to} href={link.to} className='hover:text-gray-300 transition'>
              {link.name}
            </Link>
          ))}
        </div>

      </div>
        
    </div>
  )
}

export default Navbar

