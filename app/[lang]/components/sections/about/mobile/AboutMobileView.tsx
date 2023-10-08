import { FC } from "react";
import What from "./AboutArticleWhat";
import Whom from "./AboutArticleWhom";
import How from "./AboutArticleHow";

interface Props {
  dict: any;
}

const AboutMobileView: FC<Props> = ({ dict }) => {
  return (
    <section className="">
      <What dict={dict} />
      <Whom dict={dict} />
      <How dict={dict} />
    </section>
  );
};

export default AboutMobileView;
