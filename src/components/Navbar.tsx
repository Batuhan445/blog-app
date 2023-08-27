import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='border border-red-500 flex justify-between items-center m-auto h-16 px-10'>
      <Link href={"/"}>Batuhan Karaahmetoğlu Blog</Link>
      <div className='space-x-6'>
        <Link href={"/"}>Ana Sayfa</Link>
        <Link href={'/contact'}>İletişim</Link>
      </div>
        
    </div>
  )
}

export default Navbar