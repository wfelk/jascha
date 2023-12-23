import { FC } from "react";
import IconClock from "../../icons/IconClock";

interface Props {
  dateTime: string;
  display: string;
  marker: string;
}

const Time: FC<Props> = ({ dateTime, display, marker }) => {
  return (
    <time
      dateTime={dateTime}
      className="flex justify-center items-center gap-2 relative"
    >
      <IconClock className=" fill-teal-100/25 w-20 h-20" />
      <div className="flex gap-2 items-end">
        <span className="text-6xl inline-block text-sky-400/80">{display}</span>
        <span className="text-4xl inline-block text-sky-900/60">{marker}</span>
      </div>
    </time>
  );
};

export default Time;
