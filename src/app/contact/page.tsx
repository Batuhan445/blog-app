import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Contact = () => {
  return (
    
    // <div className='flex flex-row items-center flex-1'>
      <div className='flex-1 grid md:flex md:justify-evenly items-center text-center py-28 md:py-40 w-full'>
        <title>Batuhan Karaahmetoğlu Blog | İletişim</title>

        <div>
          <p className='text-2xl md:text-3xl mb-10'>E-posta :</p>
          <a className='hover:underline text-2xl md:text-3xl' href="mailto:neomatrix44@hotmail.com">neomatrix44@hotmail.com</a>
        </div>

        <div>

        <div className='md:mt-0 mt-10 text-xl md:text-3xl my-5 md:my-0'>
        Sosyal Medya :
        </div>

        <div className='grid md:grid-cols-2  gap-y-7 gap-x-20 items-center justify-center md:justify-start md:py-16 text-xl lg:text-2xl'>

          <div className='mt-3'>
            <Link href={'https://www.linkedin.com/in/batuhankaraahmeto%C4%9Flu/'} target='_blank' style={{display:"flex"}}>
            <Image src={"/social-media/linkedin.png"} alt='linkedin-logo' width={40} height={40} style={{marginRight:"15px"}}/>
            <div className='m-auto  hover:text-blue-400 transition'>
              Linkedin
            </div>
            </Link>
          </div>
          
          <div className='mt-3'>
            <Link href={'https://github.com/Batuhan445'} target='_blank' style={{display:"flex"}}>
            <Image src={"/social-media/github.png"} alt='github-logo' width={40} height={40} style={{marginRight:"15px"}}/>
          <div className='m-auto  hover:text-blue-400 transition'>
              Github
          </div>
              </Link>
          </div>

          <div className='mt-3'>
          <Link href={'https://www.facebook.com/batuhankara.tr/'} target='_blank' style={{display:"flex"}}>
          <Image src={"/social-media/facebook.png"} alt='facebook-logo' width={40} height={40} style={{marginRight:"15px"}}/>
          <div className='m-auto  hover:text-blue-400 transition'>
            Facebook
          </div>
          </Link>
          </div>

          <div className='mt-3'>
          <Link href={'https://www.x.com/trbatuhankara/'} target='_blank' style={{display:"flex"}}>
          <Image src={"/social-media/x-twitter-logo.png"} alt='x-logo' width={40} height={40} style={{marginRight:"15px"}}/>
          <div className='m-auto  hover:text-blue-400 transition'>
            X (Twitter)
          </div>
            </Link>

          </div>

          <div className='mt-3'>
          <Link href={'https://www.instagram.com/trbatuhankara/'} target='_blank' style={{display:"flex"}}>
          <Image src={"/social-media/instagram.png"} alt='instagram-logo' width={40} height={40} style={{marginRight:"15px"}}/>
          <div className='m-auto  hover:text-blue-400 transition'>
            Instagram
          </div>
            </Link>
          </div>


        </div>
      </div>

      </div>

    
  )
}

export default Contact