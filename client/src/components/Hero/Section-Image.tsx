import Image from "next/image";
import React from "react";

const SectionImage = () => {
  return (
    <>
      <div className="mt-16 md:mx-16 relative bg-cover bg-center h-screen">
        <Image
          src="https://images.unsplash.com/photo-1515404929826-76fff9fef6fe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="section image"
          className="absolute inset-0 w-full h-full object-cover object-bottom"
          height={2000}
          width={2000}
          priority={true}
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h2 className="text-4xl md:text-5xl text-center">Indulge in Unmatched Luxury: Your Ultimate Vacation Awaits</h2>
          <button className="px-6 py-3 mt-5 bg-gray-200 rounded-3xl text-black">
            Visit Now
          </button>
        </div>
      </div>
    </>
  );
};

export default SectionImage;
