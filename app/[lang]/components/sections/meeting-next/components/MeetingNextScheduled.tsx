import React, { FC } from 'react';
import Time from './MeetingNextTime';
import Date from './MeetingNextDate';
import Address from './MeetingNextAddress';

import type { Props } from '@/types/dictionary';
import convertShallowObjectToString from '@/utils/functions/convertShallowObjectToString';

async function getData(address: string) {
  const res = await fetch(
    `https://nominatim.openstreetmap.org/search?q=${encodeURI(
      address
    )}&format=json&limit=1`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch coordinates from OSM Nominatim API');
  }

  return res.json();
}

const MeetingNextScheduled: FC<Props> = async ({ dict }) => {
  const address = convertShallowObjectToString(
    dict.sections.nextMeeting.data.address
  );
  const data = await getData(address);
  const coordinates = data?.[0];

  return (
    <>
      <div className="flex flex-col xl:flex-row items-center gap-8 w-full xl:justify-between 2xl:justify-around">
        <Time
          dateTime={dict.sections.nextMeeting.data.time.dateTime}
          marker={dict.sections.nextMeeting.data.time.marker}
          display={dict.sections.nextMeeting.data.time.display}
        />
        <Date
          dateTime={dict.sections.nextMeeting.data.date.dateTime}
          date={dict.sections.nextMeeting.data.date.date}
          month={dict.sections.nextMeeting.data.date.month}
          year={dict.sections.nextMeeting.data.date.year}
        />
      </div>
      <Address
        coordinates={coordinates}
        lang={dict.sections.nextMeeting.data.location.lang}
        name={dict.sections.nextMeeting.data.location.name}
        street={dict.sections.nextMeeting.data.address.street}
        houseNumber={dict.sections.nextMeeting.data.address.houseNumber}
        postCode={dict.sections.nextMeeting.data.address.postCode}
        city={dict.sections.nextMeeting.data.address.city}
        venue={dict.sections.nextMeeting.data.location.name}
      />
    </>
  );
};

export default MeetingNextScheduled;
