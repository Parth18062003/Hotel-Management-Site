import React from "react";
import Link from "next/link";
import google from "../../../../public/assets/google.svg";
import Image from "next/image";

const Auth = () => {
  return (
    <section className="flex flex-col md:flex-row items-center mb-10">
      <div
        className="sm:h-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-[40%] h-3/4 px-6 lg:px-16 xl:px-12
          flex items-center justify-center rounded-3xl"
      >
        <div className="w-full h-100">
          <h1 className="text-xl text-gradient md:text-2xl font-bold leading-tight mt-12">
            Log in to your account
          </h1>

          <form className="mt-6" action="#" method="POST">
            <div>
              <label className="block text-gray-300">Email Address</label>
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter Email Address"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 mt-2 border focus:border-[#33bbcf] focus:bg-gray-700 focus:outline-none"
                required
              />
            </div>

            <div className="mt-4">
              <label className="block text-gray-300">Password</label>
              <input
                type="password"
                name=""
                id=""
                placeholder="Enter Password"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 mt-2 border focus:border-[#33bbcf]
                  focus:bg-gray-700 focus:outline-none"
                required
              />
            </div>

            <div className="text-right mt-2">
              <Link
                href="#"
                className="text-sm font-semibold text-gray-400 hover:opacity-75"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full block bg-[#33bbcf] hover:bg-[#5ce1e6] focus:bg-[#7de7eb] text-white font-semibold rounded-lg
                px-4 py-3 mt-6"
            >
              Log In
            </button>
          </form>

          <hr className="my-6 border-gray-300 w-full" />

          <button
            type="button"
            className="flex items-center justify-center w-full bg-gray-100 hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
          >
            <Image
              src={google}
              alt="Google logo"
              className="object-contain mr-4 w-[40px] h-[40px]"
            />
            <span>Log in with Google</span>
          </button>

          <p className="mt-8">
            Need an account?{" "}
            <Link
              href="#"
              className="text-[#7de7eb] hover:text-[#33bbcf] font-semibold"
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Auth;
