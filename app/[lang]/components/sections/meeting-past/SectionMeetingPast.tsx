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
  const mainRef = useRef<Splide>(null);
  const thumbnailsRef = useRef<Splide>(null);

  useEffect(() => {
    if (thumbnailsRef?.current?.splide)
      mainRef?.current?.sync(thumbnailsRef.current.splide);
  }, [mainRef, thumbnailsRef]);

  return (
    <section className="flex flex-col will-change-scroll mb-20 mt-20 gap-12">
      <SectionHeading label={dict?.heading} />
      <MeetingPastMobile />
      <MeetingPastDesktop mainRef={mainRef} thumbnailsRef={thumbnailsRef} />
    </section>
  );
};

export default SectionMeetingPast;
