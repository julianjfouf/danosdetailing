import React from "react";

const BookButtonAlt = ({ setSocials }) => {
  return (
    <div className="overflow-hidden flex">
      <a
        onClick={() => setSocials(true)}
        className="cursor-pointer bg-black border-4 border-black text-white py-4 px-6 before:h-full before:w-full before:bg-white before:absolute relative before:left-0 before:top-0 before:content-['Book'] before:text-black before:flex before:items-center before:justify-center before:translate-x-[-150%] hover:before:translate-x-0 before:duration-300 overflow-hidden font-semibold"
      >
        Book
      </a>
    </div>
  );
};

export default BookButtonAlt;
