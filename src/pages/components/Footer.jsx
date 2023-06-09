import React from "react";
import Logo from "/src/assets/zedano logo.png";
import Image from "next/image";
import {
  FaClock,
  FaCreditCard,
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaLocationArrow,
  FaMapMarker,
  FaMapMarkerAlt,
  FaMarker,
  FaMoneyBill,
  FaPaypal,
  FaPhone,
  FaTiktok,
  FaUserAlt,
} from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import FacebookIcon from "@mui/icons-material/Facebook";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import dollars from "/src/assets/zedano dollar.png";
import venmo from "/src/assets/zedano venmo.png";
import zelle from "/src/assets/zedano zelle.png";

const Footer = ({ menu }) => {
  return (
    <div
      id="contact"
      className="bg-[#0e0c0d] duration-500 py-8 px-8 text-neutral-100 flex w-full relative overflow-hidden z-[10000]"
    >
      <div className="flex w-full md:flex-row flex-col-reverse justify-around items-center z-[10000]">
        <div className="flex flex-col max-h-min justify-between md:max-w-min p-8 z-[10000]">
          <h1 className="font-bold text-3xl md:text-6xl xl:text-9xl mb-10 w-full text-center md:text-left z-[10000]">
            Dano's Detailing
          </h1>
          <p className="text-xs md:text-sm xl:text-base text-center md:text-left">
            &copy; 2023 Dano's Detailing
          </p>
        </div>
        {/* <div className="p-8 flex items-center md:flex-row flex-col h-full">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex">
              <FaClock className="xs:text-2xl md:text-4xl xl:text-6xl mr-2" />
              <div className="flex flex-col w-full pl-4">
                <h1 className="text-xl flex items-center mb-2">Hours</h1>
                <div className="font-light text-neutral-200 text-sm min-w-max">
                  <span className="">
                    MON-SUN <br />
                    10 AM - 6 PM
                  </span>
                </div>
              </div>
            </div>
            <div className="flex h-full my-8 md:mt-8">
              <div className="flex">
                <FaCreditCard className="text-2xl md:text-4xl xl:text-6xl mr-4" />
              </div>
              <div className="flex flex-wrap flex-col">
                <h1 className="text-xl flex items-center mb-2">
                  Payments
                </h1>
                <div className="flex flex-wrap justify-center">
                  <Image
                    alt="venmo"
                    src={venmo}
                    className="w-[48px] aspect-auto object-contain ml-4"
                  />
                  <Image
                    alt="zelle"
                    src={zelle}
                    className="w-[48px] aspect-auto object-contain ml-4"
                  />
                  <Image
                    alt="dollars"
                    src={dollars}
                    className="w-[48px] aspect-auto object-contain ml-4"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start z-[10000]">
            <div className="flex z-[10000]">
              <div className="flex justify-center md:pl-8 z-[10000]">
                <FaUser className="text-2xl md:text-4xl xl:text-6xl z-[10000]" />
                <div className="flex flex-col flex-wrap w-full ml-4 z-[10000]">
                  <h1 className="text-xl flex z-[10000]">Socials</h1>
                  <div className="flex z-[10000]">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.instagram.com/danosmobiledetailing/"
                      className="h-full m-2 z-[10000] text-neutral-300 hover:text-white transition-all duration-300 ease-in-out"
                    >
                      <FaInstagram className="w-full" />
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.tiktok.com/@danosdetailing?is_from_webapp=1&sender_device=pc"
                      className="h-full m-2 text-neutral-300 hover:text-white transition-all duration-300 ease-in-out"
                    >
                      <FaTiktok className="w-full" />
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.google.com/search?q=danos%20detailing&rlz=1C1CHBF_enUS994US994&oq=danos+detailing+&aqs=chrome.0.69i59j35i39j0i22i30l2j69i60l3.1498j0j7&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:14&tbm=lcl&sxsrf=AJOqlzWol-woR9Qg5-dgG2sxbuMA6SDieA:1679177524438&rflfq=1&num=10&rldimm=9022223714700630377&lqi=Cg9kYW5vcyBkZXRhaWxpbmdI8erattO5gIAIWhkQABABGAAYASIPZGFub3MgZGV0YWlsaW5nkgEVY2FyX2RldGFpbGluZ19zZXJ2aWNlqgEiEAEyHhABIhoC_p_EphrJHbU6eDeRKe6jsgT3leTNFm2QouABAA&ved=2ahUKEwjjmu_ev-b9AhVbBjQIHTKtB7IQvS56BAgPEAE&sa=X&rlst=f#rlfi=hd:;si:9022223714700630377,l,Cg9kYW5vcyBkZXRhaWxpbmdI8erattO5gIAIWhkQABABGAAYASIPZGFub3MgZGV0YWlsaW5nkgEVY2FyX2RldGFpbGluZ19zZXJ2aWNlqgEiEAEyHhABIhoC_p_EphrJHbU6eDeRKe6jsgT3leTNFm2QouABAA;mv:[[37.721529077319026,-121.47605296736208],[37.72116912268096,-121.47650803263795]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:14"
                      className="h-full m-2 text-neutral-300 hover:text-white transition-all duration-300 ease-in-out"
                    >
                      <FaPhone className="w-full" />
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.facebook.com/nando.zepeda.31"
                      className="h-full m-2 cursor-pointer text-neutral-300 hover:text-white transition-all duration-300 ease-in-out"
                    >
                      <FaFacebook className="w-full" />
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.google.com/search?q=danos%20detailing&rlz=1C1CHBF_enUS994US994&oq=danosdetailing+&aqs=chrome..69i57j0i13i30j0i8i13i30j69i60l2.2254j0j7&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:14&tbm=lcl&sxsrf=AJOqlzUkoUDaXE9h15XL30_nyoDqSd0ypg:1679177443677&rflfq=1&num=10&rldimm=9022223714700630377&lqi=Cg9kYW5vcyBkZXRhaWxpbmdI8erattO5gIAIWhkQABABGAAYASIPZGFub3MgZGV0YWlsaW5nkgEVY2FyX2RldGFpbGluZ19zZXJ2aWNlqgEiEAEyHhABIhoC_p_EphrJHbU6eDeRKe6jsgT3leTNFm2QouABAA&ved=2ahUKEwiu_624v-b9AhXdIUQIHaKsAO8QvS56BAgOEAE&sa=X&rlst=f#rlfi=hd:;si:9022223714700630377,l,Cg9kYW5vcyBkZXRhaWxpbmdI8erattO5gIAIWhkQABABGAAYASIPZGFub3MgZGV0YWlsaW5nkgEVY2FyX2RldGFpbGluZ19zZXJ2aWNlqgEiEAEyHhABIhoC_p_EphrJHbU6eDeRKe6jsgT3leTNFm2QouABAA;mv:[[37.721529077319026,-121.47605296736208],[37.72116912268096,-121.47650803263795]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:14"
                      className="h-full m-2 text-neutral-300 hover:text-white transition-all duration-300 ease-in-out"
                    >
                      <FaGoogle className="w-full" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex h-full">
              <div className="flex md:pl-6 pt-8">
                <FaMapMarker className="text-2xl md:text-4xl xl:text-6xl mr-2" />
                <div className="ml-2">
                  <h1 className="text-xl mb-2">Locations</h1>
                  <div className="text-sm w-full font-light">
                    Tracy
                    <br />
                    Lathrop
                    <br />
                    Mtn. House
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 p-4 flex">
            <FaClock className="text-4xl" />
            <div className="ml-4">
              <h1 className="mb-2">Hours</h1>
              <p className="text-neutral-300">MON-SUN from 10AM-6PM</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4 flex">
            <FaCreditCard className="text-4xl" />
            <div className="ml-4">
              <h1>Payments</h1>
              <div className="flex items-center">
                <div className="flex w-full items-center">
                  <Image
                    className="max-h-[36px] w-full object-contain aspect-auto"
                    src={zelle}
                  />
                  <div className="flex w-full mx-2">
                    <Image
                      className="max-h-[60px] w-full object-contain aspect-auto"
                      src={dollars}
                    />
                  </div>
                  <div className="flex w-full">
                    <Image
                      className="max-h-[48px] w-full object-contain aspect-auto"
                      src={venmo}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4 flex">
            <FaUser className="text-4xl" />
            <div className="ml-4">
              <h1 className="mb-2">Contacts</h1>
              <div className="text-neutral-400 flex text-xl gap-2 justify-between">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/danosmobiledetailing/"
                >
                  <FaInstagram className="cursor-pointer hover:text-neutral-100 duration-300" />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/nando.zepeda.31"
                >
                  <FaFacebook className="cursor-pointer hover:text-neutral-100 duration-300" />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.tiktok.com/@danosdetailing?is_from_webapp=1&sender_device=pc"
                >
                  <FaTiktok className="cursor-pointer hover:text-neutral-100 duration-300" />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.google.com/search?q=danos%20detailing&rlz=1C1CHBF_enUS994US994&oq=danosdetailing+&aqs=chrome..69i57j0i13i30j0i8i13i30j69i60l2.2254j0j7&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:14&tbm=lcl&sxsrf=AJOqlzUkoUDaXE9h15XL30_nyoDqSd0ypg:1679177443677&rflfq=1&num=10&rldimm=9022223714700630377&lqi=Cg9kYW5vcyBkZXRhaWxpbmdI8erattO5gIAIWhkQABABGAAYASIPZGFub3MgZGV0YWlsaW5nkgEVY2FyX2RldGFpbGluZ19zZXJ2aWNlqgEiEAEyHhABIhoC_p_EphrJHbU6eDeRKe6jsgT3leTNFm2QouABAA&ved=2ahUKEwiu_624v-b9AhXdIUQIHaKsAO8QvS56BAgOEAE&sa=X&rlst=f#rlfi=hd:;si:9022223714700630377,l,Cg9kYW5vcyBkZXRhaWxpbmdI8erattO5gIAIWhkQABABGAAYASIPZGFub3MgZGV0YWlsaW5nkgEVY2FyX2RldGFpbGluZ19zZXJ2aWNlqgEiEAEyHhABIhoC_p_EphrJHbU6eDeRKe6jsgT3leTNFm2QouABAA;mv:[[37.721529077319026,-121.47605296736208],[37.72116912268096,-121.47650803263795]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:14"
                >
                  <FaGoogle className="cursor-pointer hover:text-neutral-100 duration-300" />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4 flex">
            <FaMapMarkerAlt className="text-4xl" />
            <div className="ml-4">
              <h1 className="mb-2">Locations</h1>
              <p className="text-neutral-300">
                Tracy
                <br /> Mountain House <br /> Lathrop
              </p>
            </div>
          </div>
        </div>
        <div className="flex absolute right-24 bottom-[-24px] md:bottom-[-32px] rotate-90">
          <div className="flex flex-col">
            <div className="m-0.5 md:m-1 w-0.5 md:w-1 bg-white rounded-full h-0.5 md:h-1" />
            <div className="m-0.5 md:m-1 w-0.5 md:w-1 bg-white rounded-full h-0.5 md:h-1" />
            <div className="m-0.5 md:m-1 w-0.5 md:w-1 bg-white rounded-full h-0.5 md:h-1" />
            <div className="m-0.5 md:m-1 w-0.5 md:w-1 bg-white rounded-full h-0.5 md:h-1" />
            <div className="m-0.5 md:m-1 w-0.5 md:w-1 bg-white rounded-full h-0.5 md:h-1" />
          </div>
          <div className="flex flex-col">
            <div className="m-0.5 md:m-1 w-0.5 md:w-1 bg-white rounded-full h-0.5 md:h-1" />
            <div className="m-0.5 md:m-1 w-0.5 md:w-1 bg-white rounded-full h-0.5 md:h-1" />
            <div className="m-0.5 md:m-1 w-0.5 md:w-1 bg-white rounded-full h-0.5 md:h-1" />
            <div className="m-0.5 md:m-1 w-0.5 md:w-1 bg-white rounded-full h-0.5 md:h-1" />
            <div className="m-0.5 md:m-1 w-0.5 md:w-1 bg-white rounded-full h-0.5 md:h-1" />
          </div>
          <div className="flex flex-col">
            <div className="m-0.5 md:m-1 w-0.5 md:w-1 bg-white rounded-full h-0.5 md:h-1" />
            <div className="m-0.5 md:m-1 w-0.5 md:w-1 bg-white rounded-full h-0.5 md:h-1" />
            <div className="m-0.5 md:m-1 w-0.5 md:w-1 bg-white rounded-full h-0.5 md:h-1" />
            <div className="m-0.5 md:m-1 w-0.5 md:w-1 bg-white rounded-full h-0.5 md:h-1" />
            <div className="m-0.5 md:m-1 w-0.5 md:w-1 bg-white rounded-full h-0.5 md:h-1" />
          </div>
          <div className="flex flex-col">
            <div className="m-0.5 md:m-1 w-0.5 md:w-1 bg-white rounded-full h-0.5 md:h-1" />
            <div className="m-0.5 md:m-1 w-0.5 md:w-1 bg-white rounded-full h-0.5 md:h-1" />
            <div className="m-0.5 md:m-1 w-0.5 md:w-1 bg-white rounded-full h-0.5 md:h-1" />
            <div className="m-0.5 md:m-1 w-0.5 md:w-1 bg-white rounded-full h-0.5 md:h-1" />
            <div className="m-0.5 md:m-1 w-0.5 md:w-1 bg-white rounded-full h-0.5 md:h-1" />
          </div>
          <div className="flex flex-col">
            <div className="m-0.5 md:m-1 w-0.5 md:w-1 bg-white rounded-full h-0.5 md:h-1" />
            <div className="m-0.5 md:m-1 w-0.5 md:w-1 bg-white rounded-full h-0.5 md:h-1" />
            <div className="m-0.5 md:m-1 w-0.5 md:w-1 bg-white rounded-full h-0.5 md:h-1" />
            <div className="m-0.5 md:m-1 w-0.5 md:w-1 bg-white rounded-full h-0.5 md:h-1" />
            <div className="m-0.5 md:m-1 w-0.5 md:w-1 bg-white rounded-full h-0.5 md:h-1" />
          </div>
          <div className="flex flex-col">
            <div className="m-0.5 md:m-1 w-0.5 md:w-1 bg-white rounded-full h-0.5 md:h-1" />
            <div className="m-0.5 md:m-1 w-0.5 md:w-1 bg-white rounded-full h-0.5 md:h-1" />
            <div className="m-0.5 md:m-1 w-0.5 md:w-1 bg-white rounded-full h-0.5 md:h-1" />
            <div className="m-0.5 md:m-1 w-0.5 md:w-1 bg-white rounded-full h-0.5 md:h-1" />
            <div className="m-0.5 md:m-1 w-0.5 md:w-1 bg-white rounded-full h-0.5 md:h-1" />
          </div>
          <div className="flex flex-col">
            <div className="m-0.5 md:m-1 w-0.5 md:w-1 bg-white rounded-full h-0.5 md:h-1" />
            <div className="m-0.5 md:m-1 w-0.5 md:w-1 bg-white rounded-full h-0.5 md:h-1" />
            <div className="m-0.5 md:m-1 w-0.5 md:w-1 bg-white rounded-full h-0.5 md:h-1" />
            <div className="m-0.5 md:m-1 w-0.5 md:w-1 bg-white rounded-full h-0.5 md:h-1" />
            <div className="m-0.5 md:m-1 w-0.5 md:w-1 bg-white rounded-full h-0.5 md:h-1" />
          </div>
          <div className="flex flex-col">
            <div className="m-0.5 md:m-1 w-0.5 md:w-1 bg-white rounded-full h-0.5 md:h-1" />
            <div className="m-0.5 md:m-1 w-0.5 md:w-1 bg-white rounded-full h-0.5 md:h-1" />
            <div className="m-0.5 md:m-1 w-0.5 md:w-1 bg-white rounded-full h-0.5 md:h-1" />
            <div className="m-0.5 md:m-1 w-0.5 md:w-1 bg-white rounded-full h-0.5 md:h-1" />
            <div className="m-0.5 md:m-1 w-0.5 md:w-1 bg-white rounded-full h-0.5 md:h-1" />
          </div>
          <div className="flex flex-col">
            <div className="m-0.5 md:m-1 w-0.5 md:w-1 bg-white rounded-full h-0.5 md:h-1" />
            <div className="m-0.5 md:m-1 w-0.5 md:w-1 bg-white rounded-full h-0.5 md:h-1" />
            <div className="m-0.5 md:m-1 w-0.5 md:w-1 bg-white rounded-full h-0.5 md:h-1" />
            <div className="m-0.5 md:m-1 w-0.5 md:w-1 bg-white rounded-full h-0.5 md:h-1" />
            <div className="m-0.5 md:m-1 w-0.5 md:w-1 bg-white rounded-full h-0.5 md:h-1" />
          </div>
          <div className="flex flex-col">
            <div className="m-0.5 md:m-1 w-0.5 md:w-1 bg-white rounded-full h-0.5 md:h-1" />
            <div className="m-0.5 md:m-1 w-0.5 md:w-1 bg-white rounded-full h-0.5 md:h-1" />
            <div className="m-0.5 md:m-1 w-0.5 md:w-1 bg-white rounded-full h-0.5 md:h-1" />
            <div className="m-0.5 md:m-1 w-0.5 md:w-1 bg-white rounded-full h-0.5 md:h-1" />
            <div className="m-0.5 md:m-1 w-0.5 md:w-1 bg-white rounded-full h-0.5 md:h-1" />
          </div>
          <div className="flex flex-col">
            <div className="m-0.5 md:m-1 w-0.5 md:w-1 bg-white rounded-full h-0.5 md:h-1" />
            <div className="m-0.5 md:m-1 w-0.5 md:w-1 bg-white rounded-full h-0.5 md:h-1" />
            <div className="m-0.5 md:m-1 w-0.5 md:w-1 bg-white rounded-full h-0.5 md:h-1" />
            <div className="m-0.5 md:m-1 w-0.5 md:w-1 bg-white rounded-full h-0.5 md:h-1" />
            <div className="m-0.5 md:m-1 w-0.5 md:w-1 bg-white rounded-full h-0.5 md:h-1" />
          </div>
          <div className="flex flex-col">
            <div className="m-0.5 md:m-1 w-0.5 md:w-1 bg-white rounded-full h-0.5 md:h-1" />
            <div className="m-0.5 md:m-1 w-0.5 md:w-1 bg-white rounded-full h-0.5 md:h-1" />
            <div className="m-0.5 md:m-1 w-0.5 md:w-1 bg-white rounded-full h-0.5 md:h-1" />
            <div className="m-0.5 md:m-1 w-0.5 md:w-1 bg-white rounded-full h-0.5 md:h-1" />
            <div className="m-0.5 md:m-1 w-0.5 md:w-1 bg-white rounded-full h-0.5 md:h-1" />
          </div>
          <div className="flex flex-col">
            <div className="m-0.5 md:m-1 w-0.5 md:w-1 bg-white rounded-full h-0.5 md:h-1" />
            <div className="m-0.5 md:m-1 w-0.5 md:w-1 bg-white rounded-full h-0.5 md:h-1" />
            <div className="m-0.5 md:m-1 w-0.5 md:w-1 bg-white rounded-full h-0.5 md:h-1" />
            <div className="m-0.5 md:m-1 w-0.5 md:w-1 bg-white rounded-full h-0.5 md:h-1" />
            <div className="m-0.5 md:m-1 w-0.5 md:w-1 bg-white rounded-full h-0.5 md:h-1" />
          </div>
        </div>
        <div className="circle floating-right w-[80vh] h-[80vh] xl:w-[40vw] xl:h-[40vw] bg-neutral-50 blur-[150px] absolute rounded-full top-0 left-0" />
        <div className="circle floating-left w-[80vh] h-[80vh] xl:w-[40vw] xl:h-[40vw] bg-neutral-50 blur-[125px] absolute rounded-full right-0 bottom-0" />
      </div>
    </div>
  );
};

// const Footer = ({ menu, setMenu }) => {
//   return (
//     <div
//       id="footer"
//       className={`bg-neutral-900 text-gray-100 uppercase py-12 text-left ${
//         menu ? `hidden` : null
//       }`}
//     >
//       <div className="container mx-auto flex justify-center flex-col items-center">
//         <h1 className="text-lg sm:text-3xl font-bold text-center tracking-wide flex items-center">
//           Book Through Our Medias
//         </h1>
//         <div className="flex flex-wrap justify-center md:px-48 w-full xl:flex-row flex-col my-5">
//           <Media
//             icon={<PhoneIcon />}
//             name="209-209-2090"
//             location="https://www.google.com/search?q=danos%20detailing&rlz=1C1CHBF_enUS994US994&oq=danos+detailing&aqs=chrome.0.69i59j0i22i30l2j69i60l2.1684j0j7&sourceid=chrome&ie=UTF-8&tbs=lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:14&tbm=lcl&sxsrf=AJOqlzWMb_8XXTQtx4aolln1IADq8kE2UQ:1675667768148&rflfq=1&num=10&rldimm=9022223714700630377&lqi=Cg9kYW5vcyBkZXRhaWxpbmdI8erattO5gIAIWhkQABABGAAYASIPZGFub3MgZGV0YWlsaW5nkgEVY2FyX2RldGFpbGluZ19zZXJ2aWNlmgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVJDY1ZveWNuUjNSUkFCqgE3EAEaHhABIhoC_p_EphrJHbU6eDeRKe6jsgT3leTNFm2QoioTIg9kYW5vcyBkZXRhaWxpbmcoAOABAA&ved=2ahUKEwjo19PwrID9AhXRMX0KHTxVA7UQvS56BAgVEAE&sa=X&rlst=f#rlfi=hd:;si:9022223714700630377,l,Cg9kYW5vcyBkZXRhaWxpbmdI8erattO5gIAIWhkQABABGAAYASIPZGFub3MgZGV0YWlsaW5nkgEVY2FyX2RldGFpbGluZ19zZXJ2aWNlmgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVJDY1ZveWNuUjNSUkFCqgE3EAEaHhABIhoC_p_EphrJHbU6eDeRKe6jsgT3leTNFm2QoioTIg9kYW5vcyBkZXRhaWxpbmcoAOABAA;mv:[[37.7666356,-121.4281453],[37.7187723,-121.4793133]]"
//           />
//           <Media
//             icon={<InstagramIcon />}
//             name="@danosdetailing"
//             location="https://www.instagram.com/danosmobiledetailing/"
//           />
//           <Media
//             icon={<EmailIcon />}
//             name="danosdetailing@gmail.com"
//             location="mailto:danosdetailing@gmail.com"
//           />
//           <Media
//             icon={<GoogleIcon />}
//             name="Dano's Detailing"
//             location="https://www.google.com/search?q=danos%20detailing&rlz=1C1CHBF_enUS994US994&oq=danos+detailing&aqs=chrome.0.69i59j0i22i30l2j69i60l2.1684j0j7&sourceid=chrome&ie=UTF-8&tbs=lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:14&tbm=lcl&sxsrf=AJOqlzWMb_8XXTQtx4aolln1IADq8kE2UQ:1675667768148&rflfq=1&num=10&rldimm=9022223714700630377&lqi=Cg9kYW5vcyBkZXRhaWxpbmdI8erattO5gIAIWhkQABABGAAYASIPZGFub3MgZGV0YWlsaW5nkgEVY2FyX2RldGFpbGluZ19zZXJ2aWNlmgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVJDY1ZveWNuUjNSUkFCqgE3EAEaHhABIhoC_p_EphrJHbU6eDeRKe6jsgT3leTNFm2QoioTIg9kYW5vcyBkZXRhaWxpbmcoAOABAA&ved=2ahUKEwjo19PwrID9AhXRMX0KHTxVA7UQvS56BAgVEAE&sa=X&rlst=f#rlfi=hd:;si:9022223714700630377,l,Cg9kYW5vcyBkZXRhaWxpbmdI8erattO5gIAIWhkQABABGAAYASIPZGFub3MgZGV0YWlsaW5nkgEVY2FyX2RldGFpbGluZ19zZXJ2aWNlmgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVJDY1ZveWNuUjNSUkFCqgE3EAEaHhABIhoC_p_EphrJHbU6eDeRKe6jsgT3leTNFm2QoioTIg9kYW5vcyBkZXRhaWxpbmcoAOABAA;mv:[[37.7666356,-121.4281453],[37.7187723,-121.4793133]]"
//           />
//         </div>
//         <div className="text-center text-xs sm:text-sm max-w-md font-bold leading-6 tracking-wide flex flex-col items-center justify-center mt-5 px-1">
//           <p>&copy; Dano's Detailing, 2023 | All Rights Reserved </p>
//           <br />
//           <p className="italic">
//             * Please note that we are not liable for any swirls, scratches,
//             halos, leather damages, cloth damages, etc. prior to services or
//             after services. *
//           </p>
//           <br />
//           <p>Website made by Julian Jfouf</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// function Media({ icon, name, location }) {
//   return (
//     <a
//       href={`${location}`}
//       target="_blank"
//       className="flex items-center justify-center xl:my-10 my-4 xl:w-1/4 hover:text-blue-300 duration-300"
//     >
//       {icon}
//       <p className="pl-2 tracking-wider sm:text-base text-xs">{name}</p>
//     </a>
//   );
// }

// <div className="container mx-auto text-white flex">
//   <div className="w-1/2 flex flex-col items-center text-center p-8">
//     <Image width={128} height={64} src={Logo} />
//     <h3 className="text-xl font-semibold my-4">
//       Email us <br />
//       <span className="font-bold">danosmobiledetailing@gmail.com</span>
//     </h3>
//     <div className="flex items-center my-4">
//       <FaClock className="scale-[300%] m-10" />
//       <div>
//         <h3>Our Hours</h3>
//         <ul>
//           <li>Saturdays: 8 AM - 4 PM</li>
//           <li>Sundays: 8 AM - 4 PM</li>
//         </ul>
//       </div>
//     </div>
//     <div className="flex items-center my-4">
//       <FaPhone className="scale-[300%] m-10" />
//       <div>
//         <h3>Call us</h3>
//         (209) 209-2090
//       </div>
//     </div>
//     <div className="flex items-center my-4">
//       <FaMapMarker className="scale-[300%] m-10" />
//       <div>
//         <h3>Our Locations</h3>
//         Tracy, Mountain House, and China
//       </div>
//     </div>
//   </div>
//   <div className="w-1/2 p-8">
//     <h1 className="text-5xl">Book an appointment!</h1>
//     <form action="">
//       <div className="my-10 flex">
//         <div className="p-4">
//           <div className="flex flex-col">
//             <label htmlFor="">Name</label>
//             <input className="max-w-min text-black" type="name" />
//           </div>
//           <div className="flex flex-col">
//             <label htmlFor="">Email</label>
//             <input className="max-w-min text-black" type="email" />
//           </div>
//           <div className="flex flex-col">
//             <label htmlFor="">Phone</label>
//             <input className="max-w-min text-black" type="tel" />
//           </div>
//           <div className="flex flex-col">
//             <label htmlFor="" className="">
//               Year, Model, and Make of <br /> Vehicle
//             </label>
//             <input className="max-w-min text-black" type="text" />
//           </div>
//         </div>
//         <div className="p-4">
//           <label htmlFor="">Services</label>
//           <div className="flex gap-4">
//             <div className="py-4">
//               <label htmlFor="">Interior</label>
//               <div className="flex items-center">
//                 <label htmlFor="" className="mr-2">
//                   Full Interior Service
//                 </label>
//                 <input type="checkbox" name="Full Interior Service" id="" />
//               </div>
//               <div className="flex items-center">
//                 <label htmlFor="" className="mr-2">
//                   Seat/Carpet Shampoo
//                 </label>
//                 <input type="checkbox" name="Seat/Carpet Shampoo" id="" />
//               </div>
//               <div className="flex items-center">
//                 <label htmlFor="" className="mr-2">
//                   Pet Hair Removal
//                 </label>
//                 <input type="checkbox" name="Pet Hair Removal" id="" />
//               </div>
//               <div className="flex items-center">
//                 <label htmlFor="" className="mr-2">
//                   Stain Removal
//                 </label>
//                 <input type="checkbox" name="Stain Removal" id="" />
//               </div>
//             </div>
//             <div className="py-4">
//               <label htmlFor="">Exterior</label>
//               <div className="flex items-center">
//                 <label htmlFor="" className="mr-2">
//                   Full Interior Service
//                 </label>
//                 <input type="checkbox" name="Full Interior Service" id="" />
//               </div>
//               <div className="flex items-center">
//                 <label htmlFor="" className="mr-2">
//                   Seat/Carpet Shampoo
//                 </label>
//                 <input type="checkbox" name="Seat/Carpet Shampoo" id="" />
//               </div>
//               <div className="flex items-center">
//                 <label htmlFor="" className="mr-2">
//                   Pet Hair Removal
//                 </label>
//                 <input type="checkbox" name="Pet Hair Removal" id="" />
//               </div>
//               <div className="flex items-center">
//                 <label htmlFor="" className="mr-2">
//                   Stain Removal
//                 </label>
//                 <input type="checkbox" name="Stain Removal" id="" />
//               </div>
//             </div>
//           </div>
//           <div>
//             <label htmlFor="">Type</label>
//             <div className="flex gap-4">
//               <div className="flex items-center">
//                 <label htmlFor="" className="mr-2">
//                   Mobile (I come to you)
//                 </label>
//                 <input type="radio" name="type" id="" />
//               </div>
//               <div className="flex items-center">
//                 <label htmlFor="" className="mr-2">
//                   Home (You drop it off)
//                 </label>
//                 <input type="radio" name="type" id="" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="text-center flex flex-col w-full">
//         <label htmlFor="">Additional Information (Optional)</label>
//         <input type="text" name="" id="" />
//       </div>
//     </form>
//   </div>
// </div>

export default Footer;
