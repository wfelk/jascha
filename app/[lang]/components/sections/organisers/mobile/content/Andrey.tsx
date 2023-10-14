import { FC } from "react";

interface Props {
  dict: any;
}

const Andrey: FC<Props> = ({ dict }) => {
  return (
    <>
      <p className="leading-loose">
        {dict?.andrey.content.paragraph1.beforeEmphasis}{" "}
        <span className="font-bold text-sky-100">
          {dict?.andrey.content.paragraph1.emphasis}
        </span>
      </p>
      <p className="leading-loose">
        {dict?.andrey.content.paragraph2.beforeEmphasis}{" "}
        <span className="font-bold text-sky-100">
          {dict?.andrey.content.paragraph2.emphasis}
        </span>{" "}
        {dict?.andrey.content.paragraph2.afterEmphasis}
      </p>
    </>
  );
};

export default Andrey;
