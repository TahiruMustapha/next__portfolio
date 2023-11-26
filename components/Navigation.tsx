"use client";
import { NavLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Transition from "./Transition";

const Navigation = () => {
  const [isRouting, setisRouting] = useState(false);
  const path = usePathname();
//   const [isActive, setisActive] = useState(path);
  const [prevPath, setPrevPath] = useState("/");

  useEffect(() => {
    if (prevPath !== path) {
      setisRouting(true);
    }
  }, [path, prevPath]);

  useEffect(() => {
    if (isRouting) {
      setPrevPath(path);
      const tiemOut = setTimeout(() => {
        setisRouting(false);
      }, 1200);
      return () => clearTimeout(tiemOut);
    }
  }, [isRouting]);
  return (
    <div
     style={{left:'20%'}}
    className=" absolute z-[50] py-7 -bottom-20 w-[50%] md:w-[20%] max-h-[1050px] bg-black px-4 rounded-full flex items-center justify-between border border-white">
        {isRouting && <Transition/>}
        {NavLinks.map((nav)=>(
              <Link
              key={nav.name}
              href={nav.link}
              className="mb-16 pl-4 min-w-[20%]"
              >
             <nav.icon className={`w-[24px] h-[24px] ${path === nav.name ? 'text-purple-800': 'text-white'}`}/>
              
              </Link>
        ))}
    </div>
  );
};

export default Navigation;
