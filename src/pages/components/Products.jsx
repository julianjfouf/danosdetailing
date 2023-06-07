import Image from "next/image";
import React from "react";
import pic1 from "../../../public/productLogos/ps1.jpg";
import pic2 from "../../../public/productLogos/GYEON LOGO.png";
import pic3 from "../../../public/productLogos/Carpro log.png";
import pic4 from "../../../public/productLogos/adams pol logo.png";
import pic5 from "../../../public/productLogos/chem guys logo.png";

const Products = () => {
  return (
    <div className="px-4 py-24">
      <h1 className="md:text-4xl sm:text-2xl text-lg lg:text-6xl font-bold">
        Products We Use
      </h1>
      <ul className="flex items-center justify-start w-full">
        <li className="lg:w-1/5 md:w-1/4 sm:w-1/3 xs:w-1/2 w-full">
          <Image alt="picture" className="object-contain aspect-auto w-full" src={pic1} />
        </li>
        <li className="lg:w-1/5 md:w-1/4 sm:w-1/3 xs:w-1/2 w-full">
          <Image alt="picture" className="object-contain aspect-auto w-full" src={pic2} />
        </li>
        <li className="lg:w-1/5 md:w-1/4 sm:w-1/3 xs:w-1/2 w-full">
          <Image alt="picture" className="object-contain aspect-auto w-full" src={pic3} />
        </li>
        <li className="lg:w-1/5 md:w-1/4 sm:w-1/3 xs:w-1/2 w-full">
          <Image alt="picture" className="object-contain aspect-auto w-full" src={pic4} />
        </li>
        <li className="lg:w-1/5 md:w-1/4 sm:w-1/3 xs:w-1/2 w-full">
          <Image alt="picture" className="object-contain aspect-auto w-full" src={pic5} />
        </li>
      </ul>
    </div>
  );
};

export default Products;
