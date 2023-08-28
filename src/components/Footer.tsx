import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const Footer = () => {
  return (
    <div>
      <div className="fixed bottom-0 h-22 md:h-16 grid md:flex md:justify-between items-center w-full md:px-10 bg-[#091f2c] text-center py-2 md:py-0">

        <div className='m-auto md:m-0 flex'>

          <div>
            <Link href="https://www.linkedin.com/in/batuhankaraahmeto%C4%9Flu/" target='_blank' className='inline-block p-2'>
            <Image src={"/social-media/linkedin.png"} alt='linkedin-logo' width={24} height={24}/>
            </Link>
          </div>

        <div>
          <Link href="https://facebook.com/batuhankara.tr" target='_blank' className='inline-block p-2'>
          <Image src={"/social-media/facebook.png"} alt='facebook-logo' width={24} height={24}/>
          </Link>
        </div>

        <div className='mt-[2px]'>

          <Link href="https://x.com/trbatuhankara" target='_blank' className='inline-block p-2'>
          <Image 
          src={'/social-media/x-twitter-logo.png'} alt={'x-twitter-logo'} width={20} height={20}/>
          </Link>
        </div>

        </div>

        <div className='text-white'>2023© Batuhan Karaahmetoğlu</div>

      </div>

    </div>
  )
}
