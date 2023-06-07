import Image from "next/image";
import React from "react";
import { FaInstagram } from "react-icons/fa";

const Gallery = ({ images, menu }) => {
  return (
    <div
      className={`py-16 px-4 duration-500 ${
        menu ? `translate-x-[25vw]` : null
      }`}
    >
      <h1 className="pl-4 md:text-2xl sm:text-lg text-base lg:text-4xl font-bold flex items-center gap-4 w-full">
        <span className="md:flex hidden">Recent Works: </span>
        <a
          href="https://www.instagram.com/danosmobiledetailing/"
          target="_blank"
          rel="noreferrer"
          className="hover:underline"
        >
          @danosmobiledetailing
        </a>{" "}
        on <FaInstagram />
      </h1>
      <div className="flex w-full flex-wrap justify-center items-start p-4">
        {images.map((image, i) => (
          <a
            key={i}
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/danosmobiledetailing/"
            className="p-1 lg:w-1/5 md:w-1/4 sm:w-1/3 w-1/2 group flex"
          >
            <Image
              alt="picture"
              src={image}
              className="w-full brightness-100 group-hover:brightness-75 transition-all duration-300 ease-in-out object-contain aspect-auto"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
