import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Work_Sans } from 'next/font/google'

const workSans = Work_Sans({subsets: ["latin"]})

const Contact = () => {
  return (
    <div className={`h-screen ${workSans.className}`}>
        <title>Batuhan Karaahmetoğlu Blog | İletişim</title>

      <div className='flex-1 grid items-center text-center mt-20'>

        <div className='flex m-auto mb-9'>
          <Image src={"/social-media/email.png"} alt='email' width={45} height={20} className='mr-6'/>
          <a className='hover:underline text-2xl md:text-3xl mb-1' href="mailto:neomatrix44@hotmail.com">neomatrix44@hotmail.com</a>
        </div>

        <div className='flex m-auto mb-9'>
          <Image src={"/social-media/whatsapp.png"} alt='whatsapp' width={45} height={40} className='mr-6'/>
          <Link href={"https://wa.me/05531344902"} target='_blank' className='text-2xl md:text-3xl mb-1 m-auto'>Whatsapp</Link>
        </div>

        <div className='flex m-auto mb-9'>
        <Image src={"/social-media/linkedin.png"} alt='linkedin' width={45} height={40} className='mr-6'/>
          <Link href={"https://www.linkedin.com/in/batuhankaraahmeto%C4%9Flu/"} target='_blank' className='text-2xl md:text-3xl mb-1 m-auto'>Linkedin</Link>
        </div>


        <div className='flex m-auto'>
        <Image src={"/social-media/github.png"} alt='linkedin' width={45} height={40} className='mr-6'/>
          <Link href={"https://github.com/Batuhan445"} target='_blank' className='text-2xl md:text-3xl mb-1 m-auto'>Github</Link>
        </div>

      </div>

    </div>

    
  )
}

export default Contact