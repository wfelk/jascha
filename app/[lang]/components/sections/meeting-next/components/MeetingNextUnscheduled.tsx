import React, { FC } from 'react';
import type { Props } from '@/types/dictionary';
import socialMediaHandles from '@/utils/constants/socialMediaHandles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MeetingNextUnscheduled: FC<Props> = ({ dict }) => {
  return (
    <>
      <h3 className="text-5xl text-orange-950/75 text-center px-2">
        {dict.sections.nextMeeting.unscheduled.heading}
      </h3>
      <p className="px-6 text-xl text-sky-200/75 sm:w-2/3 md:w-full">
        {dict.sections.nextMeeting.unscheduled.content}
      </p>
      <div className="flex gap-6">
        {socialMediaHandles.map(({ icon, url }, index) => (
          <a
            key={index}
            href={url}
            target="_blank"
            rel="noreferrer"
            className="text-orange-200/75 bg-gradient-to-tr from-orange-800 via-orange-600/50 to-orange-600/75 border-2 border-orange-200/25 rounded-lg p-3 flex items-center justify-center snap-start hover:border-orange-100/75 transition-all hover:text-orange-100"
          >
            <FontAwesomeIcon icon={icon} className="w-10 h-10" />
          </a>
        ))}
      </div>
    </>
  );
};

export default MeetingNextUnscheduled;
