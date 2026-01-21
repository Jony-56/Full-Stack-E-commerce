import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col sm:flex-row shadow-xl w-full overflow-hidden rounded-xl">
        {/* Left */}
        <div className="sm:flex-1 flex flex-col justify-center gap-5 px-4 py-8 sm:py-0 sm:px-8 md:px-16 lg:px-24 text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
            Discover Your <span className="text-blue-600">Style</span> with Our
            Exclusive Collection
          </h1>

          <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto sm:mx-0">
            Explore the latest trends in fashion and elevate your wardrobe with
            our curated selection of clothing and accessories.
          </p>

          <div className="flex justify-center sm:justify-start">
            <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition">
              Shop Now
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="sm:flex-1">
          <img
            src={assets.hero_img}
            alt="Hero"
            className="w-full h-64 sm:h-[50vh] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
