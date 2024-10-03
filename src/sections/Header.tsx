"use client";
import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import menuIcon from "@/assets/menu.svg";
import CBFlogo from "@/assets/carbonfootprintlogo.webp";
export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          streamline your workflow and boost your productivity
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>get started for free</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={CBFlogo} alt="abc" height={70} width={70} />
            <Image src={menuIcon} alt="abc" className="h-5 w-5 md:hidden" />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="#">Software</a>
              <a href="#">Solutions</a>
              <a href="#">Carbon Footprint</a>
              <a href="#">Updates</a>
              <a href="#">Help</a>
              <button className="btn btn-primary">get for free</button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
