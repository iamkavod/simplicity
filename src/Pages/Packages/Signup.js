import React, { useState } from "react";
import { Footer, Header } from "../../UI";
import { Confirmed } from "../../Assets";
import '../../App.css'

export default function Signup() {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return (
          <section className="absolute w-full bg-primaryColor bgScroll">
            <div className="relative bg-opacity-75">
              <div className="flex flex-col justify-start px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-7xl md:px-24 lg:px-56 lg:py-40 gap-5">
                <div className="flex flex-col gap-5 lg:mt-5 mt-20">
                  <h1 className="text-white lg:text-4xl text-sm font-bruno-ace">
                    Please Kindly Fill the form
                  </h1>
                  <div className="bg-white w-full h-1 rounded-sm"></div>
                </div>
                <form className="flex flex-col lg:gap-10 gap-6 w-full lg:mt-10 mt-2">
                  <input
                    placeholder="Name"
                    type="text"
                    className="bg-gray-500 lg:lg:p-4 p-3 rounded-full placeholder:text-gray-300 lg:placeholder:text-xl placeholder:text-sm text-white outline-none"
                  />
                  <input
                    placeholder="Email"
                    type="email"
                    className="bg-gray-500 lg:p-4 p-3 rounded-full placeholder:text-gray-300 lg:placeholder:text-xl placeholder:text-sm text-white outline-none"
                  />
                  <input
                    placeholder="Phone Number"
                    type="phone"
                    className="bg-gray-500 lg:p-4 p-3 rounded-full placeholder:text-gray-300 lg:placeholder:text-xl placeholder:text-sm text-white outline-none"
                  />
                  <input
                    placeholder="Telegram Username"
                    type="text"
                    className="bg-gray-500 lg:p-4 p-3 rounded-full placeholder:text-gray-300 lg:placeholder:text-xl placeholder:text-sm text-white outline-none"
                  />
                  <button
                    type="submit"
                    className="lg:p-5 p-3 w-80 bg-white text-primaryColor font-bruno-ace rounded-full font-bold lg:text-xl text-sm text-center w-full"
                    onClick={handleNextPage}
                  >
                    Sign up
                  </button>
                </form>
              </div>
            </div>
          </section>
        );
      case 2:
        return (
          <section className="absolute w-full bg-primaryColor">
            <div className="relative bg-opacity-75 w-full">
              <div className="flex flex-col justify-start px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-7xl md:px-24 lg:px-56 lg:py-40 gap-5 w-full">
                <div className="flex flex-col justify-center items-center px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-7xl md:px-24 lg:px-56 lg:py-40 gap-5 w-full">
                  <div className="flex flex-col gap-10">
                    <div className="flex flex-col justify-center items-center bg-white rounded-full lg:h-80 lg:w-80 h-60 w-60 gap-5">
                      <img src={Confirmed} alt="confirmed" className="lg:w-20 w-14" />
                      <p className="text-primaryColor text-sm font-bruno-ace px-10 text-center">
                        Your Informations has been recieved
                      </p>
                    </div>
                    <button
                      type="submit"
                      className="p-3 lg:p-5 bg-white text-primaryColor font-bruno-ace lg:text-xl text-sm rounded-full font-bold text-center w-full"
                    >
                      Proceed to payment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <main>
      <Header />
      <div>{renderPage()}</div>
      <Footer />
    </main>
  );
}
