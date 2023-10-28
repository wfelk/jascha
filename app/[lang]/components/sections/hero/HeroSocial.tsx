import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faMeetup,
  faTelegram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const socialMediaHandles = [
  { icon: faMeetup, url: "https://www.meetup.com/de-DE/jascha-cologne/" },
  { icon: faInstagram, url: "https://www.instagram.com/jascha.cologne/" },
  { icon: faWhatsapp, url: "https://chat.whatsapp.com/G6WyGeDeXb956srJJVprA9" },
  { icon: faTelegram, url: "https://t.me/jascha_cologne" },
  { icon: faFacebook, url: "https://www.facebook.com/jascha.cologne" },
];

const HeroSocial: FC = () => {
  return (
    <div className="flex items-center overflow-x-auto py-6 w-full gap-4 h-fit opacity-75 px-6 no-scrollbar">
      {socialMediaHandles.map(({ icon, url }, index) => (
        <a
          key={index}
          href={url}
          target="_blank"
          className=" text-sky-200/75 bg-sky-600/50 border-2 border-sky-200/25 rounded-full p-3 flex items-center justify-center"
        >
          <FontAwesomeIcon icon={icon} className="w-10 h-10" />
        </a>
      ))}
    </div>
  );
};

export default HeroSocial;
