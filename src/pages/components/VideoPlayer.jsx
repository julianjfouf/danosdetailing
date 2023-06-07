import dynamic from "next/dynamic";
import getConfig from "next/config";
import React, { useRef, useEffect, useState, Suspense } from "react";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const { publicRuntimeConfig } = getConfig();

const VideoPlayer = ({ menu }) => {
  return (
    <div
      style={{ objectFit: "cover" }}
      className={`z-[0] duration-500 absolute h-screen object-cover w-screen bottom-0 left-0 scale-[6] xs:scale-[5] sm:scale-[4] md:scale-[3.5] lg:scale-[2.5] xl:scale-[1.75] top-0 ${
        menu ? `translate-x-[25vw]` : null
      }`}
    >
      {/* <video
        style={{ objectFit: "contain" }}
        width="100%"
        height="100%"
        controls
        // muted={!audio}
      >
        <source src="src/pages/static/Video for the Jew.mp4" type="video/mp4" />
      </video> */}
      <ReactPlayer
        quality={100}
        style={{ objectFit: "cover" }}
        className="h-[100vh] w-[100vw] absolute top-0 left-0 bottom-0 right-0 z-[0] object-cover"
        url={`/Video for the Jew.mp4`}
        playing
        loop
        muted
        width="100vw"
        height="100vh"
      />
    </div>
  );
};

export default VideoPlayer;
