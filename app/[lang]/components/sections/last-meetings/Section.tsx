import { FC } from "react";
import ImageCarousel from "../../carousels/Images";
import imgOne from "/public/images/meetings/2022-11-04.jpeg";
import imgTwo from "/public/images/meetings/2022-12-09.jpeg";
import imgThree from "/public/images/meetings/2023-05-02.jpeg";

const images = [
  {
    src: imgOne,
    alt: "2022-11-04",
  },
  {
    src: imgTwo,
    alt: "2022-12-09",
  },
  {
    src: imgThree,
    alt: "2023-05-02",
  },
];

const Section: FC = () => {
  return (
    <section className="bg-sky-950">
      <ImageCarousel images={images} />
    </section>
  );
};

export default Section;
