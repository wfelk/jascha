'use client';

import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/splide/css/skyblue';
import '@splidejs/react-splide/css';
import { FC, useState } from 'react';
import photos from '../../../../../../../utils/constants/photoSources';
import NextImage from 'next/image';
import IconXMark from '../../../../icons/IconXMark';
import IconArrowsPointingOut from '@/app/[lang]/components/icons/IconArrowsPointingOut';
import IconMapPin from '@/app/[lang]/components/icons/IconMapPin';
import IconCalendarDays from '@/app/[lang]/components/icons/IconCalendarDays';

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
    date: {
      day: 0,
      month: 0,
      year: 0,
    },
    location: {
      venue: '',
      district: '',
    },
  });
  const [currentlyDisplayedPhotoDate, setCurrentlyDisplayedPhotoDate] =
    useState(new Date());
  const [startIndex, setStartIndex] = useState(0);

  const displayImageOnFullScreen = (
    src: any,
    alt: string,
    width: number,
    height: number,
    date: {
      day: number;
      month: number;
      year: number;
    },
    location: {
      venue: string;
      district: string;
    },
    index: number
  ) => {
    setIsVisible(true);
    setCurrentlyDisplayedPhoto({ src, alt, width, height, date, location });
    setCurrentlyDisplayedPhotoDate(new Date(date.year, date.month, date.day));
    setStartIndex(index);
  };

  const closeFullScreen = () => {
    setIsVisible(false);
  };

  return (
    <>
      {!isVisible && (
        <Splide
          hasTrack={false}
          options={{ ...options, start: startIndex }}
          aria-label="Text"
        >
          <SplideTrack>
            {photos.map(
              (
                { src, alt, width, height, date, location }: any,
                index: number
              ) => (
                <SplideSlide key={index} className="relative">
                  <NextImage
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                  />
                  <span
                    onClick={() =>
                      displayImageOnFullScreen(
                        src,
                        alt,
                        width,
                        height,
                        date,
                        location,
                        index
                      )
                    }
                    className="absolute top-4 right-4 cursor-pointer"
                  >
                    <IconArrowsPointingOut className="fill-sky-300/90 bg-sky-700/70 rounded w-12 h-12 p-1 shadow-2xl hover:bg-sky-900 hover:fill-sky-200 transition-all" />
                  </span>
                  <div className="text-sky-200/50 bg-sky-900/90 bottom-4 left-4 absolute p-2 rounded text-3xl tracking-wide shadow-2xl">
                    {date.year}
                  </div>
                </SplideSlide>
              )
            )}
          </SplideTrack>
        </Splide>
      )}
      {isVisible && currentlyDisplayedPhoto.src && (
        <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-sky-950 z-10 flex flex-col items-center justify-center overflow-hidden">
          <NextImage
            src={currentlyDisplayedPhoto.src}
            alt={currentlyDisplayedPhoto.alt}
            width={currentlyDisplayedPhoto.width}
            height={currentlyDisplayedPhoto.height}
          />
          <span
            onClick={closeFullScreen}
            className="absolute right-4 top-4 cursor-pointer"
          >
            <IconXMark className="w-16 h-16 fill-sky-400/60 hover:fill-sky-300 transition-all" />
          </span>
          <div className="absolute bottom-4 text-right flex bg-transparent justify-around w-full overflow-hidden h-1/8">
            <div className="bg-sky-900/90 rounded-lg flex w-2/5 align-bottom p-4 overflow-hidden shadow-2xl justify-end items-center relative">
              <IconCalendarDays className="w-28 h-28 -left-7 -top-6 inline-block absolute fill-sky-600/30" />
              <div className="self-end z-10">
                <div className="flex justify-end">
                  <span className="z-10 text-sky-300/80 tracking-wide text-2xl">
                    {currentlyDisplayedPhoto.date.year}
                  </span>
                </div>
                <div className="flex w-full justify-end tracking-widest items-end">
                  <span className="text-sm text-sky-100/90">
                    {currentlyDisplayedPhotoDate.toLocaleDateString(undefined, {
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                </div>
              </div>
            </div>
            <div className="w-1/2 bg-sky-900/90 rounded-lg flex p-4 overflow-hidden shadow-2xl text-right justify-end relative">
              <IconMapPin className="w-28 h-28 -left-7 -top-6 inline-block absolute fill-sky-600/30" />
              <div className="self-end z-10 flex-col flex">
                <span className="z-10 text-sky-300/80 tracking-wide inline-block">
                  {currentlyDisplayedPhoto.location.district}
                </span>
                <span className="z-10 text-sky-100 tracking-wide text-lg self-end inline-block">
                  {currentlyDisplayedPhoto.location.venue}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MeetingPastPhotosMobile;
