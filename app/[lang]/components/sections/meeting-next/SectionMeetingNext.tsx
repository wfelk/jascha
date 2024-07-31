async function getData(address: string) {
  const res = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
      address
    )}&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch coordinates from Google Geocode API');
  }

  return res.json();
}

import { FC } from 'react';
import convertShallowObjectToString from '../../../../../utils/functions/convertShallowObjectToString';
import SectionHeading from './SectionMeetingHeading';
import Time from './components/MeetingNextTime';
import Date from './components/MeetingNextDate';
import Address from './components/MeetingNextAddress';
import Button from './components/MeetingNextButton';

interface Props {
  dict: any;
}

const SectionMeetingNext: FC<Props> = async ({ dict }) => {
  const address = convertShallowObjectToString(dict.data.address);
  const data = await getData(address);
  const coordinates = data?.results[0]?.geometry?.location;

  return (
    <section className="md:col-span-8 md:col-start-3 xl:col-start-2 xl:col-span-4 mt-20 md:m-0">
      <article className="flex flex-col items-center gap-12" id="next-meeting">
        <SectionHeading label={dict.heading} />
        <div className="bg-gradient-to-tr from-sky-900/80 via-sky-700/80 to-sky-600/75 drop-shadow-2xl w-full md:rounded-lg">
          <div className="px-4 py-8 md:px-12 border-t-8 items-center gap-12 flex flex-col border-t-teal-500/50 md:rounded-lg md:gap-8">
            <div className="flex flex-col md:flex-row items-center gap-8 w-full md:justify-between">
              <Time
                dateTime={dict.data.time.dateTime}
                marker={dict.data.time.marker}
                display={dict.data.time.display}
              />
              <Date
                dateTime={dict.data.date.dateTime}
                date={dict.data.date.date}
                month={dict.data.date.month}
                year={dict.data.date.year}
              />
            </div>
            <Address
              coordinates={coordinates}
              lang={dict.data.location.lang}
              name={dict.data.location.name}
              street={dict.data.address.street}
              houseNumber={dict.data.address.houseNumber}
              postCode={dict.data.address.postCode}
              city={dict.data.address.city}
            />
          </div>
          <Button label={dict.button} />
        </div>
      </article>
    </section>
  );
};

export default SectionMeetingNext;