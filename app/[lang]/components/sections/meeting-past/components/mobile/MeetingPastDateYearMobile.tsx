import React, { FC } from 'react';

interface Props {
  year: number;
}

const MeetingPastDateYearMobile: FC<Props> = ({ year }) => {
  return (
    <div className="text-sky-200/50 bg-sky-900/90 bottom-4 left-4 absolute p-2 rounded text-3xl tracking-wide shadow-2xl">
      {year}
    </div>
  );
};

export default MeetingPastDateYearMobile;
