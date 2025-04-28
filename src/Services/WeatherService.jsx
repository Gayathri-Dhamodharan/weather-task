import axios from "axios";

const BASE_URL = "https://api.weatherapi.com/v1/forecast.json";
const API_KEY = "038aa25ba92f41caa2554813252104";

const WeatherService = async (location = "chennai") => {
  const url = `${BASE_URL}`;

  try {
    const { data } = await axios.get(url, {
      params: {
        key: API_KEY,
        q: location || "chennai",
        days: 11,
        aqi: "no",
        alerts: "no",
      },
    });

    return data;
  } catch (error) {
    console.error("WeatherService Error:", error.message);
    return null;
  }
};

export default WeatherService;
