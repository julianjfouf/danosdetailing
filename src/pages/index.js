import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "./components/Navbar";
import HomePic from "/src/assets/IMG_4339.jpg";
import {
  FaAngleDown,
  FaAngleRight,
  FaArrowDown,
  FaAward,
  FaCalendar,
  FaCaretDown,
  FaEnvelope,
  FaInstagram,
  FaStar,
} from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import logo from "/src/assets/fernando logo.jpg";
import newLogo from "/src/assets/zedano logo.png";
import Logo from "/src/assets/zedano logo black.png";
import pic1 from "/src/assets/zedano pic 1.jpg";
import pic2 from "/src/assets/zedano pic 2.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Sliders from "./components/Sliders";
import Footer from "./components/Footer";
import interiorPic from "/src/assets/G-Wagon interior shot.jpg";
import exteriorPic from "/src/assets/Red 2.jpg";
import exteriorPictura from "/src/assets/333063136_156637520180429_4072620166486464418_n.jpg";
import excelsiorPictura from "/src/assets/Porsche exterior shot (1).jpg";
import VideoPlayer from "./components/VideoPlayer";
import { Avatar } from "@mui/material";
import daLambo from "src/assets/zedano lamborghini.png";
import daAMG from "src/assets/zedano amg.png";
import stuttgart from "src/assets/zedano stuttgart.png";
import lot from "src/assets/zedano lotus.png";
import goog from "src/assets/zedano google.png";
import {
  Facebook,
  FacebookOutlined,
  Google,
  Instagram,
  MailOutline,
  PhoneOutlined,
} from "@mui/icons-material";
import Card from "./components/Card";
import Grid from "./components/subcomponents/Grid";
import Booking from "./components/Booking";
import Products from "./components/Products";
import BookButton from "./components/subcomponents/BookButton";
import localFont from "@next/font/local";

export default function Home() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    if (!done) {
      const loader = document.querySelector(".loading");
      const image = document.querySelector(".openingImage");
      const screen = document.querySelector(".else");
      image.classList.add("!opacity-100");
      screen.classList.add("opacity-0");
      setTimeout(() => {
        image.classList.remove("!opacity-100");
      }, 1000);
      setTimeout(() => {
        loader.classList.add("!opacity-0");
      }, 2000);
      setTimeout(() => {
        loader.classList.add("!z-[-1]");
        screen.classList.remove("opacity-0");
      }, 2000);
      setDone(true);
    }
  }, []);

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
        <title>Dano's Detailing | Car Detailing in Tracy, CA</title>
        <meta
          name="description"
          content="The official Dano's Detailing website for all the information you need about services and packages offered in Tracy, CA."
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
      <div className="fixed flex items-center justify-center top-0 left-0 right-0 h-screen w-screen bg-black z-[10000000000] loading opacity-100 duration-1000">
        <Image
          alt="picture"
          className="openingImage opacity-0 duration-[1000ms] delay-300"
          src={newLogo}
          height={480}
          width={240}
          priority
          loading="eager"
        />
      </div>
      <main
        className={`w-screen else relative transition-all duration-500 overflow-hidden ${
          menu ? `h-screen w-screen overflow-hidden` : null
        }`}
      >
        <Main menu={menu} setMenu={setMenu} setSocials={setSocials} />
        <div className="w-screen min-h-screen flex justify-center items-center bg-white relative">
          <div
            id="works"
            className="w-full flex justify-center items-center left-0 right-0 bg-white"
          >
            <Sliders />
          </div>
        </div>
        <Cards />
        <Reviews />
        <Products />
        <Footer />
        <div
          onClick={() => setSocials(!socials)}
          className="fixed bottom-5 right-5 bg-white text-black overflow-hidden text-lg flex justify-center items-center border z-[100000000] cursor-pointer"
        >
          <button
            onClick={() => setSocials(true)}
            className="cursor-pointer uppercase tracking-widest bg-white border-2 border-white text-black py-4 px-6 before:h-full before:w-full before:bg-black before:absolute relative before:left-0 before:top-0 before:content-['Book'] before:text-white before:flex before:items-center before:justify-center before:translate-x-[-150%] hover:before:translate-x-0 before:duration-300 overflow-hidden font-semibold"
          >
            Book
          </button>
        </div>
        <Booking socials={socials} setSocials={setSocials} />
      </main>
    </>
  );
}

function Main({ menu, setMenu, setSocials }) {
  return (
    <div className="h-screen relative bg-black">
      <Navbar menu={menu} setMenu={setMenu} />
      <div className="flex flex-col justify-end pb-48 items-center w-full h-screen overflow-hidden">
        <VideoPlayer menu={menu} />
        <div
          className={`z-[100000] flex gap-8 items-baseline duration-500 text-white ${
            menu ? `translate-x-[25vw]` : null
          }`}
        >
          <BookButton setSocials={setSocials} />
          <a href="#works">
            <span
              onMouseEnter={() => {
                const ring = document.querySelector(
                  `.animationButtonDifferent`
                );
                ring.style.strokeDashoffset = "0";
              }}
              onMouseLeave={() => {
                const ring = document.querySelector(
                  `.animationButtonDifferent`
                );
                ring.style.strokeDashoffset = "70";
              }}
              className={`flex items-center group text-center justify-center item uppercase text-sm tracking-wide duration-1000 transition-all cursor-pointer`}
            >
              <div className="">See More</div>
              <span className="relative text-white ml-2">
                <span
                  style={{
                    display: "inline-flex",
                    WebkitTapHighlightColor: "transparent",
                  }}
                >
                  <span
                    className="border-[2px] border-[#9f9f9f] relative"
                    style={{
                      background: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      appearance: "none",
                      height: "40px",
                      width: "40px",
                      justifyContent: "center",
                      borderRadius: "100%",
                      padding: "8px",
                      appearance: "none",
                      WebkitTapHighlightColor: "transparent",
                      writingMode: "horizontal-tb",
                    }}
                  >
                    <span
                      className="absolute top-[-3px] left-[-3px] right-[-3px] bottom-[-3px]"
                      style={{
                        appearance: "none",
                        WebkitTapHighlightColor: "transparent",
                      }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        style={{
                          position: "absolute",
                          transform: "translate(-50%, -50%) rotate(-90deg)",
                          overflowClipMargin: "content-box",
                          overflow: "hidden",
                          height: "100%",
                          width: "100%",
                          top: "50%",
                          left: "50%",
                          appearance: "none",
                          zIndex: "100",
                          WebkitTapHighlightColor: "transparent",
                          color: "unset",
                        }}
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="11"
                          stroke="1"
                          style={{
                            strokeDasharray: "70",
                            strokeDashoffset: "70",
                            strokeWidth: "1px",
                            fill: "none",
                            stroke: "#da291c",
                            position: "absolute",
                            zIndex: "100",
                            transformOrigin: "0px 0px",
                            color: "unset",
                          }}
                          className={`animationButtonDifferent duration-500`}
                        ></circle>
                      </svg>
                    </span>
                    <svg
                      viewBox="0 0 8 16"
                      width="8"
                      height="16"
                      xlmns="http://www.w3.org/2000/svg"
                      style={{
                        height: "16px",
                        width: "8px",
                        overflowClipMargin: "content-box",
                        overflow: "hidden",
                      }}
                    >
                      <path
                        d="M7.268 9.547L0 16l4-8-4-8 7.268 6.453C7.715 6.82 8 7.377 8 8c0 .623-.285 1.18-.732 1.547z"
                        className="fill-white"
                      ></path>
                    </svg>
                  </span>
                </span>
              </span>
            </span>
          </a>
        </div>
      </div>
      <div className="absolute bottom-5 flex justify-center w-full text-white arrowBounce text-[32px]">
        <FaCaretDown />
      </div>
    </div>
  );
}

function Cards() {
  return (
    <div id="services" className="w-screen flex flex-wrap bg-black">
      <Card
        src={exteriorPic}
        type="Services"
        name="Interior Services"
        description="Full Interior / Mini Interior"
        button="Learn More"
        link="interiors"
        id={1}
        className="overflow-hidden"
      />
      <Card
        src={excelsiorPictura}
        type="Services"
        name="Exterior Services"
        description="Full Exterior / Wash & Wax"
        button="Learn More"
        link="exteriors"
        id={2}
        className="overflow-hidden"
      />
      <Card
        src={exteriorPictura}
        type="Add-ons"
        name="Additional Services"
        description="Boat Detailing / Accessory Services"
        button="Learn More"
        link="additionals"
        id={3}
        className="overflow-hidden"
      />
      <Card
        src={interiorPic}
        type="Exclusive"
        name="Premium Packages"
        description="Ceramic Coating / Paint Correction"
        button="Learn More"
        link="premiums"
        id={4}
        className="overflow-hidden"
      />
    </div>
  );
}

function Reviews() {
  return (
    <>
      <div
        id="reviews"
        className="bg-white my-36 flex text-neutral-900 flex-col"
      >
        <div className="flex xl:flex-row flex-col w-full max-h-min">
          <div className="p-4 w-full flex flex-col items-center m-1">
            {/* <h1 className="text-8xl font-bold text-neutral-900">
              Leave us a review!
            </h1> */}
            <Image
              alt="picture"
              width={240}
              className="object-contain"
              src={Logo}
            />
            <p className="text-left text-sm md:text-xl max-w-3xl leading-loose">
              Welcome to my car detailing website! My name is Fernando and I am
              a high school student who is passionate about providing the best
              possible car detailing services in Tracy. I started this business
              as a way to pay for my college and university expenses, but my
              passion for making cars look their best runs deep. I understand
              that your car is more than just a means of transportation; it is
              an investment that deserves the best care and attention. That is
              why I am committed to providing each and every customer with
              exceptional service and high-quality results. Whether you need a
              basic wash and wax or a comprehensive detailing package, I have
              the skills, tools, and expertise to get the job done right. I take
              pride in my work and strive to exceed your expectations every
              time. Thank you for considering my car detailing services, and I
              look forward to working with you soon.
            </p>
          </div>
          <div className="flex justify-center flex-wrap text-center xl:pt-0 pt-24">
            <div className="md:w-1/2 flex justify-end">
              <Review
                src="https://lh3.googleusercontent.com/a/AAcHTtet8Xc6CZYuBeU8TX2IJf8PHrDxlwZw7O5I574_ng=w36-h36-p-rp-mo-br100"
                name="Zamier"
                service="Auto interior vacuuming"
                review="I recently used Dano's Mobile Detailing for my car and was extremely
            impressed with the results. He was professional and thorough in
            cleaning and leaving the interior of my car looking better than before
            . The attention to detail was outstanding and I was impressed with his
            knowledge and use of high-quality products. I highly recommend Dano's
            for anyone looking for top-notch car detailing services."
                h="https://g.co/kgs/cLMeky"
              />
            </div>
            <div className="md:w-1/2 flex justify-start">
              <Review
                src="https://lh3.googleusercontent.com/a/AAcHTtebQFbXvnJe4HfKnLebhHNBtYCSLT5gJtppZy5Q=w36-h36-p-rp-mo-br100"
                name="Traci"
                service="Auto interior vacuuming, Full body wash, Car waxing, Auto detailing"
                review="Professional, on time, polite, and attention to detail.  Will be using Dano’s Detailing again for other vehicles.  Money well spent!"
                h="https://g.co/kgs/CHe5Lb"
              />
            </div>
            <div className="md:w-1/2 flex justify-end">
              <Review
                src="https://lh3.googleusercontent.com/a-/AD_cMMQsHfasYqSr8QrIwo6rUgIfOIUkYnDXjj4_sK5DkQ=w36-h36-p-rp-mo-br100"
                name="Long"
                service="Auto interior vacuuming, Full body wash, Auto detailing"
                review="He did a great job with my 2 SUVs. Very professional, on time, and polite. I will definitely use his service again and gladly recommend it to everyone who is on the fence."
                h="https://g.co/kgs/SNJe3d"
              />
            </div>
            <div className="md:w-1/2 flex justify-start">
              <Review
                src="https://lh3.googleusercontent.com/a/AAcHTtf2uXexqvoTVvO44TXMhb5N89fo71UxvUf5K60X=w36-h36-p-rp-mo-br100"
                name="Kevin"
                service="Auto interior vacuuming, Interior scenting, Auto detailing"
                review="My work truck was in very rough condition. Had sauces and soda stains everywhere. This truck looks amazing now, Highly recommend. He was very professional and respectful."
                h="https://g.co/kgs/ES8Kmf"
              />
            </div>
          </div>
        </div>
        {/* <div className="flex flex-wrap items-center justify-center rounded my-12">
          <Image src={daLambo} className="w-1/6 object-contain aspect-auto" />
          <Image src={lot} className="w-1/6 object-contain aspect-auto" />
          <Image src={daAMG} className="w-1/6 object-contain aspect-auto" />
          <Image
            src={stuttgart}
            className="w-1/6 object-contain aspect-auto scale-150"
          />
        </div> */}
      </div>
    </>
  );
}

const Review = ({ src, name, service, review, h }) => {
  return (
    <div className="p-1 h-full flex">
      <a
        target="_blank"
        rel="noreferrer"
        href={h}
        className="flex flex-col items-center rounded min-h-full"
      >
        <div className="flex flex-col text-left shadow p-10 h-full min-h-[50vh] rounded relative overflow-hidden">
          <Avatar alt="Avatar" src={src ? src : ""} />
          <h1 className="mt-2.5 md:text-base text-sm">{name}</h1>
          <h2 className="leading-5 text-gray-500 md:text-base text-sm max-w-sm">
            {service}
          </h2>
          <span className="flex text-yellow-500 md:text-base text-sm mt-5 items-start">
            <FaStar />
            <FaStar className="mx-1" />
            <FaStar />
            <FaStar className="mx-1" />
            <FaStar />
          </span>
          <p className="max-w-sm mt-5 md:text-base text-sm font-bold leading-relaxed">
            "{review}"
          </p>
          <div>
            <Image
              alt="google"
              src={goog}
              className="h-7 absolute top-4 right-4 w-min object-contain"
            />
          </div>
          <div className="bg-black w-full absolute left-0 top-0 h-1" />
        </div>
      </a>
    </div>
  );
};

// function Slide() {
//   return (
//     <div className="m-8 flex flex-col items-center justify-center container mx-auto">
//       <Carousel
//         showArrows={true}
//         showIndicators={true}
//         infiniteLoop={true}
//         showThumbs={false}
//         autoPlay={true}
//         swipeable={true}
//       >
//         <div>
//           <Image src={logo} />
//         </div>
//         <div>
//           <Image src={logo} />
//         </div>
//         <div>
//           <Image src={logo} />
//         </div>
//         <div>
//           <Image src={logo} />
//         </div>
//         <div>
//           <Image src={logo} />
//         </div>
//         <div>
//           <Image src={logo} />
//         </div>
//       </Carousel>
//     </div>
//   );
// }

// function Testimonials() {
//   return (
//     <div id="testimonials" className="flex flex-wrap pb-48 pt-16">
//       <div className="lg:w-1/2 w-full h-1/3 py-8 sm:py-0 sm:p-16 flex justify-center items-baseline">
//         <span className="xs:font-normal font-bold text-3xl xs:text-9xl font-['Space Grotesk'] pr-8">
//           ,,
//         </span>
//         <p className="max-w-lg w-full italic">
//           I recently used Dano's Mobile Detailing for my car and was extremely
//           impressed with the results. He was professional and thorough in
//           cleaning and leaving the interior of my car looking better than before
//           . The attention to detail was outstanding and I was impressed with his
//           knowledge and use of high-quality products. I highly recommend Dano's
//           for anyone looking for top-notch car detailing services.
//           <span className="flex items-center py-4 w-full justify-between">
//             <span className="flex text-yellow-500 items-start h-full">
//               <FaStar />
//               <FaStar />
//               <FaStar />
//               <FaStar />
//               <FaStar />
//             </span>
//             <span className="flex items-end not-italic">- Zamier</span>
//           </span>
//         </p>
//       </div>
//       <div className="lg:w-1/2 w-full h-1/3 py-8 sm:py-0 sm:p-16 flex justify-center items-baseline">
//         <span className="xs:font-normal font-bold text-3xl xs:text-9xl font-['Space Grotesk'] pr-8">
//           ,,
//         </span>
//         <p className="max-w-lg w-full italic">
//           Professional, on time, polite, and attention to detail. Will be using
//           Dano’s Detailing again for other vehicles. Money well spent!
//           <br />{" "}
//           <span className="flex items-center py-4 w-full justify-between">
//             <span className="flex text-yellow-500 items-start h-full">
//               <FaStar />
//               <FaStar />
//               <FaStar />
//               <FaStar />
//               <FaStar />
//             </span>
//             <span className="flex items-end not-italic">- Traci</span>
//           </span>
//         </p>
//       </div>
//       <div className="lg:w-1/2 w-full h-1/3 py-8 sm:py-0 sm:p-16 flex justify-center items-baseline">
//         <span className="xs:font-normal font-bold text-3xl xs:text-9xl font-['Space Grotesk'] pr-8">
//           ,,
//         </span>
//         <p className="max-w-lg w-full italic">
//           He did a great job with my 2 SUVs. Very professional, on time, and
//           polite. I will definitely use his service again and gladly recommend
//           it to everyone who is on the fence.
//           <br />{" "}
//           <span className="flex items-center py-4 w-full justify-between">
//             <span className="flex text-yellow-500 items-start h-full">
//               <FaStar />
//               <FaStar />
//               <FaStar />
//               <FaStar />
//               <FaStar />
//             </span>
//             <span className="flex items-end not-italic">- Long</span>
//           </span>
//         </p>
//       </div>
//       <div className="lg:w-1/2 w-full h-1/3 py-8 sm:py-0 sm:p-16 flex justify-center items-baseline">
//         <span className="xs:font-normal font-bold text-3xl xs:text-9xl font-['Space Grotesk'] pr-8">
//           ,,
//         </span>
//         <p className="max-w-lg w-full italic">
//           My work truck was in very rough condition. Had sauces and soda stains
//           everywhere. This truck looks amazing now, Highly recommend. He was
//           very professional and respectful. <br />
//           <span className="flex items-center py-4 w-full justify-between">
//             <span className="flex text-yellow-500 items-start h-full">
//               <FaStar />
//               <FaStar />
//               <FaStar />
//               <FaStar />
//               <FaStar />
//             </span>
//             <span className="flex items-end not-italic">- Kevin</span>
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// }

// function Serving() {
//   return (
//     <div className="bg-neutral-900 text-white flex flex-col items-center p-8">
//       <div className="flex flex-col justify-center items-center">
//         <h1 className="text-5xl p-8">Serving Tracy with</h1>
//         <div className="flex p-8 gap-5">
//           <div className="flex w-1/3 items-center">
//             <div className="flex items-center p-4 text-center leading-5">
//               <FaAward className="w-16 scale-[360%]" />
//               <h3 className="pl-5 max-w-[240px]">
//                 Quality care for both you and your car
//               </h3>
//             </div>
//           </div>
//           <div className="flex w-1/3 items-center">
//             <div className="flex items-center p-4 text-center leading-5">
//               <FaAward className="w-16 scale-[360%]" />
//               <h3 className="pl-5 max-w-[240px]">
//                 Quality care for both you and your car
//               </h3>
//             </div>
//           </div>
//           <div className="flex w-1/3 items-center">
//             <div className="flex items-center p-4 text-center leading-5">
//               <FaAward className="w-16 scale-[360%]" />
//               <h3 className="pl-5 max-w-[240px]">
//                 Quality care for both you and your car
//               </h3>
//             </div>
//           </div>
//         </div>
//         <Slide />
//       </div>
//     </div>
//   );
// }

// function Services() {
//   return (
//     <div className="p-8 flex flex-col justify-center items-center bg-white">
//       <div className="container mx-auto text-center">
//         <p className="tracking-widest text-gray-500 font-semibold">SERVICES</p>
//         <h1 className="text-black text-5xl">Reasonable & Flexible Options</h1>
//         <div className="w-full flex h-screen p-8">
//           <div className="w-full flex p-2 my-4 h-1/2">
//             <div className="bg-black overflow-hidden w-full h-full relative group cursor-pointer p-4">
//               <div className="absolute bg-black w-full h-full opacity-0 group-hover:opacity-50 duration-300 top-0 left-0"></div>
//               <h1 className="text-4xl font-bold text-white text-left relative before:absolute before:bottom-0 before:left-0 before:h-[3px] before:w-full before:bg-white before:translate-y-5 before:scale-x-0 before:duration-300 group-hover:before:scale-x-100 before:transition-transform before:origin-left">
//                 Interior Service
//               </h1>
//               <p className="text-white text-left mt-10 translate-x-[110%] group-hover:translate-x-0 duration-300">
//                 The best services in town fjfjfkdasj;lfa;slkdfj a;slkdfj
//                 a;slkdfj a;sldkfj as;ldfkj a;lskdfj as;ldfkj as;ldfkj as;ldfkj
//                 as;ldfkj as;lfdkj as;lkdfj as;ldfkj as;lkdfj
//               </p>
//             </div>
//             {/* <Image src={logo} className="" /> */}
//           </div>
//           <div className="w-full flex p-2 my-4 h-1/2">
//             <div className="bg-black overflow-hidden w-full h-full relative group cursor-pointer p-4">
//               <div className="absolute bg-black w-full h-full opacity-0 group-hover:opacity-50 duration-300 top-0 left-0"></div>
//               <h1 className="text-4xl font-bold text-white text-left relative before:absolute before:bottom-0 before:left-0 before:h-[3px] before:w-full before:bg-white before:translate-y-5 before:scale-x-0 before:duration-300 group-hover:before:scale-x-100 before:transition-transform before:origin-left">
//                 Interior Service
//               </h1>
//               <p className="text-white text-left mt-10 translate-x-[110%] group-hover:translate-x-0 duration-300">
//                 The best services in town fjfjfkdasj;lfa;slkdfj a;slkdfj
//                 a;slkdfj a;sldkfj as;ldfkj a;lskdfj as;ldfkj as;ldfkj as;ldfkj
//                 as;ldfkj as;lfdkj as;lkdfj as;ldfkj as;lkdfj
//               </p>
//             </div>
//             {/* <Image src={logo} className="" /> */}
//           </div>
//           <div className="w-full flex p-2 my-4 h-1/2">
//             <div className="bg-black overflow-hidden w-full h-full relative group cursor-pointer p-4">
//               <div className="absolute bg-black w-full h-full opacity-0 group-hover:opacity-50 duration-300 top-0 left-0"></div>
//               <h1 className="text-4xl font-bold text-white text-left relative before:absolute before:bottom-0 before:left-0 before:h-[3px] before:w-full before:bg-white before:translate-y-5 before:scale-x-0 before:duration-300 group-hover:before:scale-x-100 before:transition-transform before:origin-left">
//                 Interior Service
//               </h1>
//               <p className="text-white text-left mt-10 translate-x-[110%] group-hover:translate-x-0 duration-300">
//                 The best services in town fjfjfkdasj;lfa;slkdfj a;slkdfj
//                 a;slkdfj a;sldkfj as;ldfkj a;lskdfj as;ldfkj as;ldfkj as;ldfkj
//                 as;ldfkj as;lfdkj as;lkdfj as;ldfkj as;lkdfj
//               </p>
//             </div>
//             {/* <Image src={logo} className="" /> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function Contact() {
//   return (
//     <div className="bg-black text-white p-8">
//       <div className="flex flex-col items-center">
//         <p className="text-gray-500 tracking-widest font-semibold">CONTACT</p>
//         <h1 className="text-5xl font-bold">Booking Information</h1>
//         <p className="text-gray-500 p-4">
//           Book appointments with us in the ways that work best for you!
//         </p>
//         <div className="w-full flex flex-wrap">
//           <Card />
//           <Card />
//           <Card />
//           <Card />
//           <Card />
//           <Card />
//         </div>
//       </div>
//     </div>
//   );
// }

// function About() {
//   return (
//     <div>
//       <p>ABOUT</p>
//       <h1>Background Information</h1>
//       <p>The story of where we come from</p>
//     </div>
//   );
// }

// function Brands() {
//   return (
//     <div className="container mx-auto bg-white">
//       <Carousel
//         showArrows={true}
//         showIndicators={true}
//         infiniteLoop={true}
//         autoPlay={true}
//         swipeable={true}
//       >
//         <Image
//           className="max-h-[240px] max-w-[480px]"
//           height={240}
//           width={480}
//           src={logo}
//         />
//         <Image
//           className="max-h-[240px] max-w-[480px]"
//           height={240}
//           width={480}
//           src={logo}
//         />
//         <Image
//           className="max-h-[240px] max-w-[480px]"
//           height={240}
//           width={480}
//           src={logo}
//         />
//         <Image
//           className="max-h-[240px] max-w-[480px]"
//           height={240}
//           width={480}
//           src={logo}
//         />
//         <Image
//           className="max-h-[240px] max-w-[480px]"
//           height={240}
//           width={480}
//           src={logo}
//         />
//         <Image
//           className="max-h-[240px] max-w-[480px]"
//           height={240}
//           width={480}
//           src={logo}
//         />
//       </Carousel>
//     </div>
//   );
// }
