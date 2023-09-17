"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import { Merriweather_Sans } from "next/font/google";
import { usePathname } from "next/navigation"

const merriweatherSans = Merriweather_Sans({ subsets: ["latin"] });

const Navbar = () => {

  const pathname = usePathname()
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const currentPathname = pathname;
    const activeLink = Links.find((link) => link.to === currentPathname);
    setActiveLink(activeLink ? activeLink.name : "");
  }, [pathname]);

  // Navbar Links

  let Links = [
    { name: "Ana Sayfa", to: "/", Image: "/navbar-icons/home.png" },
    {
      name: "Projelerim",
      to: "/my-projects",
      Image: "/navbar-icons/projects.png",
    },
    { name: "İletişim", to: "/contact", Image: "/navbar-icons/contact.png" },
  ];

  // Mobile Navbar

  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeNavbar = () => {
    setNavbarOpen(false);
  };

  // Page

  return (
    <div className="flex justify-between items-center py-6 px-10 shadow-lg bg-[#091f2c] text-white">

      <div className={`${merriweatherSans.className} text-xl md:text-3xl`}>
        <Link href={"/"}>Batuhan Karaahmetoğlu</Link>
      </div>

      <div className="flex">

        <div className="md:hidden">
          <button onClick={toggleNavbar}>
            <Image
              src={"/hamburger-menu.png"}
              alt={"hamburger-menu"}
              width={30}
              height={20}
              style={{ marginTop: "4px" }}
            />
          </button>

        </div>

        {/* Mobile Navbar Open Background */}

        <div className="md:hidden">
          {navbarOpen && (
            <div
              className="fixed top-0 left-0 w-full h-full transform duration-1000 transition-transform bg-black opacity-50"
              onClick={closeNavbar}
            ></div>
          )}

          <div
            className={`fixed z-10 top-0 right-0 h-screen w-2/4 bg-[#091f2c] shadow-zinc-600 text-white p-6 transform duration-700 transition-transform ${
              navbarOpen ? "translate-x-0 shadow-lg" : "translate-x-full"
            }`}
          >

            <div className="flex justify-center flex-col">

              <button
                onClick={closeNavbar}
                className="ml-auto my-auto p-2 text-white text-2xl"
              >
                <FaTimes />
              </button>

              {Links.map((link) => (
                <div className="mr-auto mt-6" key={link.to}>

                  <Link href={link.to} onClick={closeNavbar}>

                    <div className="flex">

                      <div className="mr-3 flex items-center">

                        <Image
                          src={link.Image}
                          alt={link.name}
                          width={23}
                          height={20}
                        />

                      </div>

                      <div className={merriweatherSans.className}>

                        {link.name}

                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>


      {/* Desktop Navbar Links */}

        <div className="hidden md:flex md:space-x-10">

          {Links.map((link) => (
            <Link
              key={link.to}
              href={link.to}
              className={`hover:opacity-100 transition ${
                activeLink === link.name ? "opacity-100" : "opacity-50"
              }`}
              onClick={() => setActiveLink(link.name)}
            >

              <div className="flex">

                <div className="mr-2 flex items-center">
                  <Image
                    src={link.Image}
                    alt={link.name}
                    width={23}
                    height={20}
                  />
                </div>

                <div className={merriweatherSans.className}>{link.name}</div>
              </div>

            </Link>
          ))}
        </div>

      </div>

    </div>
  );
};

export default Navbar;
