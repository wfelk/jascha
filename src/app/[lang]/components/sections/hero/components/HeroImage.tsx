import React, { FC } from 'react';
import NextImage, { StaticImageData } from 'next/image';

interface Props {
  src: StaticImageData | string;
  alt: string;
}

const HeroImage: FC<Props> = ({ src, alt }) => {
  return (
    <div className="absolute w-full h-full left-0 top-0 overflow-hidden -z-10 drop-shadow-2xl">
      <NextImage
        src={src}
        alt={alt}
        className="absolute w-full h-full left-0 top-0 object-cover"
        height={1280}
        width={1920}
      />
    </div>
  );
};

export default HeroImage;
