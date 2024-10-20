import React, { FC } from 'react';
import SOCIAL_MEDIA_HANDLES from '@/utils/constants/socialMediaHandles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslations } from 'next-intl';

const MeetingNextUnscheduled: FC = () => {
  const t = useTranslations('sections.nextMeeting.unscheduled');
  return (
    <>
      <h3 className="text-3xl xl:text-4xl text-orange-950/75 text-center px-2">
        {t('heading')}
      </h3>
      <p className="px-6 text-xl md:text-sm xl:text-xl text-sky-200/75 sm:w-2/3 md:w-full">
        {t('content.paragraphOne.beforeEmphasis')}{' '}
        <span className="font-bold text-sky-200">
          {t('content.paragraphOne.emphasis')}
        </span>
      </p>
      <p className="px-6 text-xl md:text-lg text-orange-200/75 sm:w-2/3 md:w-full">
        {t('content.paragraphTwo')}
      </p>
      <div className="flex gap-6">
        {SOCIAL_MEDIA_HANDLES.map(({ icon, url }, index) => (
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
