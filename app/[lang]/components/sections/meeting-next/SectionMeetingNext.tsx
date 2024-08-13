import React, { FC } from 'react';
import type { Props } from '@/types/dictionary';
import Unscheduled from './components/MeetingNextUnscheduled';
import Scheduled from './components/MeetingNextScheduled';

const SectionMeetingNext: FC<Props> = ({ dict }) => {
  const isNextMeetingScheduled = true;
  return (
    <section
      className="md:col-span-8 md:col-start-3 lg:col-start-2 lg:col-span-4 mt-32 md:m-0"
      id="next-meeting"
    >
      {isNextMeetingScheduled ? (
        <Scheduled dict={dict} />
      ) : (
        <Unscheduled dict={dict} />
      )}
    </section>
  );
};

export default SectionMeetingNext;
