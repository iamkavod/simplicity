import React from "react";
import { Bg_Simplicity } from "../Assets";
import { Link } from "react-router-dom";

export default function Body() {
  return (
    <main className="absolute left-0 right-0 top-0 bottom-0 flex justify-center items-center">
      <div className="relative">
        <img
          src={Bg_Simplicity}
          className="absolute inset-0 object-center object-scale-down w-full h-full opacity-60"
          alt=""
        />
        <div className="relative bg-opacity-75">
          <div className="flex flex-col justify-center items-center px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-[20rem] lg:py-80 gap-5">
            <h1 className="text-white lg:text-7xl text-2xl text-center font-bruno-ace-sc font-extrabold">
              TRADING WITH THE ACT OF SIMPLICITY
            </h1>
            <p className="text-white lg:text-2xl text-sm text-center font-bruno-ace">
              Simplicity is the key in trading, we are here to give you the best
              of service{" "}
            </p>

            <Link
              to={"/signup"}
              className="p-5 w-80 bg-white text-primaryColor font-bruno-ace rounded-full font-bold text-center"
              >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
