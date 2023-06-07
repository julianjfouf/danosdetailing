import React from "react";
import pic1 from "../../../public/carSizes/smallcar.jpg";
import pic2 from "../../../public/carSizes/mediumcar.jpg";
import pic3 from "../../../public/carSizes/largecar.jpg";
import Image from "next/image";

const Price = ({ size, price, number }) => {
  return (
    <div className="p-1 md:w-1/3 sm:w-1/2 w-full min-h-full flex">
      <div className="p-5 shadow min-h-full w-full flex flex-col justify-between items-start relative overflow-hidden rounded">
        <div className="w-full h-1 bg-black top-0 left-0 absolute" />
        <div className="flex justify-between w-full pb-10">
          <h1 className="text-base lg:text-xl">{size}</h1>
          <p className="font-bold text-base lg:text-xl">{price}</p>
        </div>
        {/* <Image
          src={
            (number == 1 && pic1) ||
            (number == 2 && pic2) ||
            (number == 3 && pic3)
          }
          height={1024}
          width={1024}
        /> */}
      </div>
    </div>
  );
};

export default Price;
