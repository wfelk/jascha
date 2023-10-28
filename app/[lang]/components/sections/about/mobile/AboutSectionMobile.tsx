import { FC } from "react";
import What from "./content/What";
import Whom from "./content/Whom";
import How from "./content/How";
import Article from "./AboutArticleMobile";

interface Props {
  dict: any;
}

const AboutSectionMobile: FC<Props> = ({ dict }) => {
  return (
    <section className="drop-shadow-2xl">
      <Article heading={dict.carouselItems.item1.heading} style="bright">
        <What dict={dict} />
      </Article>
      <Article heading={dict.carouselItems.item2.heading} style="dark">
        <Whom dict={dict} />
      </Article>
      <Article heading={dict.carouselItems.item3.heading} style="bright">
        <How dict={dict} />
      </Article>
    </section>
  );
};

export default AboutSectionMobile;
