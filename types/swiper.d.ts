import { SwiperOptions } from 'swiper/types';

export default interface Props {
  className?: {
    swiper?: string;
    slide?: string;
    image?: {
      default?: string;
      isActive?: string;
      isNotActive?: string;
    };
  };
  images: {
    src: any;
    alt: string;
  }[];
  screenSize: 'mobile' | 'desktop';
  options?: SwiperOptions;
}
