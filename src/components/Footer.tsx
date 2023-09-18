import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Merriweather_Sans } from 'next/font/google';

const merriweatherSans = Merriweather_Sans({ subsets: ["latin"] });

export const Footer = () => {
  return (
    <div>
      <div className={`mt-auto grid md:flex md:justify-between items-center w-full md:px-10 bg-[#091f2c] text-center py-3 ${merriweatherSans.className}`}>

        <div className='m-auto md:m-0 flex'>

        <div>
          <Link href="https://github.com/Batuhan445" target='_blank' className='inline-block p-2'>
          <Image src={"/social-media/github.png"} alt='github-logo' width={24} height={24}/>
          </Link>
        </div>
        
          <div>
            <Link href="https://www.linkedin.com/in/batuhankaraahmeto%C4%9Flu/" target='_blank' className='inline-block p-2'>
            <Image src={"/social-media/linkedin.png"} alt='linkedin-logo' width={24} height={24}/>
            </Link>
          </div>


        </div>

        <div className='text-white'>2023© Batuhan Karaahmetoğlu</div>

      </div>

    </div>
  )
}
