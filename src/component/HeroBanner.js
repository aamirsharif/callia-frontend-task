import React from "react";
import Logo from "./Logo";
import HeroCard from "./HeroCard";
import HeroImage from "./HeroImage";

const HeroBanner = () => {
  return (
    <div className="px-4 py-6 sm:px-6 md:px-8 lg:px-20">
      <div className="relative bg-imagebg flex items-center">
        <Logo />
        <div className="container mx-auto flex flex-col lg:flex-row items-center mb-0 justify-between gap-6">

          {/* Text Section */}
          <div className="lg:w-1/2 w-full text-center lg:text-left mt-12 md:mt-16 lg:mt-0 pb-0 lg:pb-20 pl-0 sm:pl-5 lg:pl-12 xl:pl-24 2xl:pl-56 transform lg:translate-x-8 lg:translate-y-24 xl:translate-x-14 xl:translate-y-36">
            <p className="text-xs sm:text-sm font-pacifico md:text-base text-gray-500 py-1 md:mb-4 opacity-0 animate-fadeIn delay-200">
              Easy ordering, in-season, budget-friendly.
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-playfair lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight opacity-0 animate-fadeIn delay-300">
              Wedding <br className="hidden sm:block" /> flowers made <br className="hidden sm:block" /> easy
            </h1>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 w-full h-full relative flex justify-center">
            <HeroImage />
            <HeroCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
