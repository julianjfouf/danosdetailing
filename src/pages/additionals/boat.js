import Head from "next/head";
import React, { useEffect, useState } from "react";
import pic1 from "../../../public/additionals/boat/eGallery17.png";
import Navbar from "../components/Navbar";
import Booking from "../components/Booking";
import Image from "next/image";
import BookButtonAlt from "../components/subcomponents/BookButtonAlt";
import Gallery from "../components/subcomponents/Gallery";
import Footer from "../components/Footer";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { FaAngleDown } from "react-icons/fa";
import gal17 from "../../../public/additionals/boat/eGallery18.png";
import gal19 from "../../../public/additionals/boat/eGallery19.png";

const Boat = () => {
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
        <title>Boat Detailing Service in Tracy, CA</title>
        <meta
          name="description"
          content="The official Boat Detailing Service page for all the information you need about services and packages offered in Tracy, CA."
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
              className="z-[100] h-auto object-contain aspect-auto"
            />
          </div>
          <div className="text-gray-900 w-full pl-4">
            <h1 className="font-bold md:text-4xl sm:text-2xl text-lg lg:text-6xl">
              Boat Detailing
            </h1>
            <div className="my-10 text-sm lg:text-lg">
              <span className="font-bold text-xl">
                Have your Boat looking New and Ready for the Water
              </span>
              <br />
              <br />
              <span className="font-bold mb-4 block">
                <span className="italic">Full Interior Detailing</span> Process:
              </span>
              <ul className="list-disc pl-5 lg:pl-10 flex flex-col gap-2">
                <li>Deep seat cleaning</li>
                <li>Dashboard detailing</li>
                <li>Panel, carpet, and windows </li>
                <li>All crevices and small areas of the boat</li>
              </ul>
              <span className="mt-10 font-bold block mb-4">
                <span className="italic">Full Exterior Detailing</span> Process:
              </span>
              <ul className="list-disc pl-5 lg:pl-10 flex flex-col gap-2">
                <li>High-quality shampooing</li>
                <li>
                  Clay bar treatment to remove contaminants from surface of
                  paint
                </li>
                <li>Chrome/Trailer Polishing</li>
                <li>Rim, Tire detailing with dressing for shine</li>
                <li>Ceramic Wax Coating Treament & Paint Polishing</li>
              </ul>
            </div>
            <div className="my-10 text-sm lg:text-lg flex flex-col xl:flex-row xl:block gap-10">
              <div className="xl:mt-10">
                <span className="font-bold block mb-4">General Pricing:</span>
                <span className="block ml-4">
                  We do not offer general quotes, please call us for a free
                  quote
                </span>
              </div>
              <div className="my-10 flex justify-center">
                <BookButtonAlt setSocials={setSocials} />
              </div>
            </div>
          </div>
        </div>
        <Gallery menu={menu} images={[gal17, pic1, gal19]} />
        <FAQ menu={menu} />
        <Footer />
      </main>
    </>
  );
};

export default Boat;

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
