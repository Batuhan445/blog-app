import React from 'react'
import Image from 'next/image'

export const Footer = () => {
  return (
    <div>
      <div className="fixed bottom-0 h-20 md:h-16 grid md:flex md:justify-between items-center w-full md:px-10 bg-[#091f2c] text-center py-2 md:py-0">

        <div className='m-auto md:m-0'>

          <a href="https://x.com/trbatuhankara" target='_blank'>
          <Image 
          src={'/social-media/x-twitter-logo.png'} alt={'x-twitter-logo'} width={20} height={20}/>
          </a>

        </div>

        <div className='text-white'>2023© Batuhan Karaahmetoğlu</div>

      </div>

    </div>
  )
}
