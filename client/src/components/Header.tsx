"use client";

import Link from "next/link";
import React, { useState } from "react";
import menu from "../../public/assets/menu.svg";
import close from "../../public/assets/close.svg";
import Image from "next/image";
import { useSession } from "next-auth/react";

const Header = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const navLinks = [
    {
      id: "/",
      title: "Home",
    },
    {
      id: "Rooms",
      title: "Rooms",
    },
    {
      id: "Contact",
      title: "Contact",
    },
    {
      id: "auth",
      title: "Profile",
    },
  ];

  const { data: session } = useSession();
  return (
    <>
      <nav className="w-full flex py-6 justify-between items-center">
        <Link
          href="/"
          className="font-black sm:mx-16 text-gradient text-[36px]"
        >
          Hotellz
        </Link>
        <ul className="list-none sm:flex hidden justify-center items-center flex-1">
          {navLinks.map((nav, index) =>
            nav.id === "auth" && session?.user ? (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[22px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                onClick={() => setActive(nav.title)}
              >
                <Link href={`/users/${session.user.id}`}>Profile</Link>
              </li>
            ) : (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[22px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                onClick={() => setActive(nav.title)}
              >
                <Link href={`/${nav.id}`}>{nav.title}</Link>
              </li>
            )
          )}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <Image
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] mx-4 object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[26px] ${
                    active === nav.title ? "text-white" : "text-dimWhite"
                  } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                  onClick={() => setActive(nav.title)}
                >
                  <Link href={`${nav.id}`}>{nav.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
