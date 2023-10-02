import { FC } from "react";

const HeroVideo: FC<{ videoSrc: string }> = ({ videoSrc }) => {
  return (
    <div className="absolute w-full h-full left-0 top-0 overflow-hidden -z-10">
      <video
        className="absolute w-full h-full left-0 top-0 object-cover"
        autoPlay
        muted
        loop
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  );
};

export default HeroVideo;
