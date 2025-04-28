"use client";

import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import fetchCities from "../Services/fetchCities";

export default function Search({ place, setPlace, onSearchClick }) {
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState("no place available");
  // fetchCities().then((cities) => {
  //   // console.log(cities);
  // });

  // // Debounce search
  useEffect(() => {
    if (!place) {
      setOptions([]);
      return;
    }

    const delayDebounce = setTimeout(() => {
      setLoading(true);
      fetchCities(place)
        .then((cities) => {
          setOptions(cities);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching cities:", err);
          setLoading(false);
        });
    }, 40);

    return () => clearTimeout(delayDebounce);
  }, [place]);

  const handleSearchClick = () => {
    onSearchClick();
    setPlace(""); // optional clear
  };

  return (
    <div className="flex items-start m-4 w-full p-2 lg:border-b-2 lg:border-gray-400">
      <Autocomplete
        freeSolo
        loading={loading}
        options={options}
        inputValue={place}
        onInputChange={(event, newInputValue) => setPlace(newInputValue)}
        className="flex-1"
        sx={{
          flex: 1,
          "& .MuiInputBase-input": {
            color: "white",
          },
          "& .MuiInputLabel-root": {
            color: "gray",
          },
          "& .MuiOutlinedInput-root": {
            borderBottom: "2px solid rgba(255, 255, 255, 0.3)",
            "&.Mui-focused fieldset": {
              borderColor: "white",
            },
          },
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search city..."
            variant="standard"
            InputLabelProps={{ style: { color: "white" } }}
          />
        )}
      />

      <button
        onClick={handleSearchClick}
        className="text-sm text-white hover:text-gray-500 transition-all pt-1 p-1 md:p-2 lg:pb-3 mr-3"
      >
        <CiSearch className="text-2xl md:text-2xl lg:text-4xl" />
      </button>
    </div>
  );
}
