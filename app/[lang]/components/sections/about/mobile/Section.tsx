import { FC } from "react";
import What from "./articles/What";
import Whom from "./articles/Whom";
import How from "./articles/How";
import Article from "./Article";

interface Props {
  dict: any;
}

const Section: FC<Props> = ({ dict }) => {
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

export default Section;
