// TODO: Overflowing parts of icon are not hidden

import React, { useEffect, useState } from 'react';
import IconCalendarDays from '../../../icons/IconCalendarDays';
import useStore from '@/store';
import { useParams } from 'next/navigation';

const MeetingNextDate = () => {
  const { lang } = useParams();
  const rawDate = useStore(state => state.nextMeeting?.date);
  const [dateTime, setDateTime] = useState<string | undefined>();
  const [date, setDate] = useState<string | undefined>();
  const [month, setMonth] = useState<string | undefined>();
  const [year, setYear] = useState<string | undefined>();

  useEffect(() => {
    if (!rawDate) return;
    const dateObj = new Date(rawDate);
    // Locale 'en-CA' retunrns valid format for dateTime
    setDateTime(dateObj.toLocaleDateString('en-CA'));
    setDate(dateObj.toLocaleDateString(lang, { day: 'numeric' }));
    setMonth(dateObj.toLocaleDateString(lang, { month: 'long' }));
    setYear(dateObj.toLocaleDateString(lang, { year: 'numeric' }));
  }, [rawDate, lang]);

  return (
    <time
      dateTime={dateTime}
      className="flex items-baseline gap-2 xl:gap-1 2xl:gap-2 bg-teal-600/50 relative overflow-clip rounded-lg py-4 w-fit px-6"
    >
      <IconCalendarDays className="absolute fill-teal-100/10 w-20 h-20 -left-4 bottom-1" />
      {date && (
        <span className="text-5xl md:text-3xl xl:text-xl 2xl:text-3xl text-sky-100/90">
          {date}
          {lang === 'de' ? '.' : ''}
        </span>
      )}
      {month && (
        <span className="text-2xl md:text-xl 2xl:text-xl text-teal-100">
          {month}
        </span>
      )}
      {year && (
        <span className="text-4xl md:text-2xl xl:text-xl 2xl:text-2xl text-teal-300/50">
          {year}
        </span>
      )}
    </time>
  );
};

export default MeetingNextDate;
