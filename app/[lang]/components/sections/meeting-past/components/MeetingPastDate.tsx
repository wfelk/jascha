import React, { FC } from 'react';
import IconCalendarDays from '../../../icons/IconCalendarDays';

interface Props {
  date: {
    day: number;
    month: number;
    year: number;
  };
}

const MeetingPastDate: FC<Props> = ({ date }) => {
  return (
    <div className="bg-sky-900/90 rounded-lg flex w-2/5 align-bottom p-4 overflow-hidden shadow-2xl justify-end items-center relative">
      <IconCalendarDays className="w-28 h-28 -left-7 -top-6 inline-block absolute fill-sky-600/30" />
      <div className="self-end z-10">
        <div className="flex justify-end">
          <span className="z-10 text-sky-300/80 tracking-wide text-2xl">
            {date.year}
          </span>
        </div>
        <div className="flex w-full justify-end tracking-widest items-end">
          <span className="text-sm text-sky-100/90">
            {new Date(date.year, date.month, date.day).toLocaleDateString(
              undefined,
              {
                month: 'long',
                day: 'numeric',
              }
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MeetingPastDate;
