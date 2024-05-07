import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";
import { Right, Telegram, X } from "../Assets";

export default function Footer() {
  return (
    <div className="px-4 py-3 mt-10 fixed lg:w-full md:w-[90%] w-[94%] right-0 left-0 mx-auto sm:max-w-xl md:max-w-7xl lg:max-w-screen-2xl md:px-24 lg:px-8 border-b border-white rounded-full bottom-0 mb-10 z-20">
      <div className="relative flex items-center justify-between">
        <a
          href="/"
          aria-label="Company"
          title="Company"
          className="inline-flex items-center"
        >
          <span className="ml-2 lg:text-xl md:text-lg text-[8px] font-bruno-ace-sc font-bold tracking-wide text-white uppercase">
            Simplicity
          </span>
        </a>
        <div className="flex items-center lg:gap-10 md:gap-4 gap-0 lg:flex">
          <a href="#">
            <img
              src={Telegram}
              alt="Telegram"
              className="lg:w-12 md:w-10 w-8"
            />
          </a>
          <a href="#">
            <img src={X} alt="X" className="lg:w-12 md:w-10 w-8" />
          </a>
        </div>
        <div className="flex items-center lg:gap-4 md:gap-2 gap-0 lg:flex">
          <p className="text-white font-bruno-ace lg:text-xl md:text-lg text-[8px]">
          Copyright 2024
          </p>
        </div>
      </div>
    </div>
  );
}
