import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import { FaAngleDown } from "react-icons/fa";
import pic2 from "../../../public/exteriors/Paint Correction.jpg";
import Footer from "../components/Footer";
import Booking from "../components/Booking";
import BookButtonAlt from "../components/subcomponents/BookButtonAlt";
import gal9 from "../../../public/exteriors/gallery2/eGallery29.png";
import gal10 from "../../../public/exteriors/gallery2/eGallery30.png";
import gal11 from "../../../public/exteriors/gallery2/eGallery31.png";
import gal12 from "../../../public/exteriors/gallery2/eGallery32.png";
import gal13 from "../../../public/exteriors/gallery2/eGallery33.png";
import gal14 from "../../../public/exteriors/gallery2/eGallery34.png";
import gal15 from "../../../public/exteriors/gallery2/eGallery35.png";
import gal16 from "../../../public/exteriors/gallery2/eGallery36.jpg";
import gal17 from "../../../public/exteriors/gallery2/eGallery37.png";
import gal18 from "../../../public/exteriors/gallery2/eGallery38.png";
import Gallery from "../components/subcomponents/Gallery";
import Link from "next/link";

const Pc = () => {
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
        <title>Paint Correction Service in Tracy, CA</title>
        <meta
          name="description"
          content="The official Paint Correction Service page for all the information you need about services and packages offered in Tracy, CA."
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
        <Booking setSocials={setSocials} socials={socials} />
        <div
          className={`z-[100] px-12 py-6 flex xl:flex-row flex-col-reverse duration-500 ${
            menu ? `translate-x-[25vw]` : null
          }`}
        >
          <div className="z-[100] w-full pr-4">
            <Image
            alt="picture"
              src={gal16}
              width={1024}
              height={1024}
              className="z-[100] object-contain aspect-auto"
            />
          </div>
          <div className="text-gray-900 w-full pl-4">
            <h1 className="font-bold md:text-4xl sm:text-2xl text-lg lg:text-6xl">
              Paint Correction
            </h1>
            <div className="my-10 text-sm lg:text-lg">
              <span className="font-bold">
                Remove The Paint Imperfections and Reveal The Gloss{" "}
              </span>
              <br />
              <br />
              With our Paint Polishing service, you can remove 60 to 90% of
              imperfections to reveal a great shine.
              <br />
              <br />
              Depending on your condition, whether the vehicle is new or not,
              some scratches won’t come all the way. It could be the scratches
              are too deep to remove safely or the clear coat itself is thinning
              out (we’ll take paint measurements before we start).*
              <br />
              <br /> Unlike our Wash and Wax service that can be done in just a
              few hours, our Paint Correction service requires more time and
              energy to achieve the proper results.
              <br />
              <br />
              If you’re selling your vehicle and want to prep the paint for
              potential buyers, our paint correction or Wash and Wax is a great
              option.
            </div>
            <div className="my-10 text-sm lg:text-lg flex flex-col xl:flex-row xl:block gap-10">
              <div>
                <b className="block mb-4">Our Process</b>
                <ul className="list-disc pl-5 lg:pl-10 flex flex-col gap-2">
                  <li>Clean Wheels, Tires, Fenders</li>
                  <li>Gentle Foam Wash</li>
                  <li>Chemically Remove Iron Particles</li>
                  <li>Clay Bar Treatment</li>
                  <li>
                    Compound Phase to remove majority of swirls and scrathces
                  </li>
                  <li>Polishing Phase to increase shine and clarity</li>
                  <li>Apply Paint Protection </li>
                  <li>Final Touch ups</li>
                </ul>
              </div>
              <div className="flex my-10 justify-center">
                <BookButtonAlt setSocials={setSocials} />
              </div>
            </div>
          </div>
        </div>
        <Gallery
          menu={menu}
          images={[
            gal9,
            gal18,
            gal11,
            gal12,
            gal13,
            gal14,
            gal15,
            gal10,
            gal17,
          ]}
        />
        <FAQ menu={menu} />
        {/* Put an FAQ Section that is specific to each service and have them answered on the bottom */}
        <Footer />
      </main>
    </>
  );
};

export default Pc;

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
          <span className="font-bold pr-8">Do you offer ceramic coatings?</span>
          <FaAngleDown className="absolute right-5 top-4 angle1 duration-300" />
        </AccordionSummary>
        <AccordionDetails>
          We sure do! This is a fantastic option to protect your paint from the
          weather. You can read more about our ceramic coatings{" "}
          <Link
            href="/premiums/cc"
            className="text-blue-800 underline active:text-purple-800 active:text-purple-8"
          >
            here
          </Link>
          . You can also stay with the more traditional wax or sealant.
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
          <span className="font-bold pr-8">How long do the results last?</span>
          <FaAngleDown className="absolute right-5 top-4 angle2 duration-300" />
        </AccordionSummary>
        <AccordionDetails>
          After the paint is corrected, the next phase is maintenance. It’s just
          like training your pet to sit on command. You don’t just teach them
          once and think they’ll know it forever. <br /> <br />
          You have to continually train and repeat the commands. It’s the same
          with paint correction. You have to properly (and routinely) wash and
          dry your vehicle moving forward to maintain the swirl-free finish of
          your paint. If not, you’re back to square one.
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
          <span className="font-bold pr-8">
            What’s the difference between a wax and paint correction?
          </span>
          <FaAngleDown className="absolute right-5 top-4 angle3 duration-300" />
        </AccordionSummary>
        <AccordionDetails>
          A wax does not remove any swirls or scratches from your paint. It only
          hides the very light swirls and can be completed in a few hours. Paint
          correction actually removes the swirls in your paint. This is what
          makes the paint shine like crazy. It also takes a substantial amount
          of time and energy to complete. Usually one or two full days
          (depending on size, condition, and desired results).
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
            What tools and products do you use?
          </span>
          <FaAngleDown className="absolute right-5 top-4 angle4 duration-300" />
        </AccordionSummary>
        <AccordionDetails>
          A wide arrange of machines, pads, polishes, compounds, cleaners,
          towels, and lights will be used to work on your car. Every car will be
          different and will yield different methods and tools.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
