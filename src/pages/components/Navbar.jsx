import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaBars,
  FaFacebook,
  FaGoogle,
  FaHamburger,
  FaInstagram,
  FaTiktok,
  FaTimes,
} from "react-icons/fa";
import logo from "/src/assets/fernando logo.jpg";
import logoBlack from "src/assets/zedano logo.png";
import logoWhite from "/src/assets/zedano logo black.png";
import hanh from "src/assets/zedano hanh singh.gif";

const Navbar = ({ exist, menu, setMenu, darkMode = false }) => {
  useEffect(() => {
    const nav = document.querySelector(".navbar");
    if (exist) {
      nav.classList.remove("absolute");
    }
  }, []);

  return (
    <div
      className={`absolute navbar top-0 w-screen h-[100px] ${
        darkMode ? `h-[120px]` : null
      } z-[1000000]`}
    >
      <div className="w-screen h-2 bg-black backdrop-blur absolute top-0 left-0 z-[100000000000000]"></div>
      <div
        className={`py-10 px-4 absolute top-0 z-[99999999] navbar h-[100px]`}
      >
        {/* <div className="hidden justify-start items-center space-x-16 relative max-h-min w-full">
          <a
            href="/#services"
            className="uppercase text-sm font-semibold tracking-[1px] leading-[1.27em] cursor-pointer"
          >
            Services
          </a>
          <a
            href="/#works"
            className="uppercase text-sm font-semibold tracking-[1px] leading-[1.27em]"
          >
            Works
          </a>
          <a
            href="/#testimonials"
            className="uppercase text-sm font-semibold tracking-[1px] leading-[1.27em]"
          >
            Testimonials
          </a>
          <a
            href="/#footer"
            className="uppercase text-sm font-semibold tracking-[1px] leading-[1.27em]"
          >
            Contact
          </a>
        </div> */}
        <div className={`z-[999999999999] duration-500 pl-4`}>
          {/* {!menu ? (
            <FaBars
              className="z-[999999999999] cursor-pointer text-gray-100 duration-300 scale-150 hover:scale-x-[2]"
              onClick={() => setMenu(true)}
            />
          ) : (
            <FaTimes
              className="z-[2000] cursor-pointer duration-300 text-gray-100 scale-150"
              onClick={() => setMenu(false)}
            />
          )} */}
          <div onClick={() => setMenu((menu) => !menu)}>
            <div
              className={`hamburger group cursor-pointer hover:w-[30px] duration-300 h-[17px] w-[25px] flex flex-col justify-between ${
                menu ? `!w-[25px]` : null
              }`}
            >
              <div
                style={{
                  transition:
                    "transform 0.4s cubic-bezier(0.4, 0, 0, 1) 0.025s",
                }}
                className={`top ${
                  darkMode ? `!bg-black` : null
                } bg-white h-[1px] w-full origin-center ${
                  menu
                    ? `rotate-[135deg] translate-y-[8px] group-hover:rotate-[360deg] !bg-white`
                    : null
                }`}
              ></div>
              <div
                style={{
                  transition:
                    "transform 0.4s cubic-bezier(0.4, 0, 0, 1) 0.025s",
                }}
                className={`middle ${
                  darkMode ? `!bg-black` : null
                } bg-white h-[1px] w-full origin-center ${
                  menu ? `opacity-0 !bg-white` : null
                }`}
              ></div>
              <div
                style={{
                  transition:
                    "transform 0.4s cubic-bezier(0.4, 0, 0, 1) 0.025s",
                }}
                className={`bottom ${
                  darkMode ? `!bg-black` : null
                } bg-white h-[1px] w-full origin-center ${
                  menu
                    ? `rotate-[45deg] translate-y-[-8px] group-hover:rotate-[360deg] !bg-white`
                    : null
                }`}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`flex z-[101] justify-center h-[100px] overflow-hidden duration-500 ${
          menu ? `translate-x-[25vw]` : null
        }`}
      >
        <Link
          href="/"
          className="absolute top-0 flex justify-center items-center z-[0] h-[100px] overflow-hidden"
        >
          {!darkMode ? (
            <Image
              className="translate-y-[10px] z-[0]"
              src={logoBlack}
              height={240}
              width={120}
            />
          ) : (
            <Image
              className="translate-y-[10px] z-[0]"
              src={logoWhite}
              height={240}
              width={120}
            />
          )}
        </Link>
      </div>
      <div
        className={`z-[100000] menuBar fixed px-8 top-0 left-0 h-screen duration-500 transition-all xl:w-[20vw] lg:w-[25vw] md:w-[33.333vw] sm:w-1/2 w-full overflow-hidden bg-[#0e0c0d] text-black translate-x-[-100%]  ${
          menu ? `translate-x-0` : null
        }`}
      >
        <div className="absolute right-5 bottom-2.5 z-[100000000]">
          {/* <div className="text-xl z-[100000000] font-bold right-0 bottom-0 absolute text-neutral-400">
            DANOSDETAILING
          </div> */}
        </div>
        <div className="border-b-2 border-gray-100 mr-4">
          <ul className="w-full h-full flex flex-col mt-24 mb-12">
            <li className="my-2.5 relative">
              <div
                style={{
                  transition:
                    "transform 0.4s cubic-bezier(0.4, 0, 0, 1) 0.025s",
                }}
                className="absolute left-0 top-[50%] bg-white h-[1px] w-full z-[-1]"
              />
              <div
                style={{
                  transition:
                    "transform 0.4s cubic-bezier(0.4, 0, 0, 1) 0.025s",
                }}
                className="p-1 hover:translate-x-7 z-10 bg-[#0e0c0d] text-gray-100 flex"
              >
                <a
                  onClick={() => setMenu(false)}
                  className="font-bold uppercase text-2xl tracking-wider"
                  href="/#services"
                >
                  Services
                </a>
              </div>
            </li>
            <li className="my-2.5 relative">
              <div
                style={{
                  transition:
                    "transform 0.4s cubic-bezier(0.4, 0, 0, 1) 0.025s",
                }}
                className="absolute left-0 top-[50%] bg-white h-[1px] w-full z-[-1]"
              />
              <div
                style={{
                  transition:
                    "transform 0.4s cubic-bezier(0.4, 0, 0, 1) 0.025s",
                }}
                className="p-1 hover:translate-x-7 z-0 bg-[#0e0c0d] text-gray-100 flex"
              >
                <a
                  onClick={() => setMenu(false)}
                  className="font-bold uppercase text-2xl tracking-wider"
                  href="/#works"
                >
                  Works
                </a>
              </div>
            </li>
            <li className="my-2.5 relative">
              <div
                style={{
                  transition:
                    "transform 0.4s cubic-bezier(0.4, 0, 0, 1) 0.025s",
                }}
                className="absolute left-0 top-[50%] bg-white h-[1px] w-full z-[-1]"
              />
              <div
                style={{
                  transition:
                    "transform 0.4s cubic-bezier(0.4, 0, 0, 1) 0.025s",
                }}
                className="p-1 hover:translate-x-7 bg-[#0e0c0d] text-gray-100 flex"
              >
                <a
                  onClick={() => setMenu(false)}
                  className="font-bold uppercase text-2xl tracking-wider"
                  href="/#reviews"
                >
                  Testimonials
                </a>
              </div>
            </li>
            <li className="my-2.5 relative">
              <div
                style={{
                  transition:
                    "transform 0.4s cubic-bezier(0.4, 0, 0, 1) 0.025s",
                }}
                className="absolute left-0 top-[50%] bg-white h-[1px] w-full z-[-1]"
              />
              <div
                style={{
                  transition:
                    "transform 0.4s cubic-bezier(0.4, 0, 0, 1) 0.025s",
                }}
                className="p-1 hover:translate-x-7 z-10 bg-[#0e0c0d] text-gray-100 flex"
              >
                <a
                  onClick={() => setMenu(false)}
                  className="font-bold uppercase text-2xl tracking-wider"
                  href="/#contact"
                >
                  Contact
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className="text-neutral-400 absolute bottom-4 flex w-1/4 justify-between border-t-2 pt-4">
          <a
            target="_blank"
            href="https://www.instagram.com/danosmobiledetailing/"
          >
            <FaInstagram className="cursor-pointer hover:text-neutral-100 duration-300" />
          </a>
          <a target="_blank" href="https://www.facebook.com/nando.zepeda.31">
            <FaFacebook className="cursor-pointer hover:text-neutral-100 duration-300" />
          </a>
          <a
            target="_blank"
            href="https://www.tiktok.com/@danosdetailing?is_from_webapp=1&sender_device=pc"
          >
            <FaTiktok className="cursor-pointer hover:text-neutral-100 duration-300" />
          </a>
          <a
            target="_blank"
            href="https://www.google.com/search?q=danos%20detailing&rlz=1C1CHBF_enUS994US994&oq=danosdetailing+&aqs=chrome..69i57j0i13i30j0i8i13i30j69i60l2.2254j0j7&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:14&tbm=lcl&sxsrf=AJOqlzUkoUDaXE9h15XL30_nyoDqSd0ypg:1679177443677&rflfq=1&num=10&rldimm=9022223714700630377&lqi=Cg9kYW5vcyBkZXRhaWxpbmdI8erattO5gIAIWhkQABABGAAYASIPZGFub3MgZGV0YWlsaW5nkgEVY2FyX2RldGFpbGluZ19zZXJ2aWNlqgEiEAEyHhABIhoC_p_EphrJHbU6eDeRKe6jsgT3leTNFm2QouABAA&ved=2ahUKEwiu_624v-b9AhXdIUQIHaKsAO8QvS56BAgOEAE&sa=X&rlst=f#rlfi=hd:;si:9022223714700630377,l,Cg9kYW5vcyBkZXRhaWxpbmdI8erattO5gIAIWhkQABABGAAYASIPZGFub3MgZGV0YWlsaW5nkgEVY2FyX2RldGFpbGluZ19zZXJ2aWNlqgEiEAEyHhABIhoC_p_EphrJHbU6eDeRKe6jsgT3leTNFm2QouABAA;mv:[[37.721529077319026,-121.47605296736208],[37.72116912268096,-121.47650803263795]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:14"
          >
            <FaGoogle className="cursor-pointer hover:text-neutral-100 duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
