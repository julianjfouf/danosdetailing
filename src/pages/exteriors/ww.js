import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Footer from "../components/Footer";
import { FaAngleDown } from "react-icons/fa";
import pic2 from "../../../public/exteriors/WashWax.png";
import Price from "../components/Price";
import Booking from "../components/Booking";
import BookButtonAlt from "../components/subcomponents/BookButtonAlt";
import Gallery from "../components/subcomponents/Gallery";
import gal9 from "../../../public/exteriors/gallery/eGallery9.png";
import gal10 from "../../../public/exteriors/gallery/eGallery10.png";
import gal11 from "../../../public/exteriors/gallery/eGallery11.png";
import gal12 from "../../../public/exteriors/gallery/eGallery12.png";
import gal13 from "../../../public/exteriors/gallery/eGallery13.png";
import gal14 from "../../../public/exteriors/gallery/eGallery14.png";
import gal15 from "../../../public/exteriors/gallery/eGallery15.png";
import gal16 from "../../../public/exteriors/gallery/eGallery16.png";
import Link from "next/link";

const Ww = () => {
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
        <title>Wash & Wax Service in Tracy, CA</title>
        <meta
          name="description"
          content="The official Wash & Wax Service page for all the information you need about services and packages offered in Tracy, CA."
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
        className={`w-screen overflow-x-hidden ${
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
          className={`z-[100] px-12 py-6 flex xl:flex-row flex-col-reverse duration-500 ${
            menu ? `translate-x-[25vw]` : null
          }`}
        >
          <div className="z-[100] w-full pr-4">
            <Image
              alt="picture"
              src={gal10}
              width={1024}
              height={1024}
              className="z-[100] object-contain aspect-auto"
            />
          </div>
          <div className="text-gray-900 w-full pl-4">
            <h1 className="font-bold md:text-4xl sm:text-2xl text-lg lg:text-6xl">
              Wash & Wax Service
            </h1>
            <div className="my-10 text-sm lg:text-lg">
              <b>Package Includes:</b>
              <ul className="list-disc pl-5 lg:pl-10 flex flex-col gap-2">
                <li>
                  Clean all wheels, tires, and fenders, reaching all hard to get
                  places
                </li>
                <li>
                  Thorough hand wash of vehicle, cleaning door jambs & removing
                  bugs off front end
                </li>
                <li>
                  Clay Bar & Iron Decontamination to remove stuck dirt and
                  debris, making paint feel smooth
                </li>
                <li>
                  Add a layer of wax to all painted surfaces for added shine and
                  protection
                </li>
                <li>Dress all tires and vinyl to make them shine</li>
                <li>Clean all windows and glass to have them looking clear</li>
              </ul>
            </div>
            <div className="my-10 text-sm lg:text-lg flex flex-col xl:flex-row xl:block gap-10">
              <div className="xl:mt-10">
                <b className="block mb-4">General Pricing:</b>
                <div className="flex flex-wrap">
                  <Price size="Small" price="$100" number={1} />
                  <Price size="Medium" price="$120" number={2} />
                  <Price size="Large" price="$140" number={3} />
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
        {/* Put an FAQ Section that is specific to each service and have them answered on the bottom */}
        <Footer />
      </main>
    </>
  );
};

export default Ww;

function FAQ({ menu }) {
  return (
    <div
      className={`p-4 lg:container lg:mx-auto lg:p-24 duration-500 ${
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
          <span className="font-bold pr-8">How long will the wax last?</span>
          <FaAngleDown className="absolute right-5 top-4 angle1 duration-300" />
        </AccordionSummary>
        <AccordionDetails>
          It all depends how you store your car. If it’s garaged at work and at
          home 80% of the time, then it can last between four to six months. If
          you have your car sitting out in the sun, cold, and rain 100% of the
          time, then maybe you can get three months out of it. <br />
          <br />
          Also, if you wash your car with dish soap, then you’ll start stripping
          the protective layer of wax off your paint.
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
            Does this remove scratches from my paint?
          </span>
          <FaAngleDown className="absolute right-5 top-4 angle2 duration-300" />
        </AccordionSummary>
        <AccordionDetails>
          Applying a wax will hide the micro-light swirls and scratches in your
          paint. They’re essentially “filled in” with the wax which creates more
          shine. So technically it does hide the reallllly light scratches, but
          it does not actually remove any of them. <br />
          <br />
          Nonetheless, your paint will look much glossier because the wax
          creates a more “flat” surface.
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
          <span className="font-bold pr-8">Do you need access to water?</span>
          <FaAngleDown className="absolute right-5 top-4 angle3 duration-300" />
        </AccordionSummary>
        <AccordionDetails>
          If we’re working at your home location, then if possible, we’ll use
          the water spigot you have. Regardless, we will get the job done!
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
          <span className="font-bold pr-8">
            Does this include buffing or polishing?{" "}
          </span>
          <FaAngleDown className="absolute right-5 top-4 angle4 duration-300" />
        </AccordionSummary>
        <AccordionDetails>
          No, this is solely an exterior thorough washing and waxing of the
          vehicle. If you would like any polishing, this would be done under{" "}
          <Link
            href="/premiums/pc"
            className="text-blue-800 underline active:text-purple-800 visited:text-purple-800"
          >
            paint correction services
          </Link>
          . With any questions, feel free to reach out and contact us!
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
