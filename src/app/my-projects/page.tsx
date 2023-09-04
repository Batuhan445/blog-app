import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CiShare1 } from 'react-icons/ci'

const Projects = () => {
  return (
    <div className="min-h-screen">
      <title>Batuhan Karaahmetoğlu Blog | Projelerim</title>

      <div className="my-10 text-3xl text-center">Projelerim</div>

        <div className="grid">

          <div className="m-auto">
          
            <Image
              src={"/projects/university-web.jpg"}
              style={{ objectFit:"contain", borderRadius: "10px" }}
              alt={"universite-web-site"}
              width={720}
              height={720}
              className="w-[90%] m-auto"
              
            />
          </div>

          <div className="m-auto">
            <div className="text-center mt-4">
              <h1 className="text-xl font-bold">Üniversite Web Sitesi</h1>
              <p className="w-[80%] lg:w-full m-auto">
                Bu sitede HTML ve CSS kullandım. Butona tıklayarak scroll ve fotoğrafın üzerine getirdiğinizde hover özelliği ile ülkelerin
                isimleri yazıyor.
              </p>
            </div>

            <div className="m-auto w-36 mt-8  rounded ">
              <Link
                href={"https://calm-gumdrop-f04589.netlify.app/"}
                target="_blank"
                className="flex justify-center border items-center p-3 rounded transition text-center hover:bg-blue-500 hover:border-blue-500"
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
              style={{ borderRadius: "10px", objectFit:"contain" }}
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
              Javascript olarak kullandığım ilk projemdir. Show Me! butonuna tıklandığında
                  şarkıların listesi gözükmektedir. Şarkı ekleme konusunda sadece YouTube linki şartı koşulmuştur.
                  YouTube dışında bir link olursa uyarı vermektedir. Silmek isterseniz uyarı çıkıyor ve 
                  sildikten sonra listenin sayısı güncelleniyor.
              </p>
            </div>

            <div className="m-auto w-36 mt-8 rounded">
            <Link
                href={"https://willowy-belekoy-d5e574.netlify.app/"}
                target="_blank"
                className="flex justify-center border items-center p-3 rounded transition text-center hover:bg-blue-500 hover:border-blue-500"
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
              style={{ borderRadius: "10px", objectFit:"contain" }}
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
                Bu projede ilk kez React kullandım ve Tailwind CSSte içeriyor. Sadece input bölümünde Javascript
                kullanılmıştır.
              </p>
            </div>

            <div className="mx-auto w-36 my-8 rounded">
              <Link
                href={"https://mellifluous-profiterole-ba5e3a.netlify.app/"}
                target="_blank"
                className="border flex justify-center items-center p-3 rounded transition text-center hover:bg-blue-500 hover:border-blue-500"
              >
                Ziyaret Edin
                <div className="ml-2">
                <CiShare1/>
                </div>
              </Link>
            </div>
            
          </div>

          
        </div>

        {/* <div className="mt-10 lg:flex m-auto">
          
          <div className="m-auto relative w-[90%] h-48">
            <Image
              src={"/projects/epic-mix.jpg"}
              style={{ borderRadius: "10px", objectFit:"contain" }}
              alt={"universite-web-site"}
              fill
            />
          </div>

          <div className="mt-6 lg:m-auto">

              <div className="ml-0 m-auto lg:ml-6">

            <div className="text-center lg:text-left mt-4 lg:mt-0">
                <h1 className="font-bold text-xl">Epic Mix</h1>
                <p className="w-[80%] m-auto lg:w-auto">
                  Javascript olarak kullandığım ilk projemdir. Show Me! butonuna tıklandığında
                  şarkıların listesi gözükmektedir. Şarkı ekleme konusunda sadece YouTube linki şartı koşulmuştur.
                  YouTube dışında bir link olursa uyarı vermektedir. Silmek isterseniz uyarı çıkıyor ve 
                  sildikten sonra listenin sayısı güncelleniyor.
                </p>
            </div>
              

              <div className="mx-auto lg:mx-0 mt-8 w-28">
                <Link
                  href={"https://willowy-belekoy-d5e574.netlify.app/"}
                  target="_blank"
                  className="border p-3 rounded transition text-center hover:bg-blue-500 hover:border-blue-500"
                >
                  Ziyaret Edin
                </Link>
              </div>

            </div>
          </div>


        </div> */}

      

    </div>
  );
};

export default Projects;
