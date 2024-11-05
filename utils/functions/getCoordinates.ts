const getCoordinates = async (address: string) => {
  const parsedAddress = address
    .toLowerCase()
    .replace(/\s+/g, '+')
    .replace(/,/g, ',');
  const url = `https://nominatim.openstreetmap.org/search.php?q=${parsedAddress}=jsonv2`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.length === 0) {
    return null;
  } else {
    return {
      lat: data[0].lat,
      lon: data[0].lon,
    };
  }
};

export default getCoordinates;
