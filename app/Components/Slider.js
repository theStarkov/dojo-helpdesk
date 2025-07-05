"use client";

import { Fragment, use, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import img1 from "../assets/images/Naana.jpeg";
import img2 from "../assets/images/img12.JPG";
import img3 from "../assets/images/img13.JPG";
import img4 from "../assets/images/img14.JPG";
import img5 from "../assets/images/img11.jpg";

export const Slider = () => {
  const images = [img1, img2, img3, img4, img5];
  const [currentBackground, setCurrentBackground] = useState(0);
  const [currentText, setCurrentText] = useState(0);
  const monthTheme = "THE GRACE OF OUR LORD JESUS CHRIST";
  const wordings = [
    "Jesus Christ",
    "The Holy Spirit",
    "The Heartbeat of God",
    "The Ancient Path",

    "Such Great Salvation",
    "It is Finished",
    "Thank You Jesus Christ",
    "Praise the Lord",
    "Give Thanks to the Lord",
    "Worship the Lord",
  ];

  //can't tell what's happening
  // const sayHello = () => {
  //     console.log("hello world")
  // }

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     current >= 0 && current < images.length - 1
  //       ? setCurrent(current + 1)
  //       : setCurrent(0);
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, [current]);
  //automatically created for pushes

  useEffect(() => {
    const backgroundInterval = setInterval(() => {
      setCurrentBackground((prevBackground) =>
        prevBackground >= 0 && prevBackground < images.length - 1
          ? prevBackground + 1
          : 0
      );
    }, 3000);

    const textInterval = setInterval(() => {
      setCurrentText((prevText) =>
        prevText >= 0 && prevText < wordings.length - 1 ? prevText + 1 : 0
      );
    }, 3000);

    return () => {
      clearInterval(backgroundInterval);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <Fragment>
      <div className="relative">
        {images.map((img, index) => (
          <div
            key={index}
            className={`h-screen w-screen absolute ease-in-out transition-all duration-700 ${
              currentBackground === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={img}
              className="h-full w-full object-cover object-center"
              alt=""
            />
          </div>
        ))}
        <div className="bg-[#050036] h-screen w-screen absolute opacity-60"></div>
        <div className="flex h-screen w-screen  items-center justify-center absolute">
          {/* <h1 className='text-white font-bold text-8xl'>Welcome to A Day with Him</h1> */}
          {/* <h2 className=' text-white text-base'><i>It is not just a day with Him but a life with Him</i></h2> */}
          {/* <div className='m-auto pt-12 max-w-screen-lg px-10'>
                        <p className='text-white font-bold text-6xl font-Ibarra'>The Ancient Path</p>
                    </div> */}
          <div className="m-auto pt-12 max-w-screen-lg px-10 hidden lg:block">
            <div className="flex w-full flex-col gap-3 ">
              <div className="grid  justify-center rounded p-6">
                <div className="text-[#C19503] text-center text-2xl  font-bold">
                  A DAY WITH HIM @ 5
                </div>

                {/* Adding skemishes */}
                {/* <div className="text-white text-2xl text-center p-4">
                  Celebrating 4 years of unbroken FELLOWSHIP with the LORD under
                  diverse themes
                </div>
                <div className="relative flex flex-col items-center justify-center pb-8 mb-2 lg:m-4 text-[#CBB105] font-bold text-4xl lg:text-5x">
                  {wordings.map((word, index) => (
                    <div
                      key={index}
                      className={`absolute ease-in-out transition-all duration-200 ${
                        currentText === index ? "opacity-100" : "opacity-0"
                      }`}
                      style={{ top: "20%", transform: "translateY(-50%)" }}
                    >
                      {word}
                    </div>
                  ))}
                </div> */}
                {/* <div className="mt-2 text-center text-3xl text-[#C19503] font-bold">
                  June 2025 Edition
                </div> */}

                <div className=" text-center font-bold text-white text-6xl ">
                  {/* <GradientText>{monthTheme}</GradientText> */}
                  {monthTheme}
                </div>
              </div>
              <div className="grid gap-6 md:grid-cols-2 items-center ">
                <div className="border-r-8 border-[#C19503] p-6  text-white">
                  <div className="grid grid-rows-3 pl-16 ml-16 ">
                    <div className="text-center text-bold text-2xl">
                      13th June 2025
                    </div>
                    <div className="text-center font-bold text-2xl text-[#C19503]">
                      {/*text-[#C19503] */}
                      to
                    </div>
                    <div className="text-center text-bold text-2xl">
                      14th June 2025
                    </div>
                    {/* <div className='text-right text-bold text-3xl text-yellow-600'><span className='flex items-left justify-end text-left'>NOV</span> <span className='text-right'>DEC</span></div> */}
                    {/* <div className='text-right text-bold text-2xl'>November, 2023</div> */}
                  </div>
                </div>
                <div className=" text-white">
                  <div className="grid grid-rows-1">
                    <div className="text-center text-bold mt-4 text-2xl m-auto ">
                      FRIDAY 7PM - SATURDAY 7PM
                    </div>
                    <div className="border-b-8 border-[#C19503]"></div>
                    <div className="text-center text-bold text-2xl">
                      GHANA GIRL GUIDES CENTRE
                    </div>
                    <div className="text-center text-bold text-lg tracking-wider ">
                      ACHIMOTA POLICE STATION
                    </div>
                  </div>
                </div>
                {/* <div class=" text-white align-left">
                                    <div className="grid grid-rows-1">
                                        <div className='text-left text-bold text-2xl text-yellow-600'>Venue:</div>
                                        <div className='text-left text-bold text-2xl'>UpCity Church</div>
                                        <div className='text-left text-bold text-2xl'>Madina</div>
                                    </div>
                                </div> */}
              </div>
            </div>
          </div>

          {/* For medium and smaller screens */}
          <div className="m-auto pt-3  lg:hidden">
            {/* Old Screen */}
            <div className="flex w-full flex-col gap-3">
              <div className="grid  justify-center rounded ">
                <div className="text-[#C19503] font-bold text-center text-xl">
                  A Day with Him @ 5
                </div>
                <div className="text-center font-bold text-white p-2 text-3xl">
                  {monthTheme}
                  {/* <GradientText>{monthTheme}</GradientText> */}
                </div>
              </div>
              <div clss="grid  md:grid-cols-3">
                <div className=" p-3  text-white">
                  <div className="grid grid-rows-2">
                    <div className="text-center text-xl text-[#C19503] font-bold">
                      Date:
                    </div>
                    <div className="text-center text-bold text-xl">
                      13th June 2025
                    </div>
                    <div className="text-center text-bold text-xl">to</div>
                    <div className="text-center text-bold text-xl">
                      14th June 2025
                    </div>
                  </div>
                </div>
                <div className=" p-3 text-white">
                  <div className="grid grid-rows-3">
                    <div className="text-center text-xl text-[#C19503] font-bold">
                      Time:
                    </div>
                    <div className="text-center text-bold text-xl">
                      7PM on Friday
                    </div>
                    <div className="text-center text-bold text-xl">to</div>
                    <div className="text-center text-bold text-xl">
                      7PM on Saturday
                    </div>
                  </div>
                </div>
                <div className=" p-3 text-white">
                  <div className="grid grid-rows-1">
                    <div className="text-center text-xl text-[#C19503] font-bold">
                      Venue:
                    </div>
                    <div className="text-center text-bold text-xl">
                      Ghana Girl Guides Center
                    </div>
                    <div className="text-center text-bold text-xl">
                      Achimota Police Station
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid justify-center z-10">
                {" "}
                <Link href="/registration">
                  <button className="text-white border bg-[#C19503] px-4 py-2 rounded">
                    Register Here
                  </button>
                </Link>
              </div>
            </div>{" "}
            *{/* New screen */}
            {/* <div className="flex w-full flex-col gap-3 "> */}
            {/* <div className="grid justify-center rounded "> */}
            {/* <div className="text-white font-bold text-center">
                  A Day WITH HIM @ 4
                </div> */}
            {/* <div className="text-white text-center p-4">
                  Celebrating 4 years of unbroken FELLOWSHIP with the LORD under
                  diverse themes
                </div>
                <div className="relative flex flex-col items-center justify-center pb-8 mb-2 lg:m-4 text-[#CBB105] font-bold text-2xl lg:text-5x">
                  {wordings.map((word, index) => (
                    <div
                      key={index}
                      className={`absolute ease-in-out transition-all duration-200 ${
                        currentText === index ? "opacity-100" : "opacity-0"
                      }`}
                      style={{ top: "20%", transform: "translateY(-50%)" }}
                    >
                      {word}
                    </div>
                  ))}
                </div> */}
            {/* <div className="text-center text-base text-white font-bold">
                  Theme:
                </div>
                <div className="text-center font-bold text-[#B48800] text-3xl">
                  {monthTheme}
                </div> */}
            {/* </div> */}
            {/* <div class="grid grid-cols-3  m-2"> */}
            {/* Date column */}
            {/* <div class="p-4">
                  <div className="grid grid-rows-1">
                    <div className="text-center text-base text-[#C19503]">
                      Date:
                    </div>
                    <div className=" text-white text-center font-bold text-base">
                      10th May 24.
                    </div>
                    <div className="text-white text-center font-bold text-base">
                      11th May 24
                    </div>
                  </div>
                </div> */}
            {/* Time column */}
            {/* <div class="p-4">
                  <div className="grid grid-rows-1">
                    <div className="text-center text-base text-[#C19503]">
                      Time:
                    </div>
                    <div className="text-white text-center font-bold text-base">
                      Friday 7pm -
                    </div>
                    <div className="text-white text-center font-bold text-base">
                      Saturday 7pm
                    </div>
                  </div>
                </div> */}
            {/* Venue Column */}
            {/* <div class="p-4">
                  <div className="grid grid-rows-1">
                    <div className=" text-white text-center text-base text-[#C19503]">
                      Venue:
                    </div>
                    <div className=" text-white text-center font-bold text-base">
                      UpCity Church International, Madina
                    </div>
                  </div>
                </div> */}
            {/* </div> */}
            {/* <div className="grid justify-center z-10">
                <button
                  className="text-white border bg-blue-600 border-blue-600 px-4 py-2 rounded"
                  onClick={() => toRoute("/register")}
                >
                  Register Here
                </button>
              </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
