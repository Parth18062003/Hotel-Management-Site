import React from "react";

const Testimonials = () => {
  return (
    <>
      <section className="container">
        <div className="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="md:flex md:items-end md:justify-between">
            <div className="max-w-xl">
              <h2 className="text-4xl font-semibold tracking-tight text-gray-200 sm:text-5xl">
                Read trusted reviews from our customers
              </h2>
            </div>

            <a
              href="#"
              className="mt-6 inline-flex shrink-0 items-center gap-2 rounded-full border border-[#5ce1e6] px-5 py-3 text-[#33bbcf] transition hover:bg-[#33bbcf] hover:text-white md:mt-0"
            >
              <span className="font-medium"> Read all reviews </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 rtl:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            <blockquote className="flex h-full flex-col justify-between bg-gray-200 p-6 shadow-sm sm:p-8">
              <div>

                <div className="mt-4">
                  <p className="text-2xl font-bold text-orange-500 sm:text-3xl">
                    Stayin' Alive
                  </p>

                  <p className="mt-4 leading-relaxed text-gray-700">
                    No, Rose, they are not breathing. And they have no arms or
                    legs … Where are they? You know what? If we come across
                    somebody with no arms or legs, do we bother resuscitating
                    them? I mean, what quality of life do we have there?
                  </p>
                </div>
              </div>

              <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                &mdash; Michael Scott
              </footer>
            </blockquote>

            <blockquote className="flex h-full flex-col justify-between bg-gray-200 p-6 shadow-sm sm:p-8">
              <div>
                <div className="mt-4">
                  <p className="text-2xl font-bold text-orange-500 sm:text-3xl">
                    Stayin' Alive
                  </p>

                  <p className="mt-4 leading-relaxed text-gray-700">
                    No, Rose, they are not breathing. And they have no arms or
                    legs … Where are they? You know what? If we come across
                    somebody with no arms or legs, do we bother resuscitating
                    them? I mean, what quality of life do we have there?
                  </p>
                </div>
              </div>

              <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                &mdash; Michael Scott
              </footer>
            </blockquote>

            <blockquote className="flex h-full flex-col justify-between bg-gray-200 p-6 shadow-sm sm:p-8">
              <div>

                <div className="mt-4">
                  <p className="text-2xl font-bold text-orange-500 sm:text-3xl">
                    Stayin' Alive
                  </p>

                  <p className="mt-4 leading-relaxed text-gray-700">
                    No, Rose, they are not breathing. And they have no arms or
                    legs … Where are they? You know what? If we come across
                    somebody with no arms or legs, do we bother resuscitating
                    them? I mean, what quality of life do we have there?
                  </p>
                </div>
              </div>

              <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                &mdash; Michael Scott
              </footer>
            </blockquote>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
