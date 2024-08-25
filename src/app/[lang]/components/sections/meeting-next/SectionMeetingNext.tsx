import React, { FC } from 'react';
import Unscheduled from './components/MeetingNextUnscheduled';
import Scheduled from './components/MeetingNextScheduled';
import SectionHeading from './SectionMeetingHeading';
import Button from './components/MeetingNextButton';
import { useTranslations } from 'next-intl';
import isNextMeetingScheduled from '@/utils/constants/isNextMeetingScheduled';

const SectionMeetingNext: FC = () => {
  const t = useTranslations('sections.nextMeeting');

  return (
    <section
      className="md:col-span-8 md:col-start-3 lg:col-start-2 lg:col-span-4 mt-32 md:m-0"
      id="next-meeting"
    >
      <article className="flex flex-col items-center gap-12 min-h-full h-full">
        <SectionHeading
          label={t('heading')}
          isNextMeetingScheduled={isNextMeetingScheduled}
        />
        <div className="bg-gradient-to-tr from-sky-900/80 via-sky-700/80 to-sky-600/75 drop-shadow-2xl w-full md:rounded-lg h-full flex flex-col justify-between">
          <div
            className={`px-4 py-8 h-full md:px-8 border-t-8 items-center gap-12 flex flex-col justify-between md:rounded-lg md:gap-8 ${isNextMeetingScheduled ? 'border-t-teal-500/50' : 'border-t-orange-500/50 lg:py-24'}`}
          >
            {isNextMeetingScheduled ? <Scheduled /> : <Unscheduled />}
          </div>
          <Button
            label={t('button')}
            isNextMeetingScheduled={isNextMeetingScheduled}
          />
        </div>
      </article>
    </section>
  );
};

export default SectionMeetingNext;
