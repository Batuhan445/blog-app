import Link from 'next/link'
import React from 'react'

const Contact = () => {
  return (
    
    // <div className='flex flex-row items-center flex-1'>
      <div className='flex-1 grid md:flex md:justify-evenly items-center text-center  py-40 w-full'>
        <title>Batuhan Karaahmetoğlu Blog | İletişim</title>

        <div>
          <p className='text-xl'>E-posta :</p>
          <a className='hover:underline' href="mailto:neomatrix44@hotmail.com">neomatrix44@hotmail.com</a>
        </div>

        <div>

        <div>
        Sosyal Medya :
        </div>

        <div className='grid items-center'>
          <Link href={'https://www.linkedin.com/in/batuhankaraahmeto%C4%9Flu/'}>Linkedin</Link>
          <Link href={'https://www.linkedin.com/in/batuhankaraahmeto%C4%9Flu/'}>Github</Link>
          <Link href={'https://www.linkedin.com/in/batuhankaraahmeto%C4%9Flu/'}>Facebook</Link>
          <Link href={'https://www.linkedin.com/in/batuhankaraahmeto%C4%9Flu/'}>X (Twitter)</Link>
          <Link href={'https://www.linkedin.com/in/batuhankaraahmeto%C4%9Flu/'}>Instagram</Link>
        </div>
        </div>

      </div>

    
  )
}

export default Contact