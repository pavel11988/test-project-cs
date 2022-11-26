import { useEffect, useState } from "react";
import AboutItem from "./AboutItem";
import Image from "next/image";
import HeroGallery from "./HeroGallery";
import AboutGallery from "./AboutGallery";
import { getStaticProps } from "../../../pages";
import { InferGetStaticPropsType } from "next";
import {
  AboutLogos,
  AboutTrades,
  ImageProps,
} from "../../../models/data.interface";

interface RenderAboutProps {
  images: AboutLogos;
  category: string;
}

export const RenderImages = ({ images, category }: RenderAboutProps) => {
  if (!category || images[category]?.length === 0) {
    return <p className="mt-10">No data</p>;
  }

  const currentImages = images[category];

  return (
    <ul className="grid grid-cols-2 px-2 [&>*]:m-2 ">
      {currentImages &&
        currentImages.length &&
        currentImages.map((image) => {
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

const About = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [checkItem, setCheckItem] = useState("radio");

  return (
    <section className="bg-background_orange">
      <div className="pt-20 pb-12">
        <h2 className="font-medium text-5xl text-text_white text-center mb-7">
          {data.title}
        </h2>
        <p className="font-normal text-lg text-text_white text-center mb-4">
          {data.text}
        </p>
        <div className="flex justify-center ">
          <div className="w-2/7 mt-24 mr-28">
            <AboutItem
              title={data.trades.social.title}
              description={data.trades.social.text}
              name={data.trades.social.name}
              setCheckItem={setCheckItem}
              checkItem={checkItem}
            />
            <AboutItem
              title={data.trades.radio.title}
              description={data.trades.radio.text}
              name={data.trades.radio.name}
              setCheckItem={setCheckItem}
              checkItem={checkItem}
            />
            <AboutItem
              title={data.trades.social_video.title}
              description={data.trades.social_video.text}
              name={data.trades.social_video.name}
              setCheckItem={setCheckItem}
              checkItem={checkItem}
            />
            <AboutItem
              title={data.trades.reporting.title}
              description={data.trades.reporting.text}
              name={data.trades.reporting.name}
              setCheckItem={setCheckItem}
              checkItem={checkItem}
            />
          </div>
          <div className="relative w-96">
            <Image
              className="absolute -top-10 left-0"
              src={"/about-list-bg.svg"}
              alt="image-bg-top"
              width={433}
              height={41}
            />

            <RenderImages images={data.about_logos} category={checkItem} />
            <Image
              className="absolute -bottom-2 left-0 rotate-180 "
              src={"/about-list-bg.svg"}
              alt="image-bg-bottom"
              width={433}
              height={41}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
