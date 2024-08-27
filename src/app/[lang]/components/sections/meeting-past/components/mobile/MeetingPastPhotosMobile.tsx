import React, { useState } from 'react';
import photos from '@/utils/constants/photoSources';
import SwiperDefault from '@/src/app/[lang]/components/swiper/SwiperDefault';

const classNamePagination =
  'p-[6px] !inline-flex items-center justify-center !bg-sky-300/75';

// Add this type definition for the image object
type PhotoSource = {
  src: {
    mobile: string;
    desktop: string;
  };
  alt: string;
};

const MeetingPastPhotosMobile = () => {
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>(
    new Array(photos.length).fill(false)
  );

  const handleImageLoad = (index: number) => {
    setImagesLoaded(prev => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  const modifiedPhotos = photos.map((photo: PhotoSource, index: number) => ({
    ...photo,
    src: {
      mobile: photo.src.mobile,
      desktop: photo.src.desktop,
    },
    component: (
      <>
        {!imagesLoaded[index] && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-sky-300 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        <img
          src={photo.src.mobile}
          alt={photo.alt}
          onLoad={() => handleImageLoad(index)}
          className={`rounded border-4 border-sky-300/50 self-center transition-opacity duration-300 ${
            imagesLoaded[index] ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </>
    ),
  }));

  return (
    <SwiperDefault
      images={modifiedPhotos}
      screenSize="mobile"
      options={{
        centeredSlides: true,
        spaceBetween: 20,
        loop: true,
        pagination: {
          clickable: true,
          renderBullet: (index: number, className: string) => {
            return `<div class="${className} ${classNamePagination}"></div>`;
          },
        },
      }}
      className={{
        swiper: '*:items-center !static',
        slide: '!flex items-center justify-center relative',
        image: {
          default:
            'rounded border-4 border-sky-300/50 self-center transition-opacity duration-300',
        },
      }}
    />
  );
};

export default MeetingPastPhotosMobile;
