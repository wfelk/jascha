import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faMeetup,
  faThreads,
} from '@fortawesome/free-brands-svg-icons';

const socialMediaHandles = [
  { icon: faMeetup, url: 'https://www.meetup.com/jascha-cologne/' },
  { icon: faInstagram, url: 'https://www.instagram.com/jascha.club/' },
  { icon: faThreads, url: 'https://www.threads.net/jascha.club' },
];

const HeroSocialMedia: FC = () => {
  return (
    <div className="flex absolute top-0 justify-center md:justify-start items-center overflow-x-auto py-6 w-full gap-4 h-fit opacity-75 px-6 no-scrollbar snap-x snap-proximity scroll-pl-4">
      {socialMediaHandles.map(({ icon, url }, index) => (
        <a
          key={index}
          href={url}
          target="_blank"
          className=" text-sky-200/75 bg-gradient-to-tr from-sky-800 via-sky-600/50 to-sky-600/75 border-2 border-sky-200/25 rounded-full p-3 flex items-center justify-center snap-start hover:border-sky-100/75 transition-all hover:text-sky-100"
        >
          <FontAwesomeIcon icon={icon} className="w-10 h-10" />
        </a>
      ))}
    </div>
  );
};

export default HeroSocialMedia;
