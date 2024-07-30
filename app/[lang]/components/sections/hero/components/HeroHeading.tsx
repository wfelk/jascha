import { FC } from 'react';

const HeroHeading: FC<{ label: string }> = ({ label }) => {
  return (
    <div className="w-full grow flex flex-col items-center justify-end mb-12">
      <h1 className="text-7xl sm:text-8xl text-sky-100/80 uppercase tracking-wider font-light">
        {label}
      </h1>
    </div>
  );
};

export default HeroHeading;
