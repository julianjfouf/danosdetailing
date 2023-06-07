import React from "react";
import Grid from "./subcomponents/Grid";
import {
  Google,
  Instagram,
  MailOutline,
  PhoneOutlined,
} from "@mui/icons-material";

const Booking = ({ socials, setSocials }) => {
  return (
    <div
      className={`top-0 text-white flex flex-col justify-center items-center h-screen w-screen bg-black z-[10000000] rounded-full scale-0 fixed menuBars ${
        socials ? `!scale-100 opacity-1` : null
      } duration-300`}
    >
      <div
        onClick={() => setSocials(false)}
        className="absolute right-10 top-10 cursor-pointer p-5"
      >
        <div className="absolute bg-white rotate-[45deg] w-[2px] h-10" />
        <div className="absolute bg-white rotate-[135deg] w-[2px] h-10" />
      </div>
      <div className="border p-4 xl:py-40 xl:px-20 rounded flex items-center everything opacity-0 duration-300 translate-y-12">
        <div className="h-full w-1/2 relative xl:flex flex-col hidden">
          <div className="circle w-[720px] h-[720px] bg-white absolute rounded-full top-0 right-0" />
          <h1 className="text-6xl font-bold pb-10">Book an appointment.</h1>
          <Grid />
        </div>
        <ul className="xl:w-1/2 flex justify-center flex-col items-center rounded-lg">
          <div className="flex justify-center flex-col items-start">
            <li className="text-3xl font-bold text-white flex items-center">
              <PhoneOutlined sx={{ fontSize: 50 }} />
              <span className="text-sm xl:text-base text-gray-200 pl-5 font-normal">
                (209) 278-9098
              </span>
            </li>
            <li className="text-xl xl:text-3xl font-bold text-white mt-10 flex items-center">
              <MailOutline sx={{ fontSize: 50 }} />
              <span className="text-sm xl:text-base text-gray-200 pl-5 font-normal">
                danosmobiledetailing@gmail.com
              </span>
            </li>
            <li className="text-3xl font-bold text-white mt-10 flex items-center">
              <Instagram sx={{ fontSize: 50 }} />
              <span className="text-sm xl:text-base text-gray-200 pl-5 font-normal">
                @danosmobiledetailing
              </span>
            </li>
            <li className="text-3xl font-bold text-white mt-10 flex items-center">
              <Google sx={{ fontSize: 50 }} />
              <span className="text-sm xl:text-base text-gray-200 pl-5 font-normal">
                Danos Detailing
              </span>
            </li>
          </div>
        </ul>
      </div>
      <p className="mt-12 max-w-lg text-center text-neutral-300 everything opacity-0 duration-300 translate-y-12">
        To book an appointment please send your name, desired services, and any
        photos of the condition of the car to the medias listed.
      </p>
    </div>
  );
};

export default Booking;
