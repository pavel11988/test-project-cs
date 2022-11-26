import { InferGetStaticPropsType } from "next";
import Image from "next/image";
import { ImageProps } from "../../../models/data.interface";
import { getStaticProps } from "../../../pages";
import Button from "../../Button";

export const RenderImages = ({ images }: any) => {
  return (
    <ul className="flex justify-around">
      {images &&
        images.length &&
        images.map((image: ImageProps) => {
          const { id, company, src, width, height } = image;
          return (
            <li key={id}>
              <Image src={src} alt={company} width={width} height={height} />
            </li>
          );
        })}
    </ul>
  );
};

const Hero = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <main className="flex justify-center">
      <div className=" w-3/4 pt-16 pb-16 flex-col">
        <div>
          <h1 className="font-medium text-center text-7xl pl-48 pr-44 mb-6">
            Employment{" "}
            <span className="text-text_orange relative">
              <Image
                className="absolute top-14 right-3"
                src={"/hero-zigzag.svg"}
                alt="image-bg"
                width={433}
                height={41}
              />
              made simple
            </span>{" "}
            for all trade businesses
          </h1>

          <div className="text-center w-2/5 mx-auto">
            <p className="text-lg leading-8 mb-12">{data.main_text}</p>
          </div>
        </div>
        <div className="flex justify-center mb-[180px]">
          <Button
            text={"Sign Up"}
            href={"/register"}
            styles={
              "w-36 h-10 mr-6 text-sm leading-6 font-bold bg-background_black text-text_white rounded-full flex justify-center items-center hover:bg-button_primary_orange duration-200"
            }
          />
          <Button
            text={"Employer Pack"}
            href={"#"}
            styles={
              "w-36 h-10 text-sm leading-6 font-normal bg-button_transparent text-text_black border-[1px] border-border_gray rounded-full flex justify-center items-center hover:border-border_orange duration-200"
            }
          />
        </div>
        <div>
          <p className="text-base text-center leading-7 mb-8">
            {data.teams_text}
          </p>
          <RenderImages images={data.teams_logos} />
        </div>
      </div>
    </main>
  );
};

export default Hero;
