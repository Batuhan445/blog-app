import React from 'react'
import Image from 'next/image'

const Projects = () => {
  return (
    <div className='min-h-screen'>
        <div className='mt-10 text-3xl text-center'>Projelerim</div>

        <div className='mt-10 flex justify-evenly w-[70%] m-auto'>
            <Image src={"/projects/university-web.jpg"} 
            style={{borderRadius:"10px"}} 
            alt={'universite-web-site'} 
            width={480} 
            height={480}/>
            <h1 className=''>Üniversite Web Sitesi</h1>
        </div>

    </div>
  )
}

export default Projects