import React from "react";
import { Footer, Header } from "../UI";
import { Bg_Simplicity } from "../Assets";

export default function About() {
  return (
    <div className="bg-darkShade">
      <Header />

      <main className="absolute w-full lg:mt-0 mt-10">
        <div className="relative bg-opacity-75">
          <div className="flex flex-col justify-start px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-7xl md:px-24 lg:px-56 lg:py-40 gap-5">
            <div className='flex flex-col gap-5 mt-5'>
              <h1 className="text-white lg:text-4xl text-2xl font-bruno-ace-sc">
                About us
              </h1>
              <div className="bg-white w-full h-1 rounded-sm"></div>
            </div>
            <p className="text-white lg:text-2xl text-sm font-bruno-ace">
              Simplicity is a financial trading academy with the sole aim of
              simplifying the financial market.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
