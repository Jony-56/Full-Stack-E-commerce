import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white min-h-screen">
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-12 sm:py-16 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <Title title={"ABOUT"} desc={"US"} />
          <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Timeless style, trusted quality, and a better shopping experience—made for you.
          </p>
        </div>

        {/* Main Grid */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Image side */}
          <div className="relative">
            <div className="relative group">
              <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-r from-black/10 to-gray-600/10 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500" />
              <div className="relative rounded-2xl overflow-hidden border border-gray-200/60 shadow-2xl bg-white">
                <img
                  src={assets.about_img}
                  alt="About Forever"
                  className="w-full h-64 sm:h-80 lg:h-[520px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/5 to-transparent" />

                {/* Badge */}
                <div className="absolute left-4 bottom-4 sm:left-6 sm:bottom-6 bg-white/90 backdrop-blur px-4 py-2 rounded-xl border border-white/60 shadow-sm">
                  <p className="text-xs sm:text-sm text-gray-600">
                    Trusted by{" "}
                    <span className="font-semibold text-gray-900">thousands</span> of customers
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-5 grid grid-cols-3 gap-3 sm:gap-4">
              <div className="bg-white/80 backdrop-blur border rounded-2xl p-4 text-center shadow-sm">
                <p className="text-lg sm:text-xl font-semibold text-gray-900">4.8★</p>
                <p className="text-xs sm:text-sm text-gray-600">Avg rating</p>
              </div>
              <div className="bg-white/80 backdrop-blur border rounded-2xl p-4 text-center shadow-sm">
                <p className="text-lg sm:text-xl font-semibold text-gray-900">Fast</p>
                <p className="text-xs sm:text-sm text-gray-600">Shipping</p>
              </div>
              <div className="bg-white/80 backdrop-blur border rounded-2xl p-4 text-center shadow-sm">
                <p className="text-lg sm:text-xl font-semibold text-gray-900">100%</p>
                <p className="text-xs sm:text-sm text-gray-600">Quality</p>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div className="space-y-6 sm:space-y-7">
            {/* Intro */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 sm:p-8 shadow-sm border border-gray-200/60">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Fashion that feels like you
              </h2>

              <div className="mt-4 space-y-4">
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Welcome to <span className="font-semibold text-black">Forever</span>, your
                  destination for fashion and lifestyle. We believe style should be{" "}
                  <span className="font-medium">accessible</span>,{" "}
                  <span className="font-medium">affordable</span>, and{" "}
                  <span className="font-medium">timeless</span>.
                </p>

                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Founded with a passion for quality and customer satisfaction, we carefully
                  curate every piece to meet high standards of comfort, durability, and design.
                </p>
              </div>

              {/* Mini highlights */}
              <div className="mt-5 flex flex-wrap gap-2">
                {["Premium picks", "Everyday essentials", "New arrivals weekly"].map((t) => (
                  <span
                    key={t}
                    className="text-xs sm:text-sm px-3 py-1 rounded-full border bg-gray-50 text-gray-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Mission */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 sm:p-8 shadow-sm border border-gray-200/60">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                Our mission
              </h3>
              <p className="mt-3 text-gray-700 text-sm sm:text-base leading-relaxed">
                We’re here to help you express your personality through fashion—whether you’re
                building a daily wardrobe or searching for statement pieces. Shopping should be
                simple, enjoyable, and inspiring.
              </p>
            </div>

            {/* Why choose */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 sm:p-8 shadow-sm border border-gray-200/60">
              <h3 className="text-lg sm:text-2xl font-bold text-gray-900">
                Why choose Forever?
              </h3>

              <ul className="mt-5 space-y-3 sm:space-y-4">
                {[
                  "Premium quality materials and craftsmanship",
                  "Trendy and timeless designs",
                  "Affordable pricing for everyone",
                  "Fast and reliable shipping",
                  "Friendly customer support",
                ].map((text) => (
                  <li key={text} className="flex items-start gap-3">
                    <span className="mt-2 w-2.5 h-2.5 rounded-full bg-black flex-shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button className="bg-black text-white px-5 py-2.5 rounded-lg hover:bg-gray-800 transition text-sm font-medium">
                  Shop New Arrivals
                </button>
                <button className="border px-5 py-2.5 rounded-lg hover:bg-gray-50 transition text-sm font-medium">
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;
