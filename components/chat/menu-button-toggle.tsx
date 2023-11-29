"use client";

import { Menu } from "lucide-react";

const MobileButtonToggle = () => {
  return (
    <Menu
      className="md-max:hidden w-6 h-6 cursor-pointer"
      onClick={() => {
        document.querySelector("#nav")!.classList.toggle("hidden");
        document.querySelector("#side")!.classList.toggle("hidden");
        document.querySelector("#nav-2")!.classList.toggle("md:pl-60");
        document.querySelector("#main")!.classList.toggle("pl-[72px]");
      }}
    />
  );
};

export default MobileButtonToggle;
