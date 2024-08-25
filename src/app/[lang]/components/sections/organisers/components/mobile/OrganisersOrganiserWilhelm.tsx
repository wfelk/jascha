import React, { FC } from 'react';
import type { Props } from '@/types/dictionary';

const OrganisersOrganiserWilhelm: FC<Props> = ({ dict }) => {
  return (
    <>
      <p className="leading-loose">
        {dict.sections.organisers.wilhelm.content.paragraph1 as string}
      </p>
      <p className="leading-loose">
        {dict.sections.organisers.wilhelm.content.paragraph2.beforeEmphasis}
        <span className="font-bold text-sky-100">
          {dict.sections.organisers.wilhelm.content.paragraph2.emphasis}
        </span>{' '}
        {dict.sections.organisers.wilhelm.content.paragraph2.afterEmphasis}
      </p>
    </>
  );
};

export default OrganisersOrganiserWilhelm;
