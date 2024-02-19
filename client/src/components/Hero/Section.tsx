import React from "react";
import Image from "next/image";

const Section = () => {
  return (
    <>
      <div className="mt-36 container mx-auto flex flex-col lg:flex-row items-center justify-center py-8">
        {/* Left Side: Image */}
        <div className="lg:w-1/2">
          <Image
            src="https://images.unsplash.com/photo-1561501878-aabd62634533?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Section Image"
            width={720}
            height={720}
          />
        </div>

        {/* Right Side: Content */}
        <div className="lg:w-1/2 lg:px-8 px-3">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-200 mb-4">
            Large Heading
          </h2>
          <p className="text-lg lg:text-xl text-gray-400 leading-relaxed px-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </>
  );
};

export default Section;
