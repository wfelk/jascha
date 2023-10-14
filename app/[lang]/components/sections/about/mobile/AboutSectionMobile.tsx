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
    <section>
      <Article heading={dict.carouselItems.item1.heading} style="dark">
        <What dict={dict} />
      </Article>
      <Article heading={dict.carouselItems.item2.heading} style="bright">
        <Whom dict={dict} />
      </Article>
      <Article heading={dict.carouselItems.item3.heading} style="dark">
        <How dict={dict} />
      </Article>
    </section>
  );
};

export default AboutSectionMobile;
