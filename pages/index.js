import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/navbar/Navbar";

export default function Home() {
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
            <header className="custom-header my-5 bg-contain bg-no-repeat bg-center w-full flex justify-center items-center h-60">
              <h1 className="text-4xl font-bold text-white bg-black/40 p-10 rounded border">
                Write Your Future
              </h1>
            </header>
            {/* Main */}
            <div className="w-full p-10 grid grid-cols-3 gap-3">
              <div className="w-full h-80 bg-slate-400/70 border rounded text-4xl flex justify-center items-center text-white">
                Product
              </div>
              <div className="w-full h-80 bg-slate-400/70 border rounded text-4xl flex justify-center items-center text-white">
                Product
              </div>
              <div className="w-full h-80 bg-slate-400/70 border rounded text-4xl flex justify-center items-center text-white">
                Product
              </div>
              <div className="w-full h-80 bg-slate-400/70 border rounded text-4xl flex justify-center items-center text-white">
                Product
              </div>
              <div className="w-full h-80 bg-slate-400/70 border rounded text-4xl flex justify-center items-center text-white">
                Product
              </div>
              <div className="w-full h-80 bg-slate-400/70 border rounded text-4xl flex justify-center items-center text-white">
                Product
              </div>

              <div className="w-full h-80 bg-slate-400/70 border rounded text-4xl flex justify-center items-center text-white">
                Product
              </div>
              <div className="w-full h-80 bg-slate-400/70 border rounded text-4xl flex justify-center items-center text-white">
                Product
              </div>
            </div>
          </div>
          {/* Right Sidebar */}
          <div className="w-1/4 max-sm:w-screen flex flex-1 mt-5 mb-10 justify-center">
            <form action="mailto:someone@example.com" className="flex w-full rounded h-80 flex-col p-5 bg-[#161b33]">
              <span className="text-white">Contact US</span>
              <input type="text" className="my-3 rounded p-1" placeholder="Your Name" required/>
              <input type="email" className="my-3 rounded p-1" placeholder="Email address" required/>
              <input type='tel' className="my-3 rounded p-1" placeholder="Your Number" required/>
              <input type="text" name="comment" className="my-3 rounded p-1" placeholder="Comment" id="" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
