import React from "react";
import { Footer, Header } from "../UI";

export default function Dexter() {
  return (
    <div className="bg-darkShade">
      <Header />

      <main className="absolute w-full">
        <div className="relative bg-opacity-75">
          <div className="flex flex-col justify-start px-4 py-32 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-7xl md:px-24 lg:px-56 lg:py-40 gap-5">
            <div className='flex flex-col gap-5'>
              <h1 className="text-white lg:text-4xl text-2xl font-bruno-ace-sc">
                Who is Dexter ?
              </h1>
              <div className='bg-white w-full h-1 rounded-sm'></div>
            </div>
            <p className="text-white lg:text-2xl text-sm font-bruno-ace">
              Dexter is the Founder of Simplicity Academy, he is a Forex Trader
              and ...
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
