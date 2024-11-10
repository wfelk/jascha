import React from 'react';
import IconClock from '../../../icons/IconClock';
import useStore from '@/store';
import { useParams } from 'next/navigation';

const MeetingNextTime = () => {
  const { lang } = useParams();
  const date = useStore(state => state.nextMeeting?.date) || new Date();
  const dateTime = new Date(date).toISOString();
  const display = new Date(date).toLocaleTimeString(lang, {
    hour: 'numeric',
    minute: 'numeric',
  });

  return (
    <time
      dateTime={dateTime}
      className="flex justify-center items-center gap-2 relative"
    >
      <IconClock className=" fill-teal-100/25 w-20 h-20 md:h-12 md:w-12" />
      <div className="flex gap-2 items-end">
        <span className="text-6xl md:text-3xl inline-block text-sky-400/80">
          {display}
        </span>
        {lang === 'de' && (
          <span className="text-4xl md:text-xl inline-block text-sky-600">
            Uhr
          </span>
        )}
      </div>
    </time>
  );
};

export default MeetingNextTime;
