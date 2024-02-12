"use client";

import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import google from "../../../../public/assets/google.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { signUp } from "next-auth-sanity/client";

const defaultFormData = {
  email: "",
  name: "",
  password: "",
};

const Auth = () => {
  const [formData, setFormData] = useState(defaultFormData);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) router.push("/");
  }, [router, session]);

  const loginHandler = async () => {
    try {
      await signIn();
      router.push("/");
    } catch (error) {
      console.log(error);
      toast.error("Something wen't wrong");
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const user = await signUp(formData);
      if (user) {
        toast.success("Success. Please sign in");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something wen't wrong");
    } finally {
      setFormData(defaultFormData);
    }
  };

  return (
    <section className="flex flex-col md:flex-row items-center mb-10">
      <div
        className="sm:h-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-[40%] h-3/4 px-6 lg:px-16 xl:px-12
          flex items-center justify-center rounded-3xl"
      >
        <div className="w-full h-100">
          <h1 className="text-xl text-gradient md:text-2xl font-bold leading-tight mt-12">
            Create an account
          </h1>

          <form className="mt-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-300">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 mt-2 border focus:border-[#33bbcf]
                  focus:bg-gray-700 focus:outline-none"
                required
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>

            <div className="mt-4">
              <label className="block text-gray-300">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email Address"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 mt-2 border focus:border-[#33bbcf] focus:bg-gray-700 focus:outline-none"
                required
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <div className="mt-4">
              <label className="block text-gray-300">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 mt-2 border focus:border-[#33bbcf]
                  focus:bg-gray-700 focus:outline-none"
                required
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>

            <div className="text-right mt-2">
              <Link
                href="/auth/forgot-password"
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
              Sign Up
            </button>
          </form>

          <hr className="my-6 border-gray-300 w-full" />

          <button
            type="button"
            className="flex items-center justify-center w-full bg-gray-100 hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
            onClick={loginHandler}
          >
            <Image
              src={google}
              alt="Google logo"
              className="object-contain mr-4 w-[40px] h-[40px]"
            />
            <span>Log in with Google</span>
          </button>

          <p className="mt-8">
            Have an account?{" "}
            <button
              onClick={loginHandler}
              className="text-[#7de7eb] hover:text-[#33bbcf] font-semibold"
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Auth;
