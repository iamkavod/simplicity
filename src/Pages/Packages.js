import React from "react";
import { Footer, Header } from "../UI";
import { Link } from "react-router-dom";

export default function Packages() {
  return (
    <div className="bg-darkShade">
      <Header />

      <main className="absolute w-full lg:mt-0 mt-12">
        <div className="relative bg-opacity-75">
          <div className="flex flex-col justify-start px-5 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-7xl md:px-24 lg:px-56 lg:py-40 gap-5">
            <div className="flex flex-col gap-5">
              <h1 className="text-white lg:text-4xl text-xl  font-bruno-ace-sc">
                What you will learn
              </h1>
              <div className="bg-white w-full h-1 rounded-sm"></div>
            </div>
            <ul className="list-disc text-white lg:text-2xl text-sm font-bruno-ace px-7">
              <li>Market Structure</li>
              <li>Advance Market Structure</li>
              <li>Liquidity</li>
              <li>Trading Ranges</li>
              <li>Entry Models</li>
              <li>The SBI [Full Breakdown]</li>
              <li>Directional Bias</li>
            </ul>

            <p className="text-white lg:text-2xl text-sm font-bruno-ace">
              <span>Note:</span> Vidoes will be available
            </p>

            <p className="text-white lg:text-2xl text-sm font-bruno-ace">
              <span className="font-bruno-ace-sc">Price </span>
              <span className="font-bruno-ace-sc font-extrabold">
                $100
              </span>{" "}
              [Discount at{" "}
              <span className="font-bruno-ace-sc font-extrabold">$50</span> for
              the first 50 persons]
            </p>

            <p className="lg:text-2xl text-sm text-white font-bruno-ace">
              <span className="font-bruno-ace-sc">Bonus: </span>Lifetime
              Mentorship
            </p>

            <Link
              to={"/signup"}
              className="lg:p-5 p-2 w-full bg-white text-primaryColor font-bruno-ace rounded-full font-bold lg:mt-10 mt-3 text-center"
            >
              Sign up
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
