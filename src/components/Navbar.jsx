import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">Staltech</h1>
          <ul className="hidden md:flex">
            <li>Hjem</li>
            <li>Om</li>
            <li>Harver</li>
            <li>Home</li>
            <li>Kontakt oss</li>
          </ul>
        </div>

        <div className="md:hidden" onClick={handleClick}>
          {!nav ? <Bars3Icon className="w-5" /> : <XMarkIcon className="w-5" />}
        </div>
      </div>
      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        <li className="border-b-2 border-zinc-300 w-full">Hjem</li>
        <li className="border-b-2 border-zinc-300 w-full">Om</li>
        <li className="border-b-2 border-zinc-300 w-full">Harver</li>
        <li className="border-b-2 border-zinc-300 w-full">Home</li>
        <li className="border-b-2 border-zinc-300 w-full">Kontakt oss</li>
      </ul>
    </div>
  );
};

export default Navbar;
