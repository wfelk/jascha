import React from 'react';
import IconMapPin from '../../../icons/IconMapPin';
import MeetingNextMap from './MeetingNextMap';
import useStore from '@/store';
import { useParams } from 'next/navigation';

const Address = () => {
  const { lang } = useParams();
  const address = useStore(state => state.nextMeeting?.address);
  const location = useStore(state => state.nextMeeting?.location);
  return (
    <div className="border-2 p-4 rounded-lg border-teal-200/50 flex flex-col items-center gap-4 lg:gap-8 min-w-[300px] max-w-[400px] md:min-w-full">
      <address className="flex not-italic items-center relative justify-between w-full gap-2 pl-7 pr-3">
        <IconMapPin className="w-14 h-14 fill-teal-200/20 absolute -left-1 -top-1" />
        <span
          className="text-sky-200/90 quotation-marks tracking-wider text-xl inline-block text-center"
          lang={lang as string}
        >
          {location?.name}
        </span>
        <div>
          <div className="flex items-center gap-1 text-sky-300">
            <span>{address?.street}</span>
            <span>{address?.houseNumber}</span>
          </div>
          <div className="flex items-center gap-1 text-sky-400/75">
            <span>{address?.postCode}</span>
            <span>{address?.city}</span>
          </div>
        </div>
      </address>
      <div className="rounded-lg overflow-hidden w-[280px] h-[280px] md:w-[400px] lg:w-[280px] xl:w-[360px] 2xl:w-[400px]">
        <MeetingNextMap />
      </div>
    </div>
  );
};

export default Address;
