import { create } from 'zustand';

type AlreadyUsedInterfaces = InfoOnMeetings;

interface Store extends AlreadyUsedInterfaces {
  isNextMeetingScheduled: boolean;
  setIsNextMeetingScheduled: (isScheduled: boolean) => void;
  nextMeeting?: StructuredMeeting;
  setNextMeeting: (meeting: StructuredMeeting | undefined) => void;
  meetings?: StructuredMeeting[];
}

const useStore = create<Store>(set => ({
  isNextMeetingScheduled: false,
  setIsNextMeetingScheduled: isScheduled =>
    set(() => ({ isNextMeetingScheduled: isScheduled })),
  nextMeeting: undefined,
  setNextMeeting: meeting => set(() => ({ nextMeeting: meeting })),
}));

export default useStore;
