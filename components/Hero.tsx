import Image from "next/image";
import Button from "./Button";
import teams from "../assets/images/teams";

type team = {
  id: string;
  company: string;
  src: string;
  width: number;
  height: number;
};

interface IRenderLogosProps {
  images: team[];
}

const RenderLogos = ({ images }: IRenderLogosProps) => {
  return (
    <ul className="flex justify-between pl-[86px]">
      {images.map(({ src, company, id, width, height }) => (
        <li key={id}>
          <Image
            src={require(`../assets/images/teams/${src}`)}
            width={width}
            height={height}
            alt={`${company}_logo`}
          />
        </li>
      ))}
    </ul>
  );
};

const Hero = () => {
  console.log(teams);
  return (
    <main className="flex justify-center">
      <div className=" w-[1511px] h-[730px] pt-[72px] pb-[45px] pl-[132px] pr-[164px] flex-col relative">
        <h1 className="font-medium text-center text-[72px] leading-[80px] pl-[184px] pr-[165px] mb-[24px]">
          Employment <span className="text-text_orange">made simple</span> for
          all trade businesses
        </h1>
        <Image
          className="absolute top-[127px] right-[338px]"
          src={require("../assets/images/hero-zigzag.svg")}
          alt="image-bg"
          width={433}
          height={41}
        />
        <p className="text-[18px] leading-[32px] text-center pl-[329px] pr-[322px] mb-[46px]">
          Lorem is sum this is sum ipsum, lorem is sum sum sum sum plus one is
          sum ipsum.
        </p>
        <div className="flex justify-center mb-[180px]">
          <Button
            text={"Sign Up"}
            href={"/register"}
            styles={
              "w-[154px] h-[40px] mr-[24px] text-[14px] leading-[24px] font-bold bg-background_black text-text_white rounded-full flex justify-center items-center hover:bg-button_primary_orange duration-200"
            }
          />
          <Button
            text={"Employer Pack"}
            href={"#"}
            styles={
              "w-[138px] h-[40px] text-[14px] leading-[24px] font-normal bg-button_transparent text-text_black border-[1px] border-border_gray rounded-full flex justify-center items-center hover:border-border_orange duration-200"
            }
          />
        </div>
        <div className="">
          <p className="text-[16px] text-center leading-[28px] mb-[32px]">
            Trusted by teams of all sizes
          </p>
          <RenderLogos images={teams} />
        </div>
      </div>
    </main>
  );
};

export default Hero;
