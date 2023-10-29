async function getData(address: string) {
  const res = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
      address
    )}&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch coordinates from Google Geocode API");
  }

  return res.json();
}

import { FC } from "react";
import GoogleMaps from "../../GoogleMaps";
import convertToString from "../../../../../utils/functions/shallowObjectToString";

interface Props {
  dict: any;
}

const Section: FC<Props> = async ({ dict }) => {
  const address = convertToString(dict.data.address);
  const data = await getData(address);
  const coordinates = data.results[0].geometry.location;

  return (
    <section className="my-20">
      <article className="flex flex-col items-center">
        <h2 className="sm:text-4xl text-sky-200/75 h-1/8 tracking-wide font-light text-2xl py-4 rounded-l-lg pl-6 bg-sky-800 w-1/2 self-end">
          {dict.heading}
        </h2>
        <div className="bg-gradient-to-tr from-sky-900/80 via-sky-700/80 to-sky-600/75 drop-shadow-2xl w-full">
          <div className="px-4">
            <p>
              <span>{dict.data.date.date}</span>
              <span>{dict.data.date.month}</span>
              <span>{dict.data.date.year}</span>
            </p>
            <div>
              <p>{dict.data.time.display}</p>
              <div>
                <span>{dict.data.location}</span>
                <div>
                  <div>
                    <span>{dict.data.address.street}</span>
                    <span>{dict.data.address.houseNumber}</span>
                  </div>
                  <div>
                    <span>{dict.data.address.city}</span>
                    <span>{dict.data.address.postCode}</span>
                  </div>
                </div>
              </div>
            </div>
            <GoogleMaps coordinates={coordinates} />
          </div>
          <button>
            <a href="https://www.meetup.com/jascha-cologne/" target="_blank">
              {dict.button}
            </a>
          </button>
        </div>
      </article>
    </section>
  );
};

export default Section;
