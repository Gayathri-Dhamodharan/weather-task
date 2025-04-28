import axios from "axios";

export async function saveSearchHistory(searchData) {
  try {
    const response = await axios.post("/api/store_search", searchData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("Search history response", response);
    return response.data;
  } catch (error) {
    console.error("Error saving search history:", error);
    throw error;
  }
}
