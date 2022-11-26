import { FC } from "react";

interface AboutItemProps {
  title: string;
  text: string;
  name: string;
  setCheckItem: Function;
  checkItem: string;
}

const AboutItem: FC<AboutItemProps> = ({
  title,
  text,
  name,
  checkItem,
  setCheckItem,
}) => {
  const checked = checkItem === name;
  return (
    <div
      onMouseOver={() => setCheckItem(name)}
      className={`h-32 pt-6 px-6 pb-7 rounded-l-xl  ${
        checked ? "bg-background_primary_light" : "background_orange"
      }`}
    >
      <label>
        <input
          type="radio"
          name={name}
          value="email"
          defaultChecked={checkItem === name}
          className="hidden"
        />
        <p className="text-lg text-text_white">{title}</p>
        <p className="text-sm text-text_white">{text}</p>
      </label>
    </div>
  );
};

export default AboutItem;
