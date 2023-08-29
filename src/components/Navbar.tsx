"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'

const Navbar = () => {

  let Links = [
    {name: "Ana Sayfa", to: "/"},
    {name: "Projelerim", to:"/my-projects"},
    {name: "İletişim", to:"/contact"},
  ]

  const [navbar, setNavbar] = useState(false)
  

  return (

    <div className='flex justify-between items-center py-5 px-10 shadow-lg bg-gray-500 text-white'>

      <Link href={"/"}>Batuhan Karaahmetoğlu Blog</Link>

      <div className='flex'>

        <div className='md:hidden'>

      <button>
        <Image 
        src={'/hamburger-menu.png'} 
        alt={'hamburger-menu'} 
        width={25} 
        height={20}
        style={{marginTop:"4px"}}
        />
      </button>

        </div>

        <div className='hidden md:flex md:space-x-4'>

        {Links.map (link => (
          <Link className='hover:text-gray-200' href={link.to}>{link.name}</Link>
        ))}

        </div>

      </div>
        
    </div>
  )
}

export default Navbar