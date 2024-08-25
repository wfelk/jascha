import React, { FC } from 'react';
import { range } from 'lodash';

const flags = {
  russia: 'russia',
  ukraine: 'ukraine',
  belarus: 'belarus',
};

interface Props {
  numOfColumns?: number;
  staggeredDelay?: number;
  className?: string;
  flag: keyof typeof flags;
}

const Flag: FC<Props> = ({
  numOfColumns = 30,
  staggeredDelay = 25,
  className = 'w–[250px] h-[200px]',
  flag,
}) => {
  return (
    <div className={`flex aspect-w-3 aspect-h-2 ${className}`}>
      {range(numOfColumns).map(columnIndex => (
        <div
          key={columnIndex}
          className={`flex-1 flag--${flag}`}
          style={{
            animationDelay: `${columnIndex * staggeredDelay}ms`,
          }}
        />
      ))}
    </div>
  );
};

export default Flag;
