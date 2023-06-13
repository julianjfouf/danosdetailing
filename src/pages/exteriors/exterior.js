import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import pic2 from "../../../public/exteriors/Full Exterior Main.png";
import Price from "../components/Price";
import Booking from "../components/Booking";
import BookButtonAlt from "../components/subcomponents/BookButtonAlt";
import gal1 from "../../../public/exteriors/gallery/eGallery1.png";
import gal2 from "../../../public/exteriors/gallery/eGallery2.png";
import gal3 from "../../../public/exteriors/gallery/eGallery3.png";
import gal4 from "../../../public/exteriors/gallery/eGallery4.png";
import gal5 from "../../../public/exteriors/gallery/eGallery5.png";
import gal6 from "../../../public/exteriors/gallery/eGallery6.png";
import gal7 from "../../../public/exteriors/gallery/eGallery7.png";
import gal8 from "../../../public/exteriors/gallery/eGallery8.png";
import Gallery from "../components/subcomponents/Gallery";

const Exterior = () => {
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
        <title>Full Exterior Service</title>
        <meta
          name="description"
          content="The official Full Exterior Service page for all the information you need about services and packages offered."
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
              src={pic2}
              width={1024}
              height={1024}
              className="z-[100] object-contain aspect-auto"
            />
          </div>
          <div className="text-gray-900 w-full pl-4">
            <h1 className="font-bold md:text-4xl sm:text-2xl text-lg lg:text-6xl">
              Full Exterior Service
            </h1>
            <div className="my-10 text-sm lg:text-lg">
              <b className="mb-4 block">Package Includes:</b>
              <ul className="list-disc pl-5 lg:pl-10 flex flex-col gap-2">
                <li>All Rims and Tires Deep Cleaned & Dressed</li>
                <li>Full Foam & Hand Wash</li>
                <li>All Paint Work Prepped with 3 Month Paint Sealant</li>
                <li>All Bugs & Debris Removed</li>
                <li>Streak Free Window Cleaning</li>
                <li>Door Jambs Cleaned</li>
              </ul>
            </div>
            <div className="my-10 text-sm lg:text-lg flex flex-col xl:flex-row xl:block gap-10">
              <div>
                <b className=" block mb-4">Additional Options:</b>
                <ul className="list-disc pl-5 lg:pl-10 flex flex-col gap-2">
                  <li>Clay Bar Treatment / Iron Removal Process (+$20)</li>
                </ul>
              </div>
              <div className="xl:mt-10">
                <span className="font-bold block mb-4">General Pricing:</span>
                <div className="flex flex-wrap">
                  <Price size="Small" price="$80" number={1} />
                  <Price size="Medium" price="$100" number={2} />
                  <Price size="Large" price="$120" number={3} />
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
          images={[gal1, gal2, gal3, gal4, gal5, gal6, gal7, gal8]}
        />
        <FAQ menu={menu} />
        {/* Put an FAQ Section that is specific to each service and have them answered on the bottom */}
        <Footer />
      </main>
    </>
  );
};

export default Exterior;

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
          <span className="font-bold pr-8">
            How long does the wash process take?
          </span>
          <FaAngleDown className="absolute right-5 top-4 angle1 duration-300" />
        </AccordionSummary>
        <AccordionDetails>
          It depends on the size and condition of the vehicle, but generally
          speaking between 45 minutes to 2 hours.
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
            Do you need access to water or power?
          </span>
          <FaAngleDown className="absolute right-5 top-4 angle2 duration-300" />
        </AccordionSummary>
        <AccordionDetails>
          Yes, whenever mobile I ask for a water spigot and power outlet within
          50 ft of the car.
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
          <span className="font-bold pr-8">Does this include a wax?</span>
          <FaAngleDown className="absolute right-5 top-4 angle3 duration-300" />
        </AccordionSummary>
        <AccordionDetails>
          No, this does not include a wax, but our wash & wax option does.
          Instead a paint sealant is used to add an extra layer of protection.
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
          <span className="font-bold pr-8">Do you do group washes?</span>
          <FaAngleDown className="absolute right-5 top-4 angle4 duration-300" />
        </AccordionSummary>
        <AccordionDetails>
          If multiple vehicles are booked on the day of, then I do offer
          multiple washes on different vehicles.
        </AccordionDetails>
      </Accordion>
      <Accordion
        onClick={() => {
          const angle = document.querySelector(".angle5");
          if (angle.classList.contains("rotate-180")) {
            angle.classList.remove("rotate-180");
          } else {
            angle.classList.add("rotate-180");
          }
        }}
      >
        <AccordionSummary className="relativev">
          <span className="font-bold pr-8">
            Will the products leave a residue on my driveway or car?
          </span>
          <FaAngleDown className="absolute right-5 top-4 angle5 duration-300" />
        </AccordionSummary>
        <AccordionDetails>
          No, any residue or water spots will be cleaned up to make sure nothing
          damages your property or car.
        </AccordionDetails>
      </Accordion>
      <Accordion
        onClick={() => {
          const angle = document.querySelector(".angle5");
          if (angle.classList.contains("rotate-180")) {
            angle.classList.remove("rotate-180");
          } else {
            angle.classList.add("rotate-180");
          }
        }}
      >
        <AccordionSummary className="relativev">
          <span className="font-bold pr-8">What is a clay bar treatment?</span>
          <FaAngleDown className="absolute right-5 top-4 angle5 duration-300" />
        </AccordionSummary>
        <AccordionDetails>
          A clay bar treatment is similar to exfoliation on the skin, it removes
          all decontaminants from the paint such as iron and metals. Once the
          entire paint has been clayed, you will feel your vehicles paint
          extremely smooth. It also allows any waxing or sealants to bond to the
          paint rather than any decontaminants.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
