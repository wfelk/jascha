import { FC } from "react";

interface Props {
  dict: any;
}

const Wilhelm: FC<Props> = ({ dict }) => {
  return (
    <>
      <p className="leading-loose">{dict?.wilhelm.content.paragraph1}</p>
      <p className="leading-loose">
        {dict?.wilhelm.content.paragraph2.beforeEmphasis}{" "}
        <span className="font-bold text-sky-100">
          {dict?.wilhelm.content.paragraph2.emphasis}
        </span>{" "}
        {dict?.wilhelm.content.paragraph2.afterEmphasis}
      </p>
    </>
  );
};

export default Wilhelm;
