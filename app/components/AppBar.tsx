import React from "react";
import Image from "next/image";
import LightModeIcon from "@mui/icons-material/LightMode";

const AppBar = () => {
  return (
    <div className="h-16 bg-slate-900 border-b border-slate-700 flex items-center justify-between px-40">
      <div className="flex items-center cursor-pointer">
        <Image
          className="rounded-xl"
          src="https://media.licdn.com/dms/image/D4E0BAQHc0pGF4paq0w/company-logo_200_200/0/1708040782548/yarn_so_logo?e=2147483647&v=beta&t=sPXbq045fUCTPzujyCl3M_qEKKhARFDGlPjyl5aKjpA"
          width={40}
          height={40}
          alt="Picture of the Yarn Logo"
        />
        <div className="pl-2 font-bold text-2xl">Yarn</div>
      </div>
    </div>
  );
};

export default AppBar;
