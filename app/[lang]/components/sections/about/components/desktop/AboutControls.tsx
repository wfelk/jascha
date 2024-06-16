import { FC, ReactNode } from 'react';
import Button from '../../../../Button';
import IconArrowLeft from '../../../../icons/IconArrowLeft';
import IconArrowRight from '../../../../icons/IconArrowRight';

interface Props {
  onLeftClick: () => void;
  onRightClick: () => void;
  carouselTiles: ReactNode[];
  currentIndex: number;
}

const AboutControls: FC<Props> = ({
  onLeftClick,
  onRightClick,
  carouselTiles,
  currentIndex,
}) => {
  return (
    <div className="w-full flex items-center justify-center max-h-1/6 min-h-1/6 h-1/6 py-6 px-4 gap-6">
      <Button onClick={onLeftClick} className="flex items-center opacity-50">
        <IconArrowLeft className="fill-sky-200/75 w-12 h-12" />
      </Button>
      <div className="w-1/3 flex items-center justify-center">
        {carouselTiles.map((_, index) => (
          <span
            key={index}
            className={`inline-block mx-1 w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-sky-200/50' : 'bg-sky-800'
            }`}
          ></span>
        ))}
      </div>
      <Button
        onClick={onRightClick}
        className="flex items-center justify-end opacity-50"
      >
        <IconArrowRight className="fill-sky-200/75 w-12 h-12" />
      </Button>
    </div>
  );
};

export default AboutControls;
