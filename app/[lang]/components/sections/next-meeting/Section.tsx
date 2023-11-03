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
      <article className="flex flex-col items-center gap-12">
        <h2 className="sm:text-4xl text-sky-200/75 h-1/8 tracking-wide font-light text-2xl py-4 rounded-l-lg pl-6 bg-teal-600/50 w-1/2 self-end">
          {dict.heading}
        </h2>
        <div className="bg-gradient-to-tr from-sky-900/80 via-sky-700/80 to-sky-600/75 drop-shadow-2xl w-full">
          <div className="px-4 py-8 border-t-8 gap-12 flex flex-col border-t-teal-500/50">
            <div className="flex flex-col items-center gap-6 w-full">
              <time
                dateTime={dict.data.time.dateTime}
                className="flex justify-center items-baseline gap-2"
              >
                <span className="text-6xl text-sky-400/80">
                  {dict.data.time.display}
                </span>
                <span className="text-4xl text-sky-950/50">
                  {dict.data.time.marker}
                </span>
              </time>
              <time
                dateTime={dict.data.date.dateTime}
                className="flex justify-center items-baseline gap-2 bg-teal-600/50 rounded-lg py-4 w-full"
              >
                <span className="text-5xl text-sky-100/90">
                  {dict.data.date.date}
                </span>
                <span className="text-3xl text-sky-300">
                  {dict.data.date.month}
                </span>
                <span className="text-5xl text-teal-300/20">
                  {dict.data.date.year}
                </span>
              </time>
            </div>
            <div>
              <address className="flex not-italic items-center justify-evenly">
                <span
                  className="text-sky-200/75 quotation-marks tracking-wider text-3xl inline-block text-center"
                  lang={dict.data.location.lang}
                >
                  {dict.data.location.name}
                </span>
                <div>
                  <div className="flex items-center gap-1 text-sky-300">
                    <span>{dict.data.address.street}</span>
                    <span>{dict.data.address.houseNumber}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sky-400/75">
                    <span>{dict.data.address.postCode}</span>
                    <span>{dict.data.address.city}</span>
                  </div>
                </div>
              </address>
              <div className="my-4">
                <GoogleMaps
                  coordinates={coordinates}
                  className="w-full h-[250px]"
                />
              </div>
            </div>
          </div>
          <button className="bg-teal-400/50 w-full text-teal-950/50 uppercase font-mono py-8 tracking-widest text-3xl">
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
