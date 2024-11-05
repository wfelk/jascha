const getCoordinates = async (address: string) => {
  const parsedAddress = address
    .toLowerCase()
    .replace(/\s+/g, '+')
    .replace(/,/g, ',');
  const url = `https://nominatim.openstreetmap.org/search.php?q=${parsedAddress}&format=jsonv2`;

  console.log('🚀 ~ getCoordinates ~ url:', url);
  const response = await fetch(url);
  console.log('🚀 ~ getCoordinates ~ response:', response);
  const data = await response.json();
  console.log('🚀 ~ getCoordinates ~ data:', data);

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
