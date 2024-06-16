import { FC } from 'react';
import IconCalendarDays from '../../../icons/IconCalendarDays';

interface Props {
  dateTime: string;
  date: string;
  month: string;
  year: string;
}

const Date: FC<Props> = ({ dateTime, date, month, year }) => {
  return (
    <time
      dateTime={dateTime}
      className="flex justify-center items-baseline gap-2 bg-teal-600/50 overflow-hidden relative rounded-lg py-4 w-fit px-8"
    >
      <IconCalendarDays className="absolute fill-teal-100/10 w-20 h-20 -left-4 bottom-1" />
      <span className="text-5xl text-sky-100/90">{date}</span>
      <span className="text-2xl text-sky-300">{month}</span>
      <span className="text-4xl text-teal-300/50">{year}</span>
    </time>
  );
};

export default Date;
