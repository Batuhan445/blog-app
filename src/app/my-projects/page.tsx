"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CiShare1 } from 'react-icons/ci'
import ScrollToTop from "react-scroll-to-top";
import { Work_Sans } from 'next/font/google'

const workSans = Work_Sans({subsets: ["latin"]})


const Projects = () => {
  return (
    <div className={`min-h-screen ${workSans.className}`}>
      <title>Batuhan Karaahmetoğlu Blog | Projelerim</title>

      <div className="my-10 text-3xl text-center">Projelerim</div>

        <div className="grid">

          <div className="m-auto">
          
            <Image
              src={"/projects/university-web.jpg"}
              style={{ objectFit:"contain", borderRadius: "10px", boxShadow:"1px 3px 15px black" }}
              alt={"universite-web-site"}
              width={720}
              height={720}
              className="w-[90%] m-auto"
              
            />
          </div>

          <div className="m-auto">
            <div className="text-center mt-4">
              <h1 className="text-xl font-bold">Üniversite Web Sitesi</h1>
              <p className="w-[80%] m-auto">
              Bu web sitesinde HTML ve CSS kullanarak çalıştım. Sayfa üzerindeki "Enroll Now" 
              butonuna tıkladığınızda, sayfa aşağı kayarak kampüsleri görüntüler ve kampüslerin 
              üzerine geldiğinizde ülkelerin isimlerini gösteren bir hover efekti ekledik.
              </p>
            </div>

            <div className="m-auto w-36 mt-8 rounded">
              <Link
                href={"https://calm-gumdrop-f04589.netlify.app/"}
                target="_blank"
                className="flex justify-center border border-black hover:text-white items-center p-3 rounded transition text-center hover:bg-blue-500 hover:border-blue-500"
              >
                Ziyaret Edin
                <div className="ml-2">
                <CiShare1/>
                </div>
              </Link>
            </div>
          </div>

        </div>

        <div className="mt-10 grid m-auto">

          <div className="m-auto">
          
            <Image
              src={"/projects/epic-mix.jpg"}
              style={{ borderRadius: "10px", objectFit:"contain", boxShadow:"1px 3px 15px black" }}
              alt={"universite-web-site"}
              width={720}
              height={720}
              className="w-[90%] m-auto"
              
            />
          </div>

          <div className="m-auto">
            <div className="text-center mt-4">
              <h1 className="text-xl font-bold">Epic Mix</h1>
              <p className="w-[80%] m-auto">
              İlk JavaScript projesimdir. Bir düğmeye tıkladığınızda, şarkıların bir listesi görüntülenir. 
              Yalnızca YouTube bağlantıları eklemeye izin verilir, başka bir tür bağlantı eklerseniz uyarı alırsınız. 
              Şarkıları silme seçeneği sunulur ve silindiğinde liste otomatik olarak güncellenir.
              </p>
            </div>

            <div className="m-auto w-36 mt-8 rounded">
            <Link
                href={"https://willowy-belekoy-d5e574.netlify.app/"}
                target="_blank"
                className="flex justify-center border border-black hover:text-white items-center p-3 rounded transition text-center hover:bg-blue-500 hover:border-blue-500"
              >
                Ziyaret Edin
                <div className="ml-2">
                <CiShare1/>
                </div>
              </Link>
            </div>
          </div>

        </div>

        <div className="mt-16 grid m-auto">

        <div className="m-auto">
            <Image
              src={"/projects/prime-properties.jpg"}
              style={{ borderRadius: "10px", objectFit:"contain", boxShadow:"1px 3px 15px black" }}
              alt={"universite-web-site"}
              width={720}
              height={720}
              className="w-[90%] m-auto"
            />
          </div>

          <div className="m-auto">
            <div className="m-auto text-center">
              <h1 className="font-bold text-xl mt-6">Prime Properties</h1>
              <p className="w-[80%] m-auto">
              Bu projede React'i ilk defa kullandım ve içinde Tailwind CSS kullanıldı. 
              Sadece iletişim'in mesaj bölümünde JavaScript kullanıldı.
              </p>
            </div>

            <div className="mx-auto w-36 my-8 rounded">
              <Link
                href={"https://mellifluous-profiterole-ba5e3a.netlify.app/"}
                target="_blank"
                className="border border-black hover:text-white flex justify-center items-center p-3 rounded transition text-center hover:bg-blue-500 hover:border-blue-500"
              >
                Ziyaret Edin
                <div className="ml-2">
                <CiShare1/>
                </div>
              </Link>
            </div>
            
          </div>
        </div>

        <div className="mt-16 grid m-auto">

        <div className="m-auto">
            <Image
              src={"/projects/film-api.jpg"}
              style={{ borderRadius: "10px", objectFit:"contain", boxShadow:"1px 3px 15px black" }}
              alt={"film-api"}
              width={720}
              height={720}
              className="w-[90%] m-auto"
            />
          </div>

          <div className="m-auto">
            <div className="m-auto text-center">
              <h1 className="font-bold text-xl mt-6">Film Sitesi</h1>
              <p className="w-[80%] m-auto">
              Bu projede API kullanarak film verilerini çekip, 
              bu filmlerin bilgilerinin görüntülenmesini sağladım. 
              Ayrıca, karanlık mod desteği de ekledik.
              </p>
            </div>

            <div className="mx-auto w-36 my-8 rounded">
              <Link
                href={"https://frolicking-kashata-5731c1.netlify.app/"}
                target="_blank"
                className="border border-black hover:text-white flex justify-center items-center p-3 rounded transition text-center hover:bg-blue-500 hover:border-blue-500"
              >
                Ziyaret Edin
                <div className="ml-2">
                <CiShare1/>
                </div>
              </Link>
            </div>
            
          </div>
        </div>


        <ScrollToTop
        className="flex justify-center items-center transition text-black"
        style={{bottom:"50px", boxShadow:"1px 1px 15px black"}}
        smooth/>

      

    </div>
  );
};

export default Projects;
