import { FC } from "react";
import { range } from "lodash";

interface Props {
  numOfColumns?: number;
  staggeredDelay?: number;
}

const Flag: FC<Props> = ({ numOfColumns = 10, staggeredDelay = 100 }) => {
  return (
    <div className="flex aspect-w-3 aspect-h-2 w-full h-[250px] p-8">
      {range(numOfColumns).map((columnIndex) => (
        <div
          key={columnIndex}
          className="flex-1 flag-column"
          style={{
            animationDelay: `${columnIndex * staggeredDelay}ms`,
          }}
        />
      ))}
    </div>
  );
};

export default Flag;
