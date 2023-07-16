import Head from "next/head";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Card from "../components/Card";
import pic1 from "../../../public/exteriors/Ceramic Coating.png";
import pic2 from "../../../public/exteriors/Paint Correction.jpg";

const Index = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <Head>
        <title>Premium Services in Tracy, CA</title>
        <meta
          name="description"
          content="The official Premium Services page for all the information you need about services and packages offered in Tracy, CA."
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
        <div
          className={`z-[100] py-12 flex xl:flex-row flex-col-reverse duration-500 ${
            menu ? `translate-x-[25vw]` : null
          }`}
        >
          <div className="w-full flex-wrap flex">
            <Card
              src={pic1}
              type="Service"
              name="Ceramic Coating"
              description="Protect your investment."
              button="Learn More"
              link="/premiums/cc"
              id={1}
              className="overflow-hidden"
              alt={true}
            />
            <Card
              src={pic2}
              type="Service"
              name="Paint Correction"
              description="Remove all scratches and swirls."
              button="Learn More"
              link="/premiums/pc"
              id={2}
              className="overflow-hidden"
              alt={true}
            />
          </div>
        </div>
        {/* Put an FAQ Section that is specific to each service and have them answered on the bottom */}
        <Footer />
      </main>
    </>
  );
};

export default Index;
