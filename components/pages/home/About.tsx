import { FC, useState } from "react";
import AboutItem from "./AboutItem";
import Image from "next/image";

import AboutGallery from "./AboutGallery";
import { AnimatePresence } from "framer-motion";

interface ImageProps {
  company: string;
  src: string;
  width: number;
  height: number;
}

interface AboutLogos {
  [key: string]: ImageProps[];
}

interface AboutProps {
  title: string;
  text: string;
  trades: {
    social: {
      title: string;
      text: string;
      name: string;
    };
    radio: {
      title: string;
      text: string;
      name: string;
    };
    social_video: {
      title: string;
      text: string;
      name: string;
    };
    reporting: {
      title: string;
      text: string;
      name: string;
    };
  };
  about_logos: AboutLogos;
}

interface RenderAboutProps {
  images: AboutLogos;
  category: string;
}

export const RenderImages = ({ images, category }: RenderAboutProps) => {
  if (!category || images[category]?.length === 0) {
    return <p className="mt-10">No data</p>;
  }
  const currentImages = images[category];
  return <AboutGallery images={currentImages} />;
};

const About: FC<AboutProps> = ({ title, text, trades, about_logos }) => {
  const [checkItem, setCheckItem] = useState("radio");
  return (
    <section className="bg-background_orange">
      <div className="pt-20 pb-12">
        <h2 className="font-medium text-5xl text-text_white text-center mb-7">
          {title}
        </h2>
        <p className="font-normal text-lg text-text_white text-center mb-4">
          {text}
        </p>
        <div className="flex justify-center ">
          <div className="w-2/7 mt-24 mr-28">
            <AboutItem
              title={trades.social.title}
              text={trades.social.text}
              name={trades.social.name}
              setCheckItem={setCheckItem}
              checkItem={checkItem}
            />
            <AboutItem
              title={trades.radio.title}
              text={trades.radio.text}
              name={trades.radio.name}
              setCheckItem={setCheckItem}
              checkItem={checkItem}
            />
            <AboutItem
              title={trades.social_video.title}
              text={trades.social_video.text}
              name={trades.social_video.name}
              setCheckItem={setCheckItem}
              checkItem={checkItem}
            />
            <AboutItem
              title={trades.reporting.title}
              text={trades.reporting.text}
              name={trades.reporting.name}
              setCheckItem={setCheckItem}
              checkItem={checkItem}
            />
          </div>

          <RenderImages images={about_logos} category={checkItem} />
        </div>
      </div>
    </section>
  );
};

export default About;
