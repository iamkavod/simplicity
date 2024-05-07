import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;

    // Determine the active button based on the current URL path
    if (pathname === "/") {
      setActiveButton("Home");
    } else if (pathname === "/about") {
      setActiveButton("About");
    } else if (pathname === "/packages") {
      setActiveButton("Packages");
    } else if (pathname === "/dexter") {
      setActiveButton("Dexter");
    } else {
      setActiveButton(""); // Reset active button if path doesn't match
    }
  }, [location]);

  return (
    <div className="px-4 py-3 mt-10 fixed lg:w-full md:w-[90%] w-[94%] right-0 left-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-5 border border-white rounded-full z-30">
      <div className="relative flex items-center justify-between">
        <a href="/" aria-label="Simplicity" title="Simplicity" className="inline-flex items-center">
          <span className="ml-2 lg:text-xl md:text-lg text-[8px] font-bruno-ace-sc font-bold tracking-wide text-white uppercase">
            Simplicity
          </span>
        </a>
        <ul className="flex items-center hidden gap-20 lg:flex">
          <li>
            <a
              href="/"
              aria-label="Our product"
              title="Our product"
              className={`${
                activeButton === "Home" ? "active-button" : "inactive-button"
              }`}
            >
              Home
            </a>
          </li>
          <li>
            <Link
              to={"/about"}
              aria-label="About Us"
              title="About Us"
              className={`${
                activeButton === "About" ? "active-button" : "inactive-button"
              }`}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to={"/packages"}
              aria-label="Packages"
              title="Packages"
              className={`${
                activeButton === "Packages" ? "active-button" : "inactive-button"
              }`}
            >
              Packages
            </Link>
          </li>
          <li>
            <Link
              to={"/dexter"}
              aria-label="Dexter"
              title="Dexter"
              className={`${
                activeButton === "Dexter" ? "active-button" : "inactive-button"
              }`}
            >
              Dexter
            </Link>
          </li>
        </ul>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-white" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <a
                      href="/"
                      aria-label="Simplicity"
                      title="Simplicity"
                      className="inline-flex items-center"
                    >
                      <span className="text-sm font-bold tracking-wide text-primaryColor font-bruno-ace-sc uppercase">
                        Simplicity
                      </span>
                    </a>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <a
                        href="/"
                        aria-label="Our product"
                        title="Our product"
                        className="font-medium tracking-wide text-primaryColor transition-colors duration-200 font-bruno-ace"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <Link
                        to={"/about"}
                        aria-label="About Us"
                        title="About Us"
                        className="font-medium tracking-wide text-primaryColor transition-colors duration-200 font-bruno-ace"
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/packages"}
                        aria-label="Packages"
                        title="Packages"
                        className="font-medium tracking-wide text-primaryColor transition-colors duration-200 font-bruno-ace"
                      >
                        Packages
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/dexter"}
                        aria-label="Dexter"
                        title="Dexter"
                        className="font-medium tracking-wide text-primaryColor transition-colors duration-200 font-bruno-ace"
                      >
                        Dexter
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
