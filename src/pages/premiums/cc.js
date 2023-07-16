import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Footer from "../components/Footer";
import { FaAngleDown } from "react-icons/fa";
import pic2 from "../../../public/exteriors/Ceramic Coating.png";
import Booking from "../components/Booking";
import gal9 from "../../../public/exteriors/gallery2/eGallery20.png";
import gal10 from "../../../public/exteriors/gallery2/eGallery21.jpg";
import gal11 from "../../../public/exteriors/gallery2/eGallery22.png";
import gal12 from "../../../public/exteriors/gallery2/eGallery23.png";
import gal13 from "../../../public/exteriors/gallery2/eGallery24.png";
import gal14 from "../../../public/exteriors/gallery2/eGallery25.png";
import gal15 from "../../../public/exteriors/gallery2/eGallery26.png";
import gal16 from "../../../public/exteriors/gallery2/eGallery27.png";
import gal17 from "../../../public/exteriors/gallery2/eGallery28.png";
import Gallery from "../components/subcomponents/Gallery";
import BookButtonAlt from "../components/subcomponents/BookButtonAlt";

const Cc = () => {
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
        <title>Ceramic Coating Service in Tracy, CA</title>
        <meta
          name="description"
          content="The official Ceramic Coating Service page for all the information you need about services and packages offered in Tracy, CA."
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
          className={`z-[100] px-12 py-24 flex flex-col duration-500 ${
            menu ? `translate-x-[25vw]` : null
          }`}
        >
          <div className="pb-24 flex xl:flex-row flex-col">
            <div className="w-full">
              <h1 className="font-bold md:text-4xl sm:text-2xl text-lg lg:text-6xl">
                Benefits of Ceramic Coating
              </h1>
              <div className="my-10 text-sm lg:text-lg">
                <ul className="list-disc pl-5 lg:pl-10 flex flex-col gap-2 lg:max-w-3xl">
                  <li>
                    Produces the most durable protection that lasts between 3 to
                    9 years{" "}
                  </li>
                  <li>
                    You only need to apply it once (and not every 3 months like
                    other forms of protection)
                  </li>
                  <li>
                    Creates a deep level of gloss that’s incomparable to other
                    forms of protection like wax or sealant{" "}
                  </li>
                  <li>
                    Provides unmatched hydrophobic properties that keeps your
                    car cleaner and makes it easier to wash
                  </li>
                  <br />
                  <p className="lg:max-w-3xl">
                    That’s the difference of a professional ceramic coating
                    installer. Additionally, if it’s not properly installed, you
                    won’t get the actual benefits and you’ll see a ton of
                    smudges across your vehicle.
                  </p>
                </ul>
              </div>
              <div className="lg:pl-10 text-sm lg:text-base pb-10">
                NOTE:
                <p className="font-bold lg:max-w-3xl">
                  Before the coating is installed, your vehicle must first be
                  properly prepped and corrected with one of our paint
                  correction services. If you apply the coating without the
                  proper prep work, you’re not able to get all the benefits from
                  the coating. Regardless, if you still would like a ceramic
                  coating without a paint correction, this is still an option.
                </p>
              </div>
            </div>
            <div className="z-[100] w-full pl-4">
              <Image
              alt="picture"
                src={gal10}
                width={1024}
                height={1024}
                className="z-[100] object-contain aspect-auto"
              />
            </div>
          </div>
          <div className="flex xl:flex-row flex-col-reverse">
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
                Ceramic Coating
              </h1>
              <div className="my-10 text-sm lg:text-lg block gap-10">
                <div className="">
                  <b className="block mb-4">General Pricing:</b>
                  <ul className="list-disc pl-5 lg:pl-10 flex flex-col gap-2">
                    <li>$200-$500</li>
                  </ul>
                </div>
                <div className="mt-10">
                  <b className="block mb-4">Common Ceramic Coating Myths:</b>
                  <ul className="list-disc pl-5 lg:pl-10 flex flex-col gap-2">
                    <li className="">
                      The coating will not make your paint scratch-proof
                    </li>
                    <li className="">
                      The coating will not protect your paint from rock chips.
                    </li>
                    <li>
                      <span className="">
                        The coating requires maintenance to prolong the
                        durability.
                      </span>
                    </li>
                  </ul>
                </div>
                <p className="mt-10">
                  Yes, coatings are long-lasting and durable, but that doesn’t
                  mean you can do whatever you want with your vehicle and think
                  the coating will protect it.Just like many other things in
                  life, if you don’t care for the coating, it will degrade
                  overtime and not last it’s intended lifespan.
                </p>
                <div className="flex my-10 justify-center">
                  <BookButtonAlt setSocials={setSocials} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Gallery
          menu={menu}
          images={[
            gal9,
            gal10,
            gal11,
            gal12,
            gal13,
            gal14,
            gal15,
            gal16,
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

export default Cc;

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
            Can I just get the coating installed without the prep work or paint
            correction?
          </span>
          <FaAngleDown className="absolute right-5 top-4 angle1 duration-300" />
        </AccordionSummary>
        <AccordionDetails>
          While we do not reccomend to instal without any prep work or paint
          correction, If the car does not need any scratches to be removed, it
          is possible to apply a ceramic coating although the full years of
          protection are not guaranteed. Please contact us for more information.
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
            Can the ceramic coating replace my clear coat?
          </span>
          <FaAngleDown className="absolute right-5 top-4 angle2 duration-300" />
        </AccordionSummary>
        <AccordionDetails>
          If your paint is chipping and fading due to clear coat failure, the
          only option to fix that is a repaint. A ceramic coating will not be
          able to help.
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
            Can I wash my car after the coating is installed?
          </span>
          <FaAngleDown className="absolute right-5 top-4 angle3 duration-300" />
        </AccordionSummary>
        <AccordionDetails>
          Once the coating is applied, the vehicle should not get wet for the
          first 48 hours so it can fully cure. After that, we advise our
          customers to not wash their vehicle for the first two weeks. The first
          wash after we apply the ceramic coating is free to you so we can check
          how the coating is holding up.
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
            Can Ceramic Coatings be done Mobile?
          </span>
          <FaAngleDown className="absolute right-5 top-4 angle4 duration-300" />
        </AccordionSummary>
        <AccordionDetails>
          Yes! All that is needed would be for the car to be located in a shaded
          area so that the paint correction and ceramic coating can cure
          properly.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
