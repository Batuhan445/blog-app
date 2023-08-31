import React from "react";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="min-h-screen">
      <title>Batuhan Karaahmetoğlu Blog | Projelerim</title>

      <div className="mt-10 text-3xl text-center">Projelerim</div>

      <div className="grid">

        <div className="mt-10 md:flex w-[70%] m-auto">

          <div className="m-auto">
            <Image
              src={"/projects/university-web.jpg"}
              style={{ borderRadius: "10px" }}
              alt={"universite-web-site"}
              width={720}
              height={720}
            />
          </div>

          <div className="ml-0 m-auto md:ml-6">
            <div className="text-center md:text-left mt-4 md:mt-0">
              <h1 className="text-xl font-bold">Üniversite Web Sitesi</h1>
              <p>
                Bu sitede HTML ve CSS kullandım. Butona tıklayarak scroll ve fotoğrafın üzerine getirdiğinizde hover özelliği ile ülkelerin
                isimleri yazıyor
              </p>
            </div>

            <div className="mx-auto md:mx-0 mt-8 w-28">
              <Link
                href={"https://calm-gumdrop-f04589.netlify.app/"}
                target="_blank"
                className="border p-3 rounded transition text-center hover:bg-blue-500 hover:border-blue-500"
              >
                Ziyaret Edin
              </Link>
            </div>
          </div>

        </div>

        <div className="mt-10 flex-col-reverse flex md:flex-row w-[70%] m-auto">
          <div className="mt-6 md:m-auto">
            <div className="m-auto text-center md:text-left md:mr-6">
              <h1 className="font-bold text-xl">Prime Properties</h1>
              <p>
                Bu projede ilk kez React kullandım ve Tailwind CSSte içeriyor. Sadece input bölümünde Javascript
                kullanılmıştır.
              </p>
            </div>

            <div className="mx-auto md:mx-0 mt-8 w-28">
              <Link
                href={"https://mellifluous-profiterole-ba5e3a.netlify.app/"}
                target="_blank"
                className="border p-3 rounded transition text-center hover:bg-blue-500 hover:border-blue-500"
              >
                Ziyaret Edin
              </Link>
            </div>
          </div>

          <div className="m-auto">
            <Image
              src={"/projects/prime-properties.jpg"}
              style={{ borderRadius: "10px" }}
              alt={"universite-web-site"}
              width={720}
              height={720}
            />
          </div>
        </div>

        <div className="md:flex mt-10 w-[70%] py-5 m-auto">
          
          <div className="m-auto">
            <Image
              src={"/projects/epic-mix.jpg"}
              style={{ borderRadius: "10px" }}
              alt={"universite-web-site"}
              width={720}
              height={720}
            />
          </div>

          <div className="mt-6 md:m-auto">

              <div className="ml-0 m-auto md:ml-6">

            <div className="text-center md:text-left mt-4 md:mt-0">
                <h1 className="font-bold text-xl">Epic Mix</h1>
                <p>
                  Javascript olarak kullandığım ilk projemdir. Show Me! butonuna tıklandığında
                  şarkıların listesi gözükmektedir. Şarkı ekleme konusunda sadece YouTube linki şartı koşulmuştur.
                  YouTube dışında bir link olursa uyarı vermektedir. Silmek isterseniz uyarı çıkıyor ve 
                  sildikten sonra listenin sayısı güncelleniyor.
                </p>
            </div>
              

              <div className="mx-auto md:mx-0 mt-8 w-28">
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


        </div>

      </div>

    </div>
  );
};

export default Projects;
