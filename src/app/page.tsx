import React from 'react'
import Image from 'next/image'

const HomePage = () => {
  return (
    <div className='min-h-screen'>
      <div className='text-center text-4xl my-10'>
      Batuhan Karaahmetoğlu Blog Sayfasına Hoşgeldiniz
      </div>

      <div className='mt-8'>
        <Image 
        src={"/portfoilo.jpg"} 
        alt={"portfoilo"} 
        style={{objectFit:"contain", borderRadius:"10px"}} 
        width={720}
        height={720}
        className="w-[90%] h-48 lg:h-96 m-auto "
        ></Image>
      </div>

      <div className='mt-8 w-[80%] m-auto'>
        <h1 className='font-bold text-2xl'>Ben Kimim?</h1>
        <p>Frontend Öğreniyorum. 2021 yılında Clarusway üzerinden frontend kursu aldım.
          Hobi olarak ise oyun oynarım
        </p>

        <h1 className='font-bold text-2xl mt-8'>Öğrendiğim Yazılım Kodları</h1>
        <ol className='mt-2'>
          <li>- HTML</li>
          <li>- CSS</li>
          <li>- JavaScript</li>
          <li>- React</li>
          <li>- Next.JS</li>
          <li>- Tailwind CSS</li>
          <li>- Typescript</li>
        </ol>

        <h1 className='font-bold text-2xl mt-8'>Eğitim Hayatım</h1>
        <p>Lise : (2014 - 2018)</p>
      </div>


    </div>
  )
}

export default HomePage