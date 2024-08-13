import React, { FC } from 'react';
import type { Props } from '@/types/dictionary';
import Unscheduled from './components/MeetingNextUnscheduled';
import Scheduled from './components/MeetingNextScheduled';
import SectionHeading from './SectionMeetingHeading';
import Button from './components/MeetingNextButton';

const SectionMeetingNext: FC<Props> = ({ dict }) => {
  const isNextMeetingScheduled = false;
  return (
    <section
      className="md:col-span-8 md:col-start-3 lg:col-start-2 lg:col-span-4 mt-32 md:m-0"
      id="next-meeting"
    >
      <article className="flex flex-col items-center gap-12">
        <SectionHeading
          label={dict.sections.nextMeeting.heading}
          isNextMeetingScheduled={isNextMeetingScheduled}
        />
        <div className="bg-gradient-to-tr from-sky-900/80 via-sky-700/80 to-sky-600/75 drop-shadow-2xl w-full md:rounded-lg">
          <div
            className={`px-4 py-8 md:px-12 border-t-8 items-center gap-12 flex flex-col md:rounded-lg md:gap-8 ${isNextMeetingScheduled ? 'border-t-teal-500/50' : 'border-t-orange-500/50'}`}
          >
            {isNextMeetingScheduled ? (
              <Scheduled dict={dict} />
            ) : (
              <Unscheduled dict={dict} />
            )}
          </div>
          <Button
            label={dict.sections.nextMeeting.button}
            isNextMeetingScheduled={isNextMeetingScheduled}
          />
        </div>
      </article>
    </section>
  );
};

export default SectionMeetingNext;
