"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'

const Navbar = () => {

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
        />
      </button>

        </div>

        <div className='hidden md:flex md:space-x-4 '>
        <Link className='hover:text-gray-700 transition' href={"/"}>Ana Sayfa</Link>
        <Link className='hover:text-gray-700 transition' href={'/contact'}>İletişim</Link>
        </div>

      </div>
        
    </div>
  )
}

export default Navbar