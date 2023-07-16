import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import pic1 from "../../../public/interiors/Mini Main.png";
import Price from "../components/Price";
import BookButtonAlt from "../components/subcomponents/BookButtonAlt";
import Booking from "../components/Booking";
import Gallery from "../components/subcomponents/Gallery";
import gal1 from "../../../public/interiors/gallery/Gallery1.png";
import gal2 from "../../../public/interiors/gallery/Gallery2.png";
import gal4 from "../../../public/interiors/gallery/Gallery4.png";
import gal5 from "../../../public/interiors/gallery/Gallery5.png";
import gal6 from "../../../public/interiors/gallery/Gallery6.png";
import gal7 from "../../../public/interiors/gallery/Gallery7.png";

const Mini = () => {
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
        <title>Mini Interior Service in Tracy, CA</title>
        <meta
          name="description"
          content="The official Mini Interior Service page for all the information you need about services and packages offered in Tracy, CA."
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
        <Booking setSocials={setSocials} socials={socials} />
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
              className="z-[100] object-contain aspect-auto"
            />
          </div>
          <div className="text-gray-900 w-full pl-4">
            <h1 className="font-bold md:text-4xl sm:text-2xl text-lg lg:text-6xl">
              Mini Interior Service
            </h1>
            <p className="font-bold mt-10 text-sm lg:text-lg">
              Haven't Cleaned Your Interior In A Few Weeks? No Worries.
              <br />
              <span className="font-normal">
                The Mini-Interior Detail is our entry level service that’ll get
                your interior in a much better condition without spending too
                much time or money.
              </span>
            </p>
            <div className="my-10 text-sm lg:text-lg">
              <span className="font-bold mb-4 block">Package Includes:</span>
              <ul className="list-disc pl-5 lg:pl-10 flex flex-col gap-2">
                <li>
                  Thorough vacuuming of the entire interior (carpet, mats,
                  seats, etc.)
                </li>
                <li>Wipe down of light dust and debris on all surfaces</li>
                <li>UV protection on plastic surfaces</li>
                <li>Streak-free interior glass and windows</li>
              </ul>
              <span className="font-bold block mt-10">
                There’s no deep cleaning with this service. If your vehicle has
                a heavy amount of pet hair, stains, and spills you’d like
                addressed, then our Full Interior Cleaning service would be a
                better option for you.
              </span>
              <span className="block mt-10">
                This is more of a maintenance upkeep service. So if it’s been
                several weeks or so since you’ve last cleaned your interior and
                the condition has gotten a little out of hand, then we can get
                it back to its former glory.
              </span>
            </div>
            <div className="my-10 text-sm lg:text-lg flex flex-col xl:flex-row xl:block gap-10">
              <div className="xl:mt-10">
                <span className="font-bold block mb-4">General Pricing:</span>
                <div className="flex flex-wrap">
                  <Price size="Small" price="$40" number={1} />
                  <Price size="Medium" price="$60" number={2} />
                  <Price size="Large" price="$80" number={3} />
                </div>
              </div>
              <div className="flex my-10 justify-center">
                <BookButtonAlt setSocials={setSocials} />
              </div>
            </div>
          </div>
        </div>
        <Gallery menu={menu} images={[gal1, gal2, gal4, gal5, gal6, gal7]} />
        <FAQ setSocials={setSocials} menu={menu} />
        <Footer />
      </main>
    </>
  );
};

export default Mini;

function FAQ({ menu, setSocials }) {
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
            Can you clean something specific like a seat or stain?
          </span>
          <FaAngleDown className="absolute right-5 top-4 angle1 duration-300" />
        </AccordionSummary>
        <AccordionDetails>
          Even though this is a maintenance type cleaning, we’re still happy and
          able to address any specific concerns you may have at an additional
          cost. Just ask what you need!
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
            Will this service remove odors from the interior?
          </span>
          <FaAngleDown className="absolute right-5 top-4 angle2 duration-300" />
        </AccordionSummary>
        <AccordionDetails>
          Unfortunately when it comes to removing an odor, it’s a much different
          process than just cleaning a stain off a seat. This could possibly
          require a more extensive cleaning process.
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
          <span className="font-bold pr-8">Do you come to me?</span>
          <FaAngleDown className="absolute right-5 top-4 angle3 duration-300" />
        </AccordionSummary>
        <AccordionDetails>
          Yes, we’re a 100% mobile unit. All we need is access to your vehicle
          and a power outlet within 50 ft of the vehicle to work.
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
          <span className="font-bold pr-8">Have more questions?</span>
          <FaAngleDown className="absolute right-5 top-4 angle4 duration-300" />
        </AccordionSummary>
        <AccordionDetails>
          Feel free to go to our{" "}
          <a
            onClick={() => setSocials(true)}
            className="text-blue-800 underline cursor-pointer active:text-purple-800 visited:text-purple-800"
          >
            contact page
          </a>{" "}
          and message for more information about different services.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
