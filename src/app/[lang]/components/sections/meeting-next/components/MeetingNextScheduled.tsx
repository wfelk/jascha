import React, { FC, useEffect, useState } from 'react';
import Time from './MeetingNextTime';
import Date from './MeetingNextDate';
import Address from './MeetingNextAddress';
import { useTranslations } from 'next-intl';

const MeetingNextScheduled: FC = () => {
  const t = useTranslations('sections.nextMeeting.data');
  const [coordinates, setCoordinates] = useState<{
    lat: number;
    lon: number;
  } | null>(null);
  const address = `${t('address.street')} ${t('address.houseNumber')}, ${t('address.postCode')} ${t('address.city')}`;

  useEffect(() => {
    async function fetchAndSetCoordinates(address: string) {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURI(
          address
        )}&format=json&limit=1`
      );
      if (!res.ok) {
        throw new Error('Failed to fetch coordinates from OSM Nominatim API');
      }

      const data = await res.json();
      setCoordinates(data?.[0] ? { lat: data[0].lat, lon: data[0].lon } : null);
    }
    fetchAndSetCoordinates(address);
  }, [address]);

  return (
    <>
      <div className="flex flex-col items-center gap-8 w-full xl:justify-between 2xl:justify-around">
        <div className="flex w-full flex-col gap-4 md:flex-row items-center md:justify-evenly lg:flex-col xl:flex-row">
          <Time
            dateTime={t('time.dateTime')}
            marker={t('time.marker')}
            display={t('time.display')}
          />
          <Date />
        </div>
        <Address
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
