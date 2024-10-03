"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import sustraxFuelImg from "@/assets/Screenshot (5).png";
// import SustraxElectricityImg from "@/assets/Screenshot (5).png";

export const ProductShowcase = () => {
  const progressCircle = useRef<SVGSVGElement>(null);
  const progressContent = useRef<HTMLSpanElement>(null);

  const onAutoplayTimeLeft = (swiper, time, progress) => {
    // Check if the refs are available
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty("--progress", `${1 - progress}`);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <section className="md:pt-[100px] bg-gradient-to-b from-[#ffffff] to-[#d2dcff] sm:p-[0px] p-[120px] ">
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="tag">Enhance your efficiency</div>
          </div>
          <h2 className="section-title">
            A more effective way to track progress
          </h2>
          <p className="section-description mt-5">
            Effortlessly calculate and reduce your carbon footprint with our
            intuitive, responsive tool. Make informed decisions and track your
            sustainability goals in just minutes.
          </p>
        </div>

        {/* Swiper section */}
        <div className="relative items-center mt-10 sm:pb-[40px] md:pb-[100px]">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper"
          >
            <SwiperSlide>
              <Image src={sustraxFuelImg} alt="Sustrax Fuel Image" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={sustraxFuelImg} alt="Sustrax Main Image" />
            </SwiperSlide>
            {/* Add more slides if needed */}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
