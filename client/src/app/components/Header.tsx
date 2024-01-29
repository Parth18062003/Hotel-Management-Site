import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <header className="py-10 px-4 container mx-auto text-xl flex flex-wrap md:flex-nowrap items-center justify-between">
        <div className="flex items-center md:2/3" style={{border:"1px solid red"}}>
          <Link href="/" className="font-black text-[#f27405]">
            Hotellz
          </Link>
          <ul className="flex items-center ml-5">
            <li className="flex items-center">
              <Link href="" className="cursor-pointer">
                Hello
              </Link>
            </li>
            <li className="ml-2">Darkmode </li>
          </ul>
        </div>
        <ul className="flex items-center justify-between w-full md:w-1/3 mt-2">
          <li className="hover:-translate-y-2 duration-500 transition-all">
            <Link href="/login" className="cursor-pointer">
              Home</Link>
          </li>
          <li className="hover:-translate-y-2 duration-500 transition-all">
            <Link href="/login" className="cursor-pointer">
              Home</Link>
          </li>
          <li className="hover:-translate-y-2 duration-500 transition-all">
            <Link href="/login" className="cursor-pointer">
              Home</Link>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
