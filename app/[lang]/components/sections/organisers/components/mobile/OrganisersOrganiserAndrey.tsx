import React, { FC } from 'react';
import type { Props } from '@/types/dictionary';

const OrganisersOrganiserAndrey: FC<Props> = ({ dict }) => {
  return (
    <>
      <p className="leading-loose">
        {
          (
            dict.sections.organisers.andrey.content.paragraph1 as {
              beforeEmphasis: string;
            }
          ).beforeEmphasis
        }{' '}
        <span className="font-bold text-sky-100">
          {
            (
              dict.sections.organisers.andrey.content.paragraph1 as {
                emphasis: string;
              }
            ).emphasis
          }
        </span>
      </p>
      <p className="leading-loose">
        {dict.sections.organisers.andrey.content.paragraph2.beforeEmphasis}{' '}
        <span className="font-bold text-sky-100">
          {dict.sections.organisers.andrey.content.paragraph2.emphasis}
        </span>{' '}
        {dict.sections.organisers.andrey.content.paragraph2.afterEmphasis}
      </p>
    </>
  );
};

export default OrganisersOrganiserAndrey;
