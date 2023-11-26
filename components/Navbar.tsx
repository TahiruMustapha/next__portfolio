import React from "react";
import { Socials } from "@/constants";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className="fixed top-0 z-40 bg-transparent h-[100px] w-full flex justify-between items-center px-10 md:px-20">
        <div className="flex flex-row items-center gap-3">
            <div className=" relative">
            <Image
            src='/horselogo.jpg'
            alt="logo"
            width={40}
            height={40}
            className="w-full h-full object-contain rounded-full"
            />
            </div>
        <h1 className="text-white text-[15px] md:text-[25px] font-semibold">Tahiru Dev</h1>
        </div>
        <div className="flex flex-row gap-5 mb-2">
            {Socials.map((social)=>(
                <Image
                key={social.name}
                src={social.src}
                alt={social.name}
                width={28}
                height={28}
                />
            ))}
        </div>
    </div>
  );
};

export default Navbar;
