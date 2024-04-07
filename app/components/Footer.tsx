"use client";
import Image from "next/image";
import React from "react";
import { openInNewTab } from "../page";

const Footer = () => {
  return (
    <div className="h-80 bg-slate-900 grid grid-cols-12 pt-16">
      <div className="col-span-6 mx-40">
        <div className="cursor-pointer flex items-center w-fit">
          <Image
            className="rounded-xl"
            src="https://media.licdn.com/dms/image/D4E0BAQHc0pGF4paq0w/company-logo_200_200/0/1708040782548/yarn_so_logo?e=2147483647&v=beta&t=sPXbq045fUCTPzujyCl3M_qEKKhARFDGlPjyl5aKjpA"
            width={40}
            height={40}
            alt="Picture of the Yarn Logo"
          />
          <div className="pl-2 font-bold text-2xl">Yarn</div>
        </div>
        <div className="mt-2 text-slate-400">
          Create agency-quality product videos, sales demos, and help guides –
          in minutes.
        </div>
      </div>
      <div className="col-span-3 w-fit">
        <ul>
          <li>Resources</li>
          <li className="text-slate-400 pt-2 py-1">hey@yarn.so</li>
          <li
            className="text-slate-400 hover:text-white cursor-pointer"
            onClick={() => openInNewTab("https://www.yarn.so/terms")}
          >
            Terms of Service
          </li>
          <li
            className="text-slate-400 hover:text-white cursor-pointer py-1"
            onClick={() => {
              openInNewTab("https://www.yarn.so/privacy");
            }}
          >
            Privacy Policy
          </li>
        </ul>
      </div>
      <div className="col-span-3">
        <div className="flex justify-center items-center mt-2">
          <div className=" text-slate-500 mr-1">Backed By</div>
          <div className="mx-2">
            <Image
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Y_Combinator_logo.svg/1200px-Y_Combinator_logo.svg.png"
              }
              width={30}
              height={30}
              alt="Picture of Y Combinator Logo"
            />
          </div>
          <div className="text-ycombinator text-xl">Combinator</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

