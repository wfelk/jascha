import React, { FC } from 'react';
import { useTranslations } from 'next-intl';

const OrganisersOrganiserWilhelm: FC = () => {
  const t = useTranslations('sections.organisers.wilhelm.content');
  return (
    <>
      <p className="leading-loose tracking-wider">{t('paragraph1')}</p>
      <p className="leading-loose tracking-wider">
        {t('paragraph2.beforeEmphasis')}
        <span className="font-bold text-sky-100">
          {t('paragraph2.emphasis')}
        </span>{' '}
        {t('paragraph2.afterEmphasis')}
      </p>
    </>
  );
};

export default OrganisersOrganiserWilhelm;
