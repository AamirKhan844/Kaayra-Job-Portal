import React from "react";
import { Search } from "lucide-react";

const HeroSection = () => {
  return (
    <>
      <section className="bg-50 py-15 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* badge */}
          <div className="bg-green-100 inline-flex items-center text-green-900 rounded-full px-4 py-1 text-sm mb-4 shadow-lg tracking-wide">
            ● Over 500+ jobs added this Week!
          </div>
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-850 ">
              Find you next Career move
              <br /> with{" "}
              <span>
                Job<span className="text-red-600">Portal</span>
              </span>
            </h1>
          </div>
          {/* avatars */}
          <div className="flex items-center justify-center mt-4">
            <div className="flex ">
              <img
                className="w-10 h-10 rounded-full border-2 border-white"
                src="https://i.pravatar.cc/100?img=1"
              />
              <img
                className="w-10 h-10 rounded-full border-2 border-white"
                src="https://i.pravatar.cc/100?img=2"
              />
              <img
                className="w-10 h-10 rounded-full border-2 border-white"
                src="https://i.pravatar.cc/100?img=3"
              />
              <img
                className="w-10 h-10 rounded-full border-2 border-white"
                src="https://i.pravatar.cc/100?img=4"
              />
              <img
                className="w-10 h-10 rounded-full border-2 border-white"
                src="https://i.pravatar.cc/100?img=5"
              />
            </div>
          </div>
          {/* stars */}
          <div className="flex items-center justify-center  text-xl text-yellow-400 mt-4">
            ★ ★ ★ ★ ★
          </div>
          {/* text */}
          <div className="mt-3">
            <p className="text-lg font-semibold">
              Loved by 100,000+ professionals
            </p>
          </div>
          <div>
            <p className="text-gray-500 max-w-2xl mx-auto mt-2">
              Join hundreds of professionals who have found their dream jobs
              through Jobfound. With over 3,000 active jobs and global
              opportunities, your next career move is just a click away.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
