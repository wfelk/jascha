const getCoordinates = async (address?: string) => {
  if (!address) return null;

  const parsedAddress = address
    .toLowerCase()
    .replace(/\s+/g, '+')
    .replace(/,/g, ',');
  const url = `https://nominatim.openstreetmap.org/search.php?q=${parsedAddress}&format=jsonv2`;

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
