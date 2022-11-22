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
          onClick={() => setCheckItem(name)}
          className="hidden"
        />
        <p className="text-lg text-text_white">{title}</p>
        <p className="text-sm text-text_white">{description}</p>
      </label>
    </div>
  );
};

export default AboutItem;
