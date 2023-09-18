import React from 'react'
import Link from 'next/link'
import { Work_Sans } from 'next/font/google'

const workSans = Work_Sans({subsets: ["latin"]})

const HomePage = () => {
  return (
    <div className={`min-h-screen bg-white text-black ${workSans.className}`}>

      <div 
      className={"text-center text-5xl my-10"}
      >
      Blog Sayfama Hoşgeldiniz
      </div>

      
      <div className='m-auto w-[25rem] md:w-[30rem]'>
        <img 
        src="/software.jpg" 
        style={{ borderRadius: "20px", objectFit: "contain", width: "100%", height: "100%" }} 
        alt="software" 
        className="w-[50%] h-48 lg:h-96 m-auto"
        />
      </div>
      

      <div className='mt-8 w-[80%] text-center m-auto'>
        <h1 className='font-bold text-2xl mb-3'>Hakkımda</h1>
        <p>Ben Batuhan Karaahmetoğlu. Frontend Developer olma yolunda gidiyorum.</p>
        <p className='my-4 md:my-0'>Amerika merkezli Clarusway şirketinden 2020 - 2021 yılında kursu alarak olarak süreci ilerlettim.</p>
        <p>Şu anda ise Frontend üzerinde projeler yaparak kendimi ilerlettiriyorum</p>

        <h1 className='font-bold text-2xl mt-8'>Kullandığım Teklonojiler</h1>
        <ol className='mt-2 w-32 text-left m-auto'>
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
      <div className='grid items-center text-left w-28 m-auto mt-3'>
        <Link href={"https://c11n.clarusway.com/en/verify/73665382210162"}>- HTML & CSS</Link>
        <Link href={"https://c11n.clarusway.com/en/verify/99307460379857"}>- JavaScript</Link>
        <Link href={"https://c11n.clarusway.com/en/verify/90672329477884"}>- React</Link>
        <Link href={"https://c11n.clarusway.com/en/verify/76802605708716"}>- Backend</Link>
        <Link href={"https://c11n.clarusway.com/en/verify/41024071505791"}>- FullStack</Link>
      </div>

    </div>
      </div>


    </div>
  )
}

export default HomePage