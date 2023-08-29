import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Projects = () => {
  return (
    <div className='min-h-screen'>
        <div className='mt-10 text-3xl text-center'>Projelerim</div>

        <div className='mt-10 grid md:flex w-[80%] m-auto border'>
            <Image src={"/projects/university-web.jpg"} 
            style={{borderRadius:"10px"}} 
            alt={'universite-web-site'} 
            width={720} 
            height={720}/>

            <div className='m-auto ml-6'>
            <h1 className='text-xl font-bold'>Üniversite Web Sitesi</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, maxime nulla ab, veniam minus debitis in optio, aperiam sed quod id quaerat ratione hic consectetur.</p>

          <div className='mx-auto md:mx-0 mt-10 w-28'>
            <Link 
            href={'https://calm-gumdrop-f04589.netlify.app/'} 
            target='_blank'
            className='border p-3 rounded transition text-center hover:bg-blue-500 hover:border-blue-500'
            >
              Ziyaret Edin
            </Link>
          </div>

            </div>
        </div>

        <div className='mt-10 flex w-[70%] m-auto'>
          <div className='m-auto'>
          <h1 className='font-bold text-xl'>Prime Properties</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae suscipit, sit cumque enim sapiente illum asperiores aperiam commodi repellat libero!</p>
          </div>
            <Image src={"/projects/prime-properties.jpg"} 
            style={{borderRadius:"10px"}} 
            alt={'universite-web-site'} 
            width={720} 
            height={720}/>
        </div>

        <div className='mt-10 flex w-[70%] m-auto'>
            <Image src={"/projects/epic-mix.jpg"} 
            style={{borderRadius:"10px"}} 
            alt={'universite-web-site'} 
            width={720} 
            height={720}/>
          <h1 className=''>Epic Mix</h1>
        </div>

    </div>
  )
}

export default Projects