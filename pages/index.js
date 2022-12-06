import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer.js";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="index">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="Home" id="Home">
        <Navbar />
        {/* Body */}
        <div className="flex max-sm:flex-col">
          {/* Container */}
          <div className="container w-3/4 max-sm:w-screen ">
            {/* Header */}
            <header className=" my-5 w-full flex justify-center items-center h-60">
              <h1 className="text-4xl w-[50%] justify-center flex font-bold text-white bg-black/40 p-10 max-md:text-2xl rounded border">
                Category
              </h1>
            </header>
            {/* Main */}
            <div className="w-full p-10 grid max-md:grid-cols-2 grid-cols-3 gap-3">
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                className="w-full h-80 max-md:h-40 bg-slate-400/70 border rounded text-4xl flex justify-center items-center text-white"
              >
                Product
              </div>
              <div className="w-full h-80 max-md:h-40 bg-slate-400/70 border rounded text-4xl flex justify-center items-center text-white">
                Product
              </div>
              <div className="w-full h-80 max-md:h-40 bg-slate-400/70 border rounded text-4xl flex justify-center items-center text-white">
                Product
              </div>
              <div className="w-full h-80 max-md:h-40 bg-slate-400/70 border rounded text-4xl flex justify-center items-center text-white">
                Product
              </div>
              <div className="w-full h-80 max-md:h-40 bg-slate-400/70 border rounded text-4xl flex justify-center items-center text-white">
                Product
              </div>
              <div className="w-full h-80 max-md:h-40 bg-slate-400/70 border rounded text-4xl flex justify-center items-center text-white">
                Product
              </div>

              <div className="w-full h-80 max-md:h-40 bg-slate-400/70 border rounded text-4xl flex justify-center items-center text-white">
                Product
              </div>
              <div className="w-full h-80 max-md:h-40 bg-slate-400/70 border rounded text-4xl flex justify-center items-center text-white">
                Product
              </div>
            </div>
          </div>
          {/* Right Sidebar */}
          <div className="w-1/4 max-sm:w-screen flex flex-1 mt-5 mb-10 justify-center">
            <form
              action="mailto:someone@example.com"
              className="flex w-[80%] rounded h-[30rem] flex-col p-5 bg-[#161b33]"
            >
              <span className="text-white">Contact US</span>
              <input
                type="text"
                name="name"
                className="my-3 rounded p-1"
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="email"
                className="my-3 rounded p-1"
                placeholder="Email address"
                required
              />
              <input
                type="tel"
                name="tel"
                className="my-3 rounded p-1"
                placeholder="Your Number"
                required
              />
              <textarea className="flex" placeholder="Comment..."></textarea>
              <button className="w-full mt-5 rounded py-2 bg-slate-400">
                Submit
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
