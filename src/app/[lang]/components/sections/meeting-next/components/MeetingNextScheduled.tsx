import React from 'react';
import Time from './MeetingNextTime';
import Date from './MeetingNextDate';
import Address from './MeetingNextAddress';

const MeetingNextScheduled = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-8 w-full xl:justify-between 2xl:justify-around">
        <div className="flex w-full flex-col gap-4 md:flex-row items-center md:justify-evenly lg:flex-col xl:flex-row">
          <Time />
          <Date />
        </div>
        <Address />
      </div>
    </>
  );
};

export default MeetingNextScheduled;
