import Head from "next/head";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Booking from "../components/Booking";
import Image from "next/image";
import Price from "../components/Price";
import BookButtonAlt from "../components/subcomponents/BookButtonAlt";
import Gallery from "../components/subcomponents/Gallery";
import Footer from "../components/Footer";
import pic1 from "../../../public/additionals/accessory/engine/ENGINE PIC 2.jpg";
import pic2 from "../../../public/additionals/accessory/headlight/Headlight restoration.jpg";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { FaAngleDown } from "react-icons/fa";
import gal1 from "../../../public/additionals/accessory/headlight/Headlight 2.jpg";
import gal2 from "../../../public/additionals/accessory/headlight/headlight after 1.jpg";
import gal3 from "../../../public/additionals/accessory/headlight/headlight before 1.jpg";
import gal4 from "../../../public/additionals/accessory/headlight/Headlight restoration.jpg";
import gal5 from "../../../public/additionals/accessory/engine/ENGINE PIC 2.jpg";
import gal6 from "../../../public/additionals/accessory/engine/ENGINE PIC.jpg";
import gal7 from "../../../public/additionals/accessory/engine/ENGINE TITLE (1).jpg";

const Accessory = () => {
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
        <title>Accessory Services in Tracy, CA</title>
        <meta
          name="description"
          content="The official Accessory Services page for all the information you need about services and packages offered in Tracy, CA."
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
          <div className="text-gray-900 w-full pr-4">
            <h1 className="font-bold md:text-4xl sm:text-2xl text-lg lg:text-6xl">
              Engine Bay Cleaning
            </h1>
            <div className="my-10 text-sm lg:text-lg">
              <b>Removes Dust, Dirst, and Debris on your engine</b>
              <br />
              <br />
              <b>Your Engine Bay Will Look 10x Better</b>
              <br />
              <br />
              Not only does a clean engine bay make your car look better (legend
              has it, it’s also faster), but it helps you diagnose car problems
              easier. You’ll be able to quickly tell where the cause of leak is
              or if anything has torn.
              <br />
              <br />
              <span className="font-bold mb-4 block">Our Process:</span>
              <ul className="list-disc pl-5 lg:pl-10 flex flex-col gap-2">
                <li>
                  Inspect Engine bay (We want to make sure there’s nothing that
                  we need to keep an eye on during the cleaning.)
                </li>
                <li>
                  Cover sensitive areas (Depending on the car, this might be the
                  battery, intake, etc…)
                </li>
                <li>Spray and Agitate</li>
                <li>Dry and Blow any water in tight areas</li>
                <li>Final touch ups and dress plastic to give a shine</li>
              </ul>
              <br />
              <br />A lot of our customers are worried about cleaning their
              engine bay themselves as they think they might cause some type of
              damage. And just like anything else, without the proper tools,
              knowledge, and skills, you could cause some damage.
              <br />
              <br />
              So when you have us go out to clean your engine, you can be sure
              we have all the proper knowledge, skills, and tools to get the job
              done properly with no damage whatsoever
              <br />
              <br />
            </div>
            <div className="my-10 text-sm lg:text-lg flex flex-col xl:flex-row xl:block gap-10">
              <div className="xl:mt-10">
                <span className="font-bold block mb-4">General Pricing:</span>
                <div className="flex flex-wrap">
                  <Price size="Standard" price="$40" number={1} />
                </div>
              </div>
              <div className="my-10 flex justify-center">
                <BookButtonAlt setSocials={setSocials} />
              </div>
            </div>
          </div>
          <div className="z-[100] w-full pl-4">
            <Image
            alt="picture"
              src={pic1}
              width={1024}
              height={1024}
              className="z-[100] h-auto object-contain aspect-auto"
            />
          </div>
        </div>
        <div
          className={`z-[100] px-12 pt-6 flex xl:flex-row flex-col-reverse duration-500 ${
            menu ? `translate-x-[25vw]` : null
          }`}
        >
          <div className="z-[100] w-full pr-4">
            <Image
            alt="picture"
              src={pic2}
              width={1024}
              height={1024}
              className="z-[100] h-auto object-contain aspect-auto"
            />
          </div>
          <div className="text-gray-900 w-full pl-4">
            <h1 className="font-bold md:text-4xl sm:text-2xl text-lg lg:text-6xl">
              Headlight Restoration
            </h1>
            <div className="my-10 text-sm lg:text-lg">
              <span className="font-bold">
                Restore Your Headlights, Get Better Visibility, and Make Your
                Car Look Newer
              </span>
              <br />
              <br />
              Do your headlights have a foggy-hazy look to them? Maybe you’ve
              noticed your visibility at night or during the rainy times is much
              lower (thank you Tracy weather). No worries, you don’t have to
              replace them, nor do you have to open up your lens (as many people
              think the haziness is from the inside of the lens. Most of the
              time it’s not).
              <br />
              <br />
              <span className="font-bold mb-4 block">Our Process:</span>
              <ul className="list-disc pl-5 lg:pl-10 flex flex-col gap-2">
                <li>Wet Sand headlight with 800 grit to remove oxidation</li>
                <li>Wet Sand with 1,200 grit to refine sanding marks</li>
                <li>Move into 2,000 grit</li>
                <li>Compound the headlights to remove sanding marks</li>
                <li>Polish the Headlights for maximum clarity</li>
                <li>
                  Protect the headlights applying a coating for durable
                  protection
                </li>
              </ul>
              <br />
              <br />
              By sanding your headlights, we’re removing the old layer of clear
              coat that has failed and oxidized (which leads to the yellow-foggy
              look). Then we’ll compound and polish to bring them back to a
              like-new condition.
              <br />
              <br />
            </div>
            <div className="my-10 text-sm lg:text-lg flex flex-col xl:flex-row xl:block gap-10">
              <div className="xl:mt-10">
                <span className="font-bold block mb-4">General Pricing:</span>
                <div className="flex flex-wrap">
                  <Price size="Standard" price="$60" number={1} />
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
          images={[gal1, gal2, gal3, gal4, gal5, gal6, gal7]}
        />
        <FAQ menu={menu} />
        <Footer />
      </main>
    </>
  );
};

export default Accessory;

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
          It depends on the size and condition, but it typically takes 30
          minutes to 1 hour to complete. If the condition is worse, it’ll take
          longer.
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
            There’s an oil leak/spill. Can you clean that up?
          </span>
          <FaAngleDown className="absolute right-5 top-4 angle2 duration-300" />
        </AccordionSummary>
        <AccordionDetails>
          If your engine bay is covered in oil/grease, we will not be able to
          service it. There’s only so much we can clean and are not able to get
          under or thoroughly into the engine bay where a lot of the mess is
          collected.
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
            Are you going to use water on my engine bay?
          </span>
          <FaAngleDown className="absolute right-5 top-4 angle3 duration-300" />
        </AccordionSummary>
        <AccordionDetails>
          Yes, but we’re not flooding the engine bay with water. We’re careful
          to cover up the necessary areas, we hold the wand at a safe distance,
          and the primary focus is to rinse off the dirt and that’s it.
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
            Can you restore any headlights?
          </span>
          <FaAngleDown className="absolute right-5 top-4 angle4 duration-300" />
        </AccordionSummary>
        <AccordionDetails>
          Like many things, once the headlights get to a certain point, there is
          only so much we can do to restore them to a like-new condition. Your
          headlights can look better after we’re done, but there can also be
          permanent damage.
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
          <span className="font-bold pr-8">Why do my lens get ugly?</span>
          <FaAngleDown className="absolute right-5 top-4 angle5 duration-300" />
        </AccordionSummary>
        <AccordionDetails>
          Your headlights, just like your paint, have a clear coat on them. As
          the suns beats on it week after week, the clear coat starts to
          deteriorate. Eventually what was the clear coat turns into an ugly
          yellow layer gunk.
        </AccordionDetails>
      </Accordion>
      <Accordion
        onClick={() => {
          const angle = document.querySelector(".angle6");
          if (angle.classList.contains("rotate-180")) {
            angle.classList.remove("rotate-180");
          } else {
            angle.classList.add("rotate-180");
          }
        }}
      >
        <AccordionSummary className="relativev">
          <span className="font-bold pr-8">
            How do I keep my headlights looking good?
          </span>
          <FaAngleDown className="absolute right-5 top-4 angle6 duration-300" />
        </AccordionSummary>
        <AccordionDetails>
          It can be a bit tricky. Typical waxes and sealants will only protect
          your car for so long. If you park your car in the shade most of the
          time, then they’ll simply last longer than if you park outside in the
          sun most of the time.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
