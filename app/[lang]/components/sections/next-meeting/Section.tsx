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
import IconMapPin from "../../icons/IconMapPin";
import IconClock from "../../icons/IconClock";
import IconCalendarDays from "../../icons/IconCalendarDays";
import IconArrowUpRight from "../../icons/IconArrowUpRight";

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
            <div className="flex flex-col items-center gap-8 w-full">
              <time
                dateTime={dict.data.time.dateTime}
                className="flex justify-center items-center gap-2 relative"
              >
                <IconClock className=" fill-teal-100/25 w-20 h-20" />
                <div className="flex gap-2 items-end">
                  <span className="text-6xl inline-block text-sky-400/80">
                    {dict.data.time.display}
                  </span>
                  <span className="text-4xl inline-block text-sky-900/60">
                    {dict.data.time.marker}
                  </span>
                </div>
              </time>
              <time
                dateTime={dict.data.date.dateTime}
                className="flex justify-center items-baseline gap-2 bg-teal-600/50 overflow-hidden relative rounded-lg py-4 w-full"
              >
                <IconCalendarDays className="absolute fill-teal-100/10 w-20 h-20 -left-4 bottom-1" />
                <span className="text-5xl text-sky-100/90">
                  {dict.data.date.date}
                </span>
                <span className="text-2xl text-sky-300">
                  {dict.data.date.month}
                </span>
                <span className="text-4xl text-teal-300/50">
                  {dict.data.date.year}
                </span>
              </time>
            </div>
            <div className="border-2 p-4 rounded-lg border-teal-200/50 flex flex-col gap-4">
              <address className="flex not-italic items-center relative justify-between pl-7 pr-3">
                <IconMapPin className="w-14 h-14 fill-teal-200/20 absolute -left-1 -top-1" />
                <span
                  className="text-sky-200/90 quotation-marks tracking-wider text-xl inline-block text-center"
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
              <div>
                <GoogleMaps
                  coordinates={coordinates}
                  className="w-full h-[250px]"
                />
              </div>
            </div>
          </div>
          <button className="bg-gradient-to-tr via-teal-500/75 to-teal-400/50 from-teal-700 w-full text-teal-950/75 uppercase font-mono py-8 tracking-widest text-lg flex items-center justify-center relative overflow-hidden gap-2">
            <a href="https://www.meetup.com/jascha-cologne/" target="_blank">
              {dict.button}
            </a>
            <IconArrowUpRight className="w-8 h-8 fill-teal-950/40" />
          </button>
        </div>
      </article>
    </section>
  );
};

export default Section;
