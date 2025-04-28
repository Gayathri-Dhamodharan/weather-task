import axios from "axios";

const fetchCities = async () => {
  try {
    const response = await axios.get(
      "https://countriesnow.space/api/v0.1/countries/population/cities"
    );

    if (!response.data || !response.data.data) {
      throw new Error("API error: No city data found");
    }

    // Extract city names
    const cityNames = response.data.data.map((item) => item.city);

    return cityNames;
  } catch (error) {
    // Log error details for debugging
    console.error("Error fetching cities:", error.message);
    return [];
  }
};

export default fetchCities;
