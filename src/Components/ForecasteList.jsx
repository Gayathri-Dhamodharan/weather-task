import React, { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

const ForecasteList = ({ DataforforecasteList }) => {
  const foreCast = DataforforecasteList?.forecast?.forecastday || [];
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount = 300;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`relative bg-black/30 p-1 lg:p-8  rounded-2xl shadow-lg lg:pt-10 w-full ${roboto.className}`}
    >
      <h2 className="max-md:hidden md:text-lg lg:text-xl font-semibold mb-2 text-white/70">
        Weather Forecaste
      </h2>

      {/* Arrow buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-3 top-2/4 -translate-y-1/2 z-10 bg-white/30 text-black p-1 rounded-full 
        shadow-md hover:scale-105 transition max-lg:hidden"
      >
        <FiChevronLeft size={20} />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-3 top-2/4 -translate-y-1/2 z-10 bg-white/30 text-black p-1 rounded-full 
        shadow-md hover:scale-105 transition max-lg:hidden"
      >
        <FiChevronRight size={20} />
      </button>

      {/* Scrollable forecast list */}
      <div
        ref={scrollRef}
        className="flex overflow-x-scroll gap-4 p-2 lg:mx-3 no-scrollbar scroll-smooth px-3 "
      >
        {foreCast.map((day, idx) =>
          idx === 0 ? (
            <></>
          ) : (
            <div
              key={idx}
              className="
              relative lg:bg-black/30 pb-4 lg:pt-6 lg:pb-8 rounded-xl flex-shrink-0 
              w-[50%]  md:w-[18%] lg:w-[15.2%]
            "
            >
              {/* Weather icon */}
              <div className="absolute -top-5 -left-5 p-4 z-50 pb-2">
                <img
                  src={`https:${day?.day?.condition?.icon}`}
                  alt={day?.day?.condition?.text}
                  className="w-10 lg:w-16"
                />
              </div>

              {/* Date */}
              <div className="mt-6 text-center text-xl font-semibold text-white/70">
                {new Date(day?.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })}
              </div>

              {/* Max wind */}
              <div className="text-center mt-3 text-lg text-white/60 font-bold">
                {day?.day?.maxwind_kph}°C
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ForecasteList;
