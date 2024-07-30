const convertShallowObjectToString = (obj: {
  [key: string]: string | number | boolean;
}) => {
  let result = '';
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      result += obj[key] + ' ';
    }
  }
  return result.trim();
};

export default convertShallowObjectToString;
