import React from "react";
import Trendingpost from "../pages/Trendingpost";

const Header = () => {
  return (
    <>
      <div className="px-10">
        <header className="text-gray-600 body-font border-b-2">
          <div className="container mx-auto flex justify-between flex-wrap py-3 flex-col md:flex-row items-center">
            <p className="text-indigo-900 text-xl font-bold first-letter:text-3xl ">
              Barsaati media and tech
            </p>

            <button className="text-black font-medium inline-flex items-center bg-gray-100 border-0 py-2 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              Vaibhav Devaliya
            </button>
          </div>
        </header>

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <h2 className="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5">
              Kickstarter Actually Pinterest Brunch Bitters Occupy
            </h2>
            <div className="md:w-3/5 md:pl-6">
              <p className="leading-relaxed text-base">
                Taxidermy bushwick celiac master cleanse microdosing seitan.
                Fashion axe four dollar toast truffaut, direct trade kombucha
                brunch williamsburg keffiyeh gastropub tousled squid meh taiyaki
                drinking vinegar tacos.
              </p>
              <div className="flex md:mt-4 mt-6">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded">
                  Button
                </button>
                <p className="text-indigo-500 inline-flex items-center ml-4">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </p>
              </div>
            </div>
          </div>
        </section>
        <Trendingpost />
      </div>
    </>
  );
};

export default Header;
