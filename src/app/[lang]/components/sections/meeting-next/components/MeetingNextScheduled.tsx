import React, { FC } from 'react';
import Time from './MeetingNextTime';
import Date from './MeetingNextDate';
import Address from './MeetingNextAddress';
import { useTranslations } from 'next-intl';

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

const MeetingNextScheduled: FC = async () => {
  const t = useTranslations('sections.nextMeeting.data');
  const address = `${t('address.street')} ${t('address.houseNumber')}, ${t('address.postCode')} ${t('address.city')}`;
  const data = await getData(address);
  const coordinates = data?.[0];

  return (
    <>
      <div className="flex flex-col xl:flex-row items-center gap-8 w-full xl:justify-between 2xl:justify-around">
        <Time
          dateTime={t('time.dateTime')}
          marker={t('time.marker')}
          display={t('time.display')}
        />
        <Date
          dateTime={t('date.dateTime')}
          date={t('date.date')}
          month={t('date.month')}
          year={t('date.year')}
        />
        <Address
          coordinates={coordinates}
          lang={t('location.lang') as Lang}
          name={t('location.name')}
          street={t('address.street')}
          houseNumber={t('address.houseNumber')}
          postCode={t('address.postCode')}
          city={t('address.city')}
          venue={t('location.name')}
        />
      </div>
    </>
  );
};

export default MeetingNextScheduled;
