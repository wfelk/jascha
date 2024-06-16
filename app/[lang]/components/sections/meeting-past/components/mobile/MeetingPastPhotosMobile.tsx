'use client';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css/skyblue';
import { FC, useState } from 'react';
import photos from '../../../../../../../utils/constants/photoSources';
import NextImage from 'next/image';
import IconViewfinderCircle from '../../../../icons/IconViewfinderCircle';
import IconXMark from '../../../../icons/IconXMark';

const options = {
  type: 'loop',
  cover: true,
  arrows: false,
  heightRatio: 0.75,
};

const MeetingPastPhotosMobile: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentlyDisplayedPhoto, setCurrentlyDisplayedPhoto] = useState({
    src: undefined,
    alt: '',
    width: 0,
    height: 0,
  });
  const [startIndex, setStartIndex] = useState(0);

  const displayImageOnFullScreen = (
    src: any,
    alt: string,
    width: number,
    height: number,
    index: number
  ) => {
    setIsVisible(true);
    setCurrentlyDisplayedPhoto({ src, alt, width, height });
    setStartIndex(index);
  };

  const closeFullScreen = () => {
    setIsVisible(false);
  };

  return (
    <>
      {!isVisible && (
        <Splide options={{ ...options, start: startIndex }} aria-label="Text">
          {photos.map(({ src, alt, width, height }: any, index: number) => (
            <SplideSlide key={index} className="relative">
              <NextImage src={src} alt={alt} width={width} height={height} />
              <span
                onClick={() =>
                  displayImageOnFullScreen(src, alt, width, height, index)
                }
                className="absolute top-2 right-2 cursor-pointer"
              >
                <IconViewfinderCircle className="fill-sky-300/75 bg-sky-700/60 rounded w-10 h-10" />
              </span>
            </SplideSlide>
          ))}
        </Splide>
      )}
      {isVisible && currentlyDisplayedPhoto.src && (
        <div className="fixed top-0 left-0 w-full h-full bg-sky-950 z-10 flex flex-col items-center justify-center">
          <NextImage
            src={currentlyDisplayedPhoto.src}
            alt={currentlyDisplayedPhoto.alt}
            width={currentlyDisplayedPhoto.width}
            height={currentlyDisplayedPhoto.height}
          />
          <span onClick={closeFullScreen} className="absolute right-2 top-2">
            <IconXMark className="w-12 h-12 fill-sky-400/60" />
          </span>
        </div>
      )}
    </>
  );
};

export default MeetingPastPhotosMobile;
