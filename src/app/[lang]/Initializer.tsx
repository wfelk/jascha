'use client';

import useStore from '@/store';

const Initializer = ({ infoOnMeetings, children }: any) => {
  console.log(
    '🚀 ~ Initializer ~ infoOnMeetings:',
    infoOnMeetings.isNextMeetingScheduled
  );
  useStore.setState({
    infoOnMeetings,
  });

  return children;
};

export default Initializer;
