'use client';

import { FC, useRef, useEffect } from 'react';
import { Splide } from '@splidejs/react-splide';
import MeetingPastMobile from './SectionMeetingPastMobile';
import MeetingPastDesktop from './SectionMeetingPastDesktop';
import SectionHeading from '../../SectionHeading';

interface Props {
  dict: any;
}

const SectionMeetingPast: FC<Props> = ({ dict }) => {
  const main = useRef<Splide>(null);
  const thumbnails = useRef<Splide>(null);

  useEffect(() => {
    if (thumbnails?.current?.splide)
      main?.current?.sync(thumbnails.current.splide);
  }, [main, thumbnails]);

  return (
    <section className="flex flex-col will-change-scroll mb-20 mt-20 gap-12">
      <SectionHeading label={dict?.heading} />
      <MeetingPastMobile />
      <MeetingPastDesktop mainRef={main} thumbnailsRef={thumbnails} />
    </section>
  );
};

export default SectionMeetingPast;
