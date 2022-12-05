import Link from "next/link";
import React, { useEffect } from "react";
import {
  AiOutlineMenu,
  AiOutlineShoppingCart,
  AiOutlineMail,
} from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { BsFillTelephoneFill } from "react-icons/bs";

export default function Navbar() {
  const textShows = (e) => {
    const searchResult = document.querySelector("#searchresult");
    if (e.target.value === "") {
      searchResult.style.display = "none";
    } else {
      searchResult.style.display = "block";
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="flex items-center w-screen p-4 bg-[#161b33] text-white max-md:justify-between">
        {/* Menu Mobile */}
        <div className="text-2xl hidden max-md:flex">
          <AiOutlineMenu />
        </div>
        {/* Logo */}
        <div className="text-4xl font-bold cursor-pointer w-1/4 flex justify-center">
          <Link href='/'>Logo</Link>
        </div>
        {/* Search & Category */}
        <div className="w-1/2 relative max-md:hidden">
          <input
            type="text"
            className="w-full p-1 px-2 rounded-full bg-white/50 border placeholder-white"
            placeholder="Search..."
            onChange={textShows}
          />
          <div
            className="absolute w-full mt-[2px] bg-white text-black shadow-md hidden"
            id="searchresult"
          >
            <div className="hover:bg-slate-700/40">TEST</div>
            <div className="hover:bg-slate-700/40">TEST</div>
            <div className="hover:bg-slate-700/40">TEST</div>
            <div className="hover:bg-slate-700/40">TEST</div>
            <div className="hover:bg-slate-700/40">TEST</div>
            <div className="hover:bg-slate-700/40">TEST</div>
            <div className="hover:bg-slate-700/40">TEST</div>
          </div>
        </div>
        {/* Right Section */}
        <div className="flex text-3xl cursor-pointer w-1/4 justify-end max-md:hidden">
          <RxAvatar className="hover:scale-110 rounded-full duration-300 ease-in-out" />
          <AiOutlineShoppingCart className="ml-4 hover:scale-110 duration-300 ease-in-out" />
        </div>
      </nav>
      {/* Navbar Ends */}
      {/* Small Parts */}
      <div className="w-screen max-md:hidden px-4 bg-[#161b33] text-white/40 flex justify-between">
        {/* Services etc */}
        <div className="flex">
          <Link
            href="/why"
            className="font-bold text-sm hover:text-white duration-100 ease-in-out mx-2"
          >
            WHY USE MARKETING LIST?
          </Link>
          <Link
            href="/services"
            className="font-bold text-sm hover:text-white duration-100 ease-in-out mx-2"
          >
            SERVICES
            <div className=""></div>
          </Link>
          <Link
            href="/blog"
            className="font-bold text-sm hover:text-white duration-100 ease-in-out mx-2"
          >
            BLOG
          </Link>
          <Link
            href="/faq"
            className="font-bold text-sm hover:text-white duration-100 ease-in-out mx-2"
          >
            FAQ
          </Link>
        </div>
        {/* Contact */}
        <div className="flex items-center">
          <AiOutlineMail />
          <a
            href=""
            className="font-bold text-sm ml-1 hover:text-white duration-300 ease-in-out"
          >
            CONTACT
          </a>
          <span className="text-xs mb-1 mx-3">|</span>
          <div className="flex items-center">
            <BsFillTelephoneFill className="text-sm mr-1 " />
            <a
              href=""
              className="font-bold text-sm ml-1 hover:text-white duration-300 ease-in-out"
            >
              1800 961 500
            </a>
          </div>
        </div>
      </div>
      {/* Small part Ends */}
      {/* Small part II */}
      <div className="w-screen flex bg-[#161b33] py-4 max-lg:hidden">
        <ul className="flex">
          <li>
            <Link
              className="font-bold text-xs hover:bg-black/20 duration-100 ease-in-out py-2 px-4 bg-white/20 mx-2 rounded border text-slate-300"
              href="/product"
            >
              All Category
            </Link>
          </li>
          <li>
            <Link
              className="font-bold text-xs hover:bg-black/20 duration-100 ease-in-out py-2 px-4 bg-white/20 mx-2 rounded border text-slate-300"
              href="/product/health"
            >
              Health
            </Link>
          </li>
          <li>
            <Link
              className="font-bold text-xs hover:bg-black/20 duration-100 ease-in-out py-2 px-4 bg-white/20 mx-2 rounded border text-slate-300"
              href="/product/education"
            >
              Education
            </Link>
          </li>
          <li>
            <Link
              className="font-bold text-xs hover:bg-black/20 duration-100 ease-in-out py-2 px-4 bg-white/20 mx-2 rounded border text-slate-300"
              href="/product/mixedbusiness"
            >
              Mixed Businesses
            </Link>
          </li>
          <li>
            <Link
              className="font-bold text-xs hover:bg-black/20 duration-100 ease-in-out py-2 px-4 bg-white/20 mx-2 rounded border text-slate-300"
              href="/product/service"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              className="font-bold text-xs hover:bg-black/20 duration-100 ease-in-out py-2 px-4 bg-white/20 mx-2 rounded border text-slate-300"
              href="/product/arts"
            >
              Arts & Culture
            </Link>
          </li>
          <li>
            <Link
              className="font-bold text-xs hover:bg-black/20 duration-100 ease-in-out py-2 px-4 bg-white/20 mx-2 rounded border text-slate-300"
              href="/product/retail"
            >
              Retail
            </Link>
          </li>
          <li>
            <Link
              className="font-bold text-xs hover:bg-black/20 duration-100 ease-in-out py-2 px-4 bg-white/20 mx-2 rounded border text-slate-300"
              href="/product/manufacture"
            >
              Manufacturing
            </Link>
          </li>
          <li>
            <Link
              className="font-bold text-xs hover:bg-black/20 duration-100 ease-in-out py-2 px-4 bg-white/20 mx-2 rounded border text-slate-300"
              href="/product/other"
            >
              Others
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
