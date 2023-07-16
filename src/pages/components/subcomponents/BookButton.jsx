import React from "react";

const BookButton = ({ setSocials }) => {
  return (
    <div className="overflow-hidden flex">
      <div
        onClick={() => setSocials(true)}
        className="cursor-pointer bg-white border-2 border-white text-black py-4 px-6 before:h-full before:w-full before:bg-black before:absolute relative before:left-0 before:top-0 before:content-['Book'] before:text-white before:flex before:items-center before:justify-center before:translate-x-[-150%] hover:before:translate-x-0 before:duration-300 overflow-hidden font-semibold"
      >
        Book
      </div>
    </div>
  );
};

export default BookButton;
