"use client";
import Image from "next/image";
import Link from "next/link";
import { Slider } from "./Components/Slider";

import { useState } from "react";
import { MenuAlt2Icon, XIcon } from "@heroicons/react/solid";

export default function Home() {
  const [active, setActive] = useState(false);
  return (
    <div className="relative">
      <Slider />
      <div className="absolute h-screen w-screen">
        <div className="flex py-6 px-6 lg:px-32 text-sm justify-between items-center">
          <Image
            src="/logo.jpg"
            width={100}
            height={100}
            alt="logo"
            className="rounded-md"
          />
          <div className="hidden lg:flex space-x-4">
            {/* <button className="btn-secondary">Protocol Login</button> */}
            {/* <button className="btn-secondary hover:bg-white hover:text-black" onClick={() => toRoute('/about')}>About</button> */}
            {/* <button className="btn-primary">Verify</button> */}

            <Link href={"/registration"}>
              <button className="text-white border border-blue-600 px-4 py-2 rounded hover:bg-white hover:text-black">
                Register for ADWH
              </button>
            </Link>
          </div>

          {active === true ? (
            <XIcon
              className="h-8 lg:hidden text-white"
              onClick={() => setActive(false)}
            />
          ) : (
            <MenuAlt2Icon
              className="text-white h-8 lg:hidden"
              onClick={() => setActive(true)}
            />
          )}
        </div>

        {/* mobile nav */}
        <div
          className={`z-20 lg:hidden fixed bg-white ${
            active === true ? "h-screen w-screen" : "h-0 w-0"
          }`}
        >
          <div
            className={`flex-col relative items-start space-y-5 pt-8 px-6 ${
              active === true ? "flex" : "hidden"
            }`}
          >
            <Link href={"/registration"}>
              <button className="border border-blue-600 px-4 py-2 rounded hover:bg-white hover:tex-white hover:bg-blue-300">
                Register for ADWH
              </button>
            </Link>

            {/* <button className="border px-4 py-2 rounded w-full" onClick={() => toRoute('/about')}>About</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
