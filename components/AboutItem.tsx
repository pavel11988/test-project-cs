interface IProps {
  title: string;
  description: string;
  name: string;
  setCheckItem: Function;
  checkItem: string;
}

const AboutItem = ({
  title,
  description,
  name,
  checkItem,
  setCheckItem,
}: IProps) => {
  const checked = checkItem === name;
  return (
    <div
      className={`w-[506px] h-[136px] pt-[24px] pl-[24px] pb-[28px] pr-[24px] rounded-l-xl  ${
        checked ? "bg-background_primary_light" : "background_orange"
      }`}
    >
      <label>
        <input
          type="radio"
          name={name}
          value="email"
          checked={checkItem === name}
          onClick={() => setCheckItem(name)}
          className="hidden"
        />
        <p className="text-[18px] text-text_white">{title}</p>
        <p className="text-[14px] text-text_white">{description}</p>
      </label>
    </div>
  );
};

export default AboutItem;
