import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import pic1 from "/src/assets/IMG_3094.jpg";
import pic2 from "/src/assets/exterior Pictura.jpg";
import pic3 from "/src/assets/BMW vertical interior shot.jpg";
import Image from "next/image";

const Sliders = () => {
  const [sliderData, setSliderData] = useState([
    {
      id: 0,
      title: "Top-Notch Interior Details Whenever You Need",
      description:
        "We never stop striving for better quality for you and your precious car.",
      src: pic1,
    },
    {
      id: 1,
      title: "Premium Exterior Details Anytime You Want",
      description: "Providing much needed baths to vehicles around Tracy, CA.",
      src: pic2,
    },
    {
      id: 2,
      title: "The Best of the Best",
      description:
        "Whenever you need high quality results in a timely manner, Dano's Detailing will be there to perform.",
      src: pic3,
    },
  ]);

  const [currentSlideID, setCurrentSlideID] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(sliderData[0]);

  function renderSlide() {
    const slide = sliderData.filter((slides) => {
      return slides.id === currentSlideID;
    });
    setCurrentSlide(slide);
    // console.log(slide);
  }

  useEffect(() => {
    renderSlide();
  }, [currentSlideID]);

  function right() {
    const title = document.querySelector(`.slideTitle`);
    const description = document.querySelector(`.slideDescription`);
    const button = document.querySelector(`.slideButtonThis`);
    const sliding = document.querySelector(".slideSlider");

    setTimeout(() => {
      sliding.classList.add("!translate-x-0");
    });

    setTimeout(() => {
      title.classList.remove("!translate-y-0");
      title.classList.remove("!opacity-100");
    }, 450);
    setTimeout(() => {
      description.classList.remove("!translate-y-0");
      description.classList.remove("!opacity-100");
    }, 300);
    setTimeout(() => {
      button.classList.remove("!translate-y-0");
      button.classList.remove("!opacity-100");
    }, 150);
    setTimeout(() => {
      setCurrentSlideID((prev) => Math.abs(prev + 1) % 3);
      renderSlide();
    }, 1250);
  }

  function left() {
    const title = document.querySelector(`.slideTitle`);
    const description = document.querySelector(`.slideDescription`);
    const button = document.querySelector(`.slideButtonThis`);
    const sliding = document.querySelector(".slideSlider");

    setTimeout(() => {
      sliding.classList.add("!translate-x-0");
    });

    setTimeout(() => {
      title.classList.remove("!translate-y-0");
      title.classList.remove("!opacity-100");
    }, 450);
    setTimeout(() => {
      description.classList.remove("!translate-y-0");
      description.classList.remove("!opacity-100");
    }, 300);
    setTimeout(() => {
      button.classList.remove("!translate-y-0");
      button.classList.remove("!opacity-100");
    }, 150);
    setTimeout(() => {
      if (currentSlideID === 0) {
        setCurrentSlideID(2);
      } else if (currentSlideID === 1) {
        setCurrentSlideID(0);
      } else if (currentSlideID === 2) {
        setCurrentSlideID(1);
      }
      renderSlide();
    }, 1250);
  }

  function CustomPrevArrow() {
    return (
      <div
        onClick={left}
        className="flex items-center cursor-pointer rotate-180 mr-2 z-[1000] border h-10 w-10 rounded-full justify-center"
      >
        <svg
          viewBox="0 0 8 16"
          width="8"
          height="16"
          xlmns="http://www.w3.org/2000/svg"
          style={{
            height: "16px",
            width: "8px",
          }}
        >
          <path
            d="M7.268 9.547L0 16l4-8-4-8 7.268 6.453C7.715 6.82 8 7.377 8 8c0 .623-.285 1.18-.732 1.547z"
            className="fill-black"
          ></path>
        </svg>
      </div>
    );
  }

  function CustomNextArrow() {
    return (
      <div
        onClick={right}
        className="flex items-center cursor-pointer ml-2 z-[1000] border h-10 w-10 rounded-full justify-center"
      >
        <svg
          viewBox="0 0 8 16"
          width="8"
          height="16"
          xlmns="http://www.w3.org/2000/svg"
          style={{
            height: "16px",
            width: "8px",
          }}
        >
          <path
            d="M7.268 9.547L0 16l4-8-4-8 7.268 6.453C7.715 6.82 8 7.377 8 8c0 .623-.285 1.18-.732 1.547z"
            className="fill-black"
          ></path>
        </svg>
      </div>
    );
  }

  function Slide() {
    useEffect(() => {
      const title = document.querySelector(`.slideTitle`);
      const description = document.querySelector(`.slideDescription`);
      const button = document.querySelector(`.slideButtonThis`);
      const sliding = document.querySelector(".slideSlider");

      setTimeout(() => {
        sliding.classList.add("translate-x-[-100%]");
      }, 50);
      setTimeout(() => {
        button.classList.add("!opacity-100");
        button.classList.add("!translate-y-0");
      }, 450);
      setTimeout(() => {
        description.classList.add("!opacity-100");
        description.classList.add("!translate-y-0");
      }, 300);
      setTimeout(() => {
        title.classList.add("!opacity-100");
        title.classList.add("!translate-y-0");
      }, 150);
    }, [currentSlideID]);

    return (
      <div
        id="works"
        className="bg-white h-full flex justify-center items-center relative z-[10000000]"
      >
        <div className="bg-white absolute top-0 h-full w-screen"></div>
        <div className="absolute top-[10%] flex flex-col items-center">
          <h1 className="text-black md:text-4xl xs:text-2xl xl:text-6xl font-bold z-[100000000]">
            Check Out Our Work!
          </h1>{" "}
          <br />
          <a
            href="https://www.instagram.com/danosmobiledetailing/"
            target="_blank"
            className="text-center text-2xl text-neutral-600 hover:underline hover:text-black"
          >
            @danosmobiledetailing
          </a>
        </div>

        <div className="flex items-center justify-center h-full pt-60 pb-24 flex-col-reverse lg:flex-row gap-5 lg:gap-0 max-w-[240px] sm:max-w-[480px] md:max-w-[720px] xl:w-full xl:max-w-none mx-auto">
          <div className="lg:w-1/2 flex md:items-start items-center text-center justify-center flex-col md:!text-left">
            <a
              href="https://www.instagram.com/danosmobiledetailing/"
              target="_blank"
              className="overflow-hidden"
            >
              <h1
                className={`font-bold uppercase text-3xl max-w-lg translate-y-[100%] slideTitle duration-1000 transition-all cursor-pointer`}
              >
                {currentSlide[0]?.title}
              </h1>
            </a>
            <p
              className={`my-10 max-w-sm translate-y-20 slideDescription duration-1000 transition-all opacity-0`}
            >
              {currentSlide[0]?.description}
            </p>
            <a
              href="https://www.instagram.com/danosmobiledetailing/"
              target="_blank"
              className=""
            >
              <span
                onMouseEnter={() => {
                  const ring = document.querySelector(`.animationButtonSlide`);
                  ring.style.strokeDashoffset = "0";
                }}
                onMouseLeave={() => {
                  const ring = document.querySelector(`.animationButtonSlide`);
                  ring.style.strokeDashoffset = "70";
                }}
                className={`z-10 flex items-center text-center justify-center item uppercase text-sm tracking-wide duration-1000 transition-all opacity-0 translate-y-20 slideButtonThis cursor-pointer`}
              >
                See More
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
                            className={`animationButtonSlide duration-500`}
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
                          className="fill-black"
                        ></path>
                      </svg>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
          <div className="lg:w-1/2 relative overflow-hidden">
            <div className="absolute bg-white w-full h-full slideSlider duration-1000 z-[1000]" />
            <Image
              src={currentSlide[0]?.src}
              height={1024}
              width={1024}
              alt="car picture"
              className="my-5 z-[10000] max-h-[480px] aspect-auto object-contain px-2"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex pb-48 px-4 max-w-[240px] sm:max-w-[480px] md:max-w-[700px] lg:max-w-[720px] xl:w-full mx-auto justify-center items-center !container relative">
      <CustomPrevArrow />
      <Slider className="w-full flex justify-center items-center mx-auto">
        <Slide />
      </Slider>
      <CustomNextArrow />
    </div>
  );
};

export default Sliders;
