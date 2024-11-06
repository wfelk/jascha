import React from 'react';
import IconClock from '../../../icons/IconClock';

interface Props {
  dateTime: string;
  display: string;
  marker: string;
}

const MeetingNextTime = ({ dateTime, display, marker }: Props) => {
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
        <span className="text-4xl md:text-xl inline-block text-sky-600">
          {marker}
        </span>
      </div>
    </time>
  );
};

export default MeetingNextTime;
