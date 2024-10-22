import React, { FC } from 'react';
import IconMapPin from '../../../icons/IconMapPin';

import dynamic from 'next/dynamic';
const Map = dynamic(() => import('./MeetingNextMap'), {
  ssr: false,
  loading: () => (
    <div className="min-h-[250px] bg-white/50 animate-pulse rounded-md" />
  ),
});

interface Props {
  coordinates?: { lat: number; lon: number };
  lang: Lang;
  name: string;
  street: string;
  houseNumber: string;
  postCode: string;
  city: string;
  venue: string;
}

const Address: FC<Props> = ({
  coordinates,
  lang,
  name,
  street,
  houseNumber,
  postCode,
  city,
  venue,
}) => {
  return (
    <div className="border-2 p-4 rounded-lg border-teal-200/50 flex flex-col gap-4 min-w-[300px] max-w-[400px] md:min-w-full">
      <address className="flex not-italic items-center relative justify-between pl-7 pr-3">
        <IconMapPin className="w-14 h-14 fill-teal-200/20 absolute -left-1 -top-1" />
        <span
          className="text-sky-200/90 quotation-marks tracking-wider text-xl inline-block text-center"
          lang={lang}
        >
          {name}
        </span>
        <div>
          <div className="flex items-center gap-1 text-sky-300">
            <span>{street}</span>
            <span>{houseNumber}</span>
          </div>
          <div className="flex items-center gap-1 text-sky-400/75">
            <span>{postCode}</span>
            <span>{city}</span>
          </div>
        </div>
      </address>
      {coordinates && <Map coordinates={coordinates} venue={venue} />}
    </div>
  );
};

export default Address;
