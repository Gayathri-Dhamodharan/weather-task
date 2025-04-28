import React from "react";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

const WeatherCard = ({ Dataofweathercard }) => {
  // console.log("Dataofweathercard", Dataofweathercard.location.country);
  const country = Dataofweathercard?.location?.country;
  let time = null;

  if (country !== "India") {
    time = Dataofweathercard?.location?.localtime?.split(" ")[1];
  }

  return (
    <div
      className={`flex flex-col lg:flex-row h-[100%]  lg:mb-4  lg:w-full lg:h-[25%] md:bg-black/20 rounded-xl items-center ${roboto.className} `}
    >
      {/* Celsius of the place */}
      <div className="flex justify-center items-center lg:w-1/3 w-full mb-4 lg:mb-0 ">
        <h1 className="text-3xl lg:text-7xl font-bold text-white/70">
          {Dataofweathercard?.current?.temp_c != null
            ? `${Dataofweathercard.current.temp_c}°C`
            : " "}
        </h1>
      </div>

      {/* Location, date, and condition */}
      <div className="flex flex-row justify-around lg:justify-evenly  items-center lg:w-2/3 w-full">
        {/* Place and date */}
        <div className="flex flex-col items-center  ">
          <p className="  text-lg lg:text-2xl font-medium text-white/70">
            {Dataofweathercard?.location?.name}
          </p>
          <p className=" text-xs lg:text-xl mt-1 text-white/80 justify-center items-center ">
            {Dataofweathercard?.location?.localtime?.split(" ")[0]}
            <p className=" justify-center items-center px-[25%] ">{time}</p>
          </p>
        </div>

        {/* Icon and condition */}
        <div className="flex flex-col items-center">
          <img
            src={
              `https:${Dataofweathercard?.current?.condition?.icon}` != null
                ? `${Dataofweathercard?.current?.condition?.icon}`
                : " "
            }
            // alt={Dataofweathercard?.current?.condition?.text}
            className="w-10 md:w-15 lg:w-18"
          />
          <p className=" text-sm md:text-xl lg:text-2xl  text-white/80">
            {Dataofweathercard?.current?.condition?.text != null
              ? `${Dataofweathercard?.current?.condition?.text}`
              : " "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
