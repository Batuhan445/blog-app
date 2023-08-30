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
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto,
                maxime nulla ab, veniam minus debitis in optio, aperiam sed quod
                id quaerat ratione hic consectetur.
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
          <div className="m-auto text-center md:text-left md:mr-6">
            <h1 className="font-bold text-xl">Prime Properties</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae suscipit, sit cumque enim sapiente illum asperiores
              aperiam commodi repellat libero!
            </p>
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

        <div className="md:flex mt-10 w-[70%] m-auto">

          <div className="m-auto">

          <Image
            src={"/projects/epic-mix.jpg"}
            style={{ borderRadius: "10px" }}
            alt={"universite-web-site"}
            width={720}
            height={720}
          />
          </div>
          <div className="text-center md:text-left mb-auto mt-4 md:mt-0">
          <h1 className="text-center">Epic Mix</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut laborum eveniet ipsum doloremque consequuntur molestiae ea debitis ratione animi deserunt!</p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Projects;
