"use client";
import React from "react";

const CTA = () => {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center lg:flex lg:items-center lg:justify-between lg:text-left">
          <div className="space-y-8">
            <h2 className="max-w-xl mx-auto text-4xl font-bold text-gray-900 lg:mx-0 font-pj lg:pr-8 xl:pr-0">
              Effortless Website Creation Awaits You!
            </h2>
            <h4 className="text-2xl">
              Affordable. Customizable. Built with the tech stack you love.
            </h4>
          </div>
          <div className="flex-shrink-0 mt-8 sm:flex sm:items-center sm:justify-center lg:mt-0 lg:justify-end sm:space-x-5">
            <div className="relative inline-flex w-full mt-5 group sm:w-auto sm:mt-0">
              <div
                className="absolute duration-1000 rotate-180 transitiona-all opacity-70 -inset-px rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"
                style={{
                  background:
                    "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
                }}
              ></div>

              <a
                href="#"
                title=""
                className="
                                    relative
                                    inline-flex
                                    items-center
                                    justify-center
                                    w-full
                                    px-6
                                    py-3
                                    text-base
                                    font-bold
                                    text-white
                                    transition-all
                                    duration-200
                                    bg-[#05131c]
                                    border-2 border-transparent
                                    lg:w-auto
                                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900
                                    font-pj
                                    hover:bg-opacity-90
                                    rounded-xl
                                "
                role="button"
              >
                Download Rareblocks
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
