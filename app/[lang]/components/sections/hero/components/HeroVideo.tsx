import { FC } from 'react';

const HeroVideo: FC<{ videoSrc: string }> = ({
  videoSrc = 'https://v3.cdnpk.net/videvo_files/video/free/2020-02/large_watermarked/200223_Cafe_03_03_preview.mp4',
}) => {
  return (
    <div className="absolute w-full h-full left-0 top-0 overflow-hidden -z-10">
      <video
        className="absolute w-full h-full left-0 top-0 object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  );
};

export default HeroVideo;
