let lastImageIndex = -1;

export function getWeatherFolder(weatherName) {
  if (!weatherName || typeof weatherName !== "string") return "Default";
  const name = weatherName.toLowerCase();

  switch (name) {
    case "sunny":
      return "Sunny";
    case "cloudy":
      return "Cloudy";
    case "rain":
      return "Rain";
    case "snow":
      return "Snow";
    case "mist":
      return "Mist";
    case "fog":
      return "Fog";
    case "overcast":
      return "Overcast";
    case "clear":
      return "Clear";
    default:
      if (name.includes("rain")) return "Rain";
      if (
        name.includes("snow") ||
        name.includes("sleet") ||
        name.includes("freez")
      )
        return "Snow";
      if (name.includes("cloud")) return "Cloudy";
      if (name.includes("sun")) return "Sunny";
      if (name.includes("fog")) return "Fog";
      if (name.includes("mist")) return "Mist";
      if (name.includes("overcast")) return "Overcast";
      if (name.includes("clear")) return "Clear";
      return "Default";
  }
}

export function getRandomImage(folder) {
  const totalImages = 4;
  let index = Math.floor(Math.random() * totalImages);

  while (index === lastImageIndex) {
    index = Math.floor(Math.random() * totalImages);
  }

  lastImageIndex = index;
  return `/assets/${folder}/${`${folder}${index + 1}`}.jpg`;
}
