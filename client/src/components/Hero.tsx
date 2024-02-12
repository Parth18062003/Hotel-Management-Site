import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <>
      <Image
        src="https://images.unsplash.com/photo-1506059612708-99d6c258160e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="hero image"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
          objectPosition: "bottom",
          zIndex: -1,
        }}
      />
      <div className="grid grid-cols-2">
        <div className="flex px-4 items-center gap-12 container md:mx-48 mx-0">
          <div className="py-10 h-full mt-12">
            <h1 className="mb-6 text-[3.40rem] md:text-[6rem] text-[#e8edee] leading-none">
              Elevating Hotel <span className="text-gradient font-medium">Experiences</span> Seamlessly
            </h1>
            <div className="flex justify-start">
            <button className="px-6 py-3 mt-5 bg-[#33bbcf] rounded-3xl">
              Explore
            </button>
            </div>
          </div>
        </div>
      </div>
      <div>2</div>
      <div>2000</div>
      <div>200</div>
      <div>2</div>
      <div>2000</div>
      <div>200</div>
      <div>2</div>
    </>
  );
};

export default Hero;
