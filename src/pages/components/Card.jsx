import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Card({
  src,
  type,
  name,
  description,
  button,
  id,
  link,
  alt = false,
}) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const card = document.querySelector(`.card${id}`);
    const picture = document.querySelector(`.picture${id}`);
    const sub = document.querySelector(`.sub${id}`);
    const title = document.querySelector(`.title${id}`);
    const desc = document.querySelector(`.desc${id}`);
    const but = document.querySelector(`.but${id}`);
    if (!alt) {
      window.addEventListener("scroll", function () {
        const rect = card.getBoundingClientRect();
        if (rect.top + 100 < window.innerHeight) {
          card.classList.add("!translate-x-0");
          setTimeout(() => {
            picture.classList.add("!opacity-100");
          }, 1000);
          setTimeout(() => {
            sub.classList.add("!opacity-100");
            sub.classList.add("!translate-y-[0px]");
          }, 1250);
          setTimeout(() => {
            title.classList.add("!opacity-100");
            title.classList.add("!translate-y-[0px]");
          }, 1500);
          setTimeout(() => {
            desc.classList.add("!opacity-100");
            desc.classList.add("!translate-y-[0px]");
          }, 1750);
          setTimeout(() => {
            but.classList.add("!opacity-100");
            but.classList.add("!translate-y-[0px]");
          }, 2000);
        }
      });
    } else {
      card.classList.add("!translate-x-0");
      setTimeout(() => {
        picture.classList.add("!opacity-100");
      }, 1000);
      setTimeout(() => {
        sub.classList.add("!opacity-100");
        sub.classList.add("!translate-y-[0px]");
      }, 1250);
      setTimeout(() => {
        title.classList.add("!opacity-100");
        title.classList.add("!translate-y-[0px]");
      }, 1500);
      setTimeout(() => {
        desc.classList.add("!opacity-100");
        desc.classList.add("!translate-y-[0px]");
      }, 1750);
      setTimeout(() => {
        but.classList.add("!opacity-100");
        but.classList.add("!translate-y-[0px]");
      }, 2000);
    }
  }, []);

  return (
    <Link
      href={`/${link}`}
      className="overflow-hidden w-full md:w-1/2 flex justify-center items-end bg-neutral-800"
    >
      <div
        id={id}
        style={{ overflow: "hidden" }}
        className={`h-[66.66666vh] cursor-pointer w-full text-gray-100 relative flex justify-center items-end group overflow-hidden z-10 card${id} opacity-100 duration-500 delay-500 translate-x-[-100%]`}
      >
        <div className="absolute top-0 bg-black left-0 right-0 bottom-0 h-full w-full z-10 opacity-30 overflow-hidden"></div>
        <Image
          className={`w-full fixed aspect-auto object-cover h-full overflow-hidden picture${id} opacity-0`}
          style={{
            transition: "opacity 600ms ease",
          }}
          src={src}
          quality={100}
          alt="image"
        />
        <div
          className={`sliding w-full fixed aspect-auto object-cover h-full transition-transform overflow-hidden card${id} bg-neutral-600 z-[-1] transition-all`}
        ></div>
        <div className="flex flex-col text-center justify-baseline items-center font-bold mb-10 overflow-hidden">
          <p
            className={`z-10 text-xl translate-y-[10px] opacity-0 duration-700 transition-all sub${id}`}
          >
            {type}
          </p>
          <h1
            className={`z-10 uppercase text-4xl my-4 translate-y-[10px] opacity-0 duration-700 transition-all title${id}`}
          >
            {name}
          </h1>
          <p
            className={`z-10 mb-3 translate-y-[10px] opacity-0 duration-700 transition-all desc${id}`}
          >
            {description}
          </p>
          <span
            onMouseEnter={() => {
              const ring = document.querySelector(`.animationButton${id}`);
              ring.style.strokeDashoffset = "0";
            }}
            onMouseLeave={() => {
              const ring = document.querySelector(`.animationButton${id}`);
              ring.style.strokeDashoffset = "70";
            }}
            className={`z-10 flex items-center text-center justify-center item uppercase text-sm tracking-wide translate-y-[10px] duration-1000 transition-all opacity-0 but${id}`}
          >
            {button}
            <span className="relative text-white ml-1">
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
                        className={`animationButton${id} duration-500`}
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
            {/* <button className="bg-black rounded-full after:border after:border-1 after:border-red-500 after:absolute relative after:h-11 after:w-11 after:left-0 after:top-0 after:rounded-full flex items-center justify-center after:duration-300 overflow-hidden after:animate-spin after:transition-all">
              <FaAngleRight className="m-2.5 w-6 h-6" />
            </button> */}
            {/* <button className="bg-black rounded-full border border-1 border-blue-500">
              <FaAngleRight className="m-2.5 w-6 h-6" />
            </button> */}
          </span>
        </div>
      </div>
    </Link>
  );
}
