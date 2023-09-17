import React from 'react'
import Image from 'next/image'

const HomePage = () => {
  return (
    <div className='min-h-screen bg-white text-black'>
      <div className='text-center text-4xl my-10'>
      Blog Sayfama Hoşgeldiniz
      </div>

      <div className='m-auto w-auto'>
        <Image 
        src={"/portfoilo.jpg"} 
        style={{ borderRadius: "10px", objectFit: "contain"}} 
        alt={"portfoilo"} 
        width={720}
        height={720}
        className="w-[50%] h-48 lg:h-96 m-auto"
        />
      </div>

      <div className='mt-8 w-[80%] text-center m-auto'>
        <h1 className='font-bold text-2xl'>Hakkımda</h1>
        <p>Frontend Öğreniyorum. 2021 yılında Clarusway üzerinden frontend kursu aldım.
          Hobi olarak ise oyun oynarım
        </p>

        <h1 className='font-bold text-2xl mt-8'>Kullandığım Teklonojiler</h1>
        <ol className='mt-2'>
          <li>- HTML</li>
          <li>- CSS</li>
          <li>- JavaScript</li>
          <li>- React</li>
          <li>- Next.JS</li>
          <li>- Tailwind CSS</li>
          <li>- Typescript</li>
        </ol>

    <div className='mb-10'>
        <h1 className='font-bold text-2xl mt-8'>Sertifikalarım</h1>
        <p>Lise : (2014 - 2018)</p>
    </div>
      </div>


    </div>
  )
}

export default HomePage