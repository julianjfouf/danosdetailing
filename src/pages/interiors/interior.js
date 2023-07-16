import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import pic1 from "../../../public/interiors/Full Interior Main.png";
import Price from "../components/Price";
import Booking from "../components/Booking";
import BookButtonAlt from "../components/subcomponents/BookButtonAlt";
import Gallery from "../components/subcomponents/Gallery";
import gal9 from "../../../public/interiors/gallery/Gallery9.png";
import gal10 from "../../../public/interiors/gallery/Gallery10.png";
import gal11 from "../../../public/interiors/gallery/Gallery11.png";
import gal12 from "../../../public/interiors/gallery/Gallery12.png";
import gal13 from "../../../public/interiors/gallery/Gallery13.png";
import gal14 from "../../../public/interiors/gallery/Gallery14.png";
import gal15 from "../../../public/interiors/gallery/Gallery15.png";
import gal16 from "../../../public/interiors/gallery/Gallery16.png";

const Interior = () => {
  const [menu, setMenu] = useState(false);

  const [socials, setSocials] = useState(false);
  useEffect(() => {
    const page = document.querySelectorAll(".everything");
    const men = document.querySelector(".menuBars");

    if (socials) {
      men.classList.add("!rounded-none");

      setTimeout(() => {
        page.forEach((pag) => pag.classList.remove("opacity-0"));
        page.forEach((pag) => pag.classList.remove("translate-y-12"));
      }, 750);
    } else {
      page.forEach((pag) => pag.classList.add("opacity-0"));
      page.forEach((pag) => pag.classList.add("translate-y-12"));

      men.classList.remove("!rounded-none");
    }
  }, [socials]);
  return (
    <>
      <Head>
        <title>Full Interior Service in Tracy, CA</title>
        <meta
          name="description"
          content="The official Full Interior Service page for all the information you need about services and packages offered in Tracy, CA."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          media="(prefers-color-scheme: light)"
          rel="icon"
          href="/zedano logo.png"
        />
        <link
          media="(prefers-color-scheme: dark)"
          rel="icon"
          href="/zedano logo black.png"
        />
      </Head>
      <main
        className={`w-screen overflow-x-hidden relative ${
          menu ? `h-screen overflow-y-hidden` : null
        }`}
      >
        <Navbar
          darkMode={true}
          menu={menu}
          setMenu={setMenu}
          exist={true}
          className="z-0"
        />
        <Booking socials={socials} setSocials={setSocials} />
        <div
          className={`z-[100] px-12 pt-6 flex xl:flex-row flex-col-reverse duration-500 ${
            menu ? `translate-x-[25vw]` : null
          }`}
        >
          <div className="z-[100] w-full pr-4">
            <Image
            alt="picture"
              src={pic1}
              width={1024}
              height={1024}
              className="z-[100] h-auto object-contain aspect-auto brightness-75"
            />
          </div>
          <div className="text-gray-900 w-full pl-4">
            <h1 className="font-bold md:text-4xl sm:text-2xl text-lg lg:text-6xl">
              Full Interior Service
            </h1>
            <div className="my-10 text-sm lg:text-lg">
              <span className="font-bold mb-4 block">Package Includes:</span>
              <ul className="list-disc pl-5 lg:pl-10 flex flex-col gap-2">
                <li>Thorough Carpet Vacuum</li>
                <li>
                  All Door Panels, Dash & Console Properyly Deep Cleaned and
                  Scrubbed Down
                </li>
                <li>All Windows and Mirrors Streak Free</li>
                <li>
                  Full Steam Cleaning Treatment on Interior Cup Holders, A/C
                  Vents & Crevices
                </li>
                <li>Any Floor Mats Removed and Deep Cleaned</li>
                <li>Seats, Carpet, and Floor Mats Shampood & Conditioned</li>
              </ul>
            </div>
            <div className="my-10 text-sm lg:text-lg flex flex-col xl:flex-row xl:block gap-10">
              <div>
                <span className="font-bold block mb-4">
                  Additional Options:
                </span>
                <ul className="list-disc pl-5 lg:pl-10 flex flex-col gap-2">
                  <li>Pet Hair Removal (+$20)</li>
                  <li>Leather Seat Conditioning (+$20)</li>
                </ul>
              </div>
              <div className="xl:mt-10">
                <span className="font-bold block mb-4">General Pricing:</span>
                <div className="flex flex-wrap">
                  <Price size="Small (sedan)" price="$140" number={1} />
                  <Price size="Medium (small SUV)" price="$160" number={2} />
                  <Price
                    size="Large (Large SUV/Truck)"
                    price="$180"
                    number={3}
                  />
                </div>
              </div>
              <div className="my-10 flex justify-center">
                <BookButtonAlt setSocials={setSocials} />
              </div>
            </div>
          </div>
        </div>
        <Gallery
          menu={menu}
          images={[gal9, gal10, gal11, gal12, gal13, gal14, gal15, gal16]}
        />
        <FAQ menu={menu} />
        <Footer />
      </main>
    </>
  );
};

export default Interior;

function FAQ({ menu }) {
  return (
    <div
      className={`lg:container lg:mx-auto p-4 lg:p-24 duration-500 ${
        menu ? `translate-x-[25vw]` : null
      }`}
    >
      <h1 className="lg:text-3xl font-bold mb-10">
        Frequently Asked Questions
      </h1>
      <Accordion
        onClick={() => {
          const angle = document.querySelector(".angle1");
          if (angle.classList.contains("rotate-180")) {
            angle.classList.remove("rotate-180");
          } else {
            angle.classList.add("rotate-180");
          }
        }}
      >
        <AccordionSummary className="relativev">
          <span className="font-bold pr-8">
            How long does this service take?
          </span>
          <FaAngleDown className="absolute right-5 top-4 angle1 duration-300" />
        </AccordionSummary>
        <AccordionDetails>
          It all comes down to the condition of the vehicle. Generally speaking,
          it can take between 2 to 5 hours to complete. We’ve worked on coupes
          that have taken 4 hours due to the condition being bad. On the other
          hand, we’ve completed an SUV in 2.5 hours since it was well-kept.{" "}
        </AccordionDetails>
      </Accordion>
      <Accordion
        onClick={() => {
          const angle = document.querySelector(".angle2");
          if (angle.classList.contains("rotate-180")) {
            angle.classList.remove("rotate-180");
          } else {
            angle.classList.add("rotate-180");
          }
        }}
      >
        <AccordionSummary className="relativev">
          <span className="font-bold pr-8">
            Will I smell chemicals in my car once you’re done?
          </span>
          <FaAngleDown className="absolute right-5 top-4 angle2 duration-300" />
        </AccordionSummary>
        <AccordionDetails>
          Absolutely not! That would be terrible. We do not use harsh chemicals
          on your interior. By the time we’re done, you’ll have a clean-dry car.{" "}
        </AccordionDetails>
      </Accordion>
      <Accordion
        onClick={() => {
          const angle = document.querySelector(".angle3");
          if (angle.classList.contains("rotate-180")) {
            angle.classList.remove("rotate-180");
          } else {
            angle.classList.add("rotate-180");
          }
        }}
      >
        <AccordionSummary className="relativev">
          <span className="font-bold pr-8">Can you remove every stain?</span>
          <FaAngleDown className="absolute right-5 top-4 angle3 duration-300" />
        </AccordionSummary>
        <AccordionDetails>
          Due to the nature of stains and the material it’s on, some stains will
          come off better than others. We have extensive knowledge and
          experience (combined with a bunch of tools and products) to handle
          most situations. But even with all that, some stains won’t come out
          all the way.
        </AccordionDetails>
      </Accordion>
      <Accordion
        onClick={() => {
          const angle = document.querySelector(".angle4");
          if (angle.classList.contains("rotate-180")) {
            angle.classList.remove("rotate-180");
          } else {
            angle.classList.add("rotate-180");
          }
        }}
      >
        <AccordionSummary className="relativev">
          <span className="font-bold pr-8">Do you come to me? </span>
          <FaAngleDown className="absolute right-5 top-4 angle4 duration-300" />
        </AccordionSummary>
        <AccordionDetails>
          Yes, we travel all across Tracy, Mountain House, Lathrop, and
          surrounding areas! Drop off services are available in Tracy. Whatever
          is most convenient for you.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
