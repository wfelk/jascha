import { create } from 'zustand';

type AlreadyUsedInterfaces = InfoOnMeetings;

interface Store extends AlreadyUsedInterfaces {
  isNextMeetingScheduled?: boolean;
  nextMeeting?: StructuredMeeting;
  meetings?: StructuredMeeting[];
}

const useStore = create<Store>(() => ({
  isNextMeetingScheduled: false,
}));

export default useStore;
