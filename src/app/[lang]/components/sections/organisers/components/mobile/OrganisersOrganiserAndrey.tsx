import React, { FC } from 'react';
import { useTranslations } from 'next-intl';

const OrganisersOrganiserAndrey: FC = () => {
  const t = useTranslations('sections.organisers.andrey');
  return (
    <>
      <p className="leading-loose tracking-wider">
        {t('content.paragraph1.beforeEmphasis')}{' '}
        <span className="font-bold text-sky-100">
          {t('content.paragraph1.emphasis')}
        </span>
      </p>
      <p className="leading-loose tracking-wider">
        {t('content.paragraph2.beforeEmphasis')}{' '}
        <span className="font-bold text-sky-100">
          {t('content.paragraph2.emphasis')}
        </span>{' '}
        {t('content.paragraph2.afterEmphasis')}
      </p>
    </>
  );
};

export default OrganisersOrganiserAndrey;
