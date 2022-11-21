import { useState } from "react";
import AboutItem from "./AboutItem";
import { radioImages } from "../assets/images/about";
import Image from "next/image";

type image = {
  id: string;
  company: string;
  src: string;
  width: number;
  height: number;
};

interface IRenderAboutProps {
  images: image[];
  category: string;
}

const RenderAboutImages = ({ images, category }: IRenderAboutProps) => {
  if (category !== "radio") return <h3>No data</h3>;
  return (
    <div className="flex relative h-[810px] overflow-scroll w-[392px] ">
      <Image
        className="absolute top-[-1px] left-[-1px]"
        src={require("../assets/images//about-list-bg.svg")}
        alt="image-bg-top"
        width={433}
        height={41}
      />
      <ul className="flex flex-wrap list-none mt-[80px]">
        {images &&
          images.map((image) => {
            if (images.indexOf(image) % 2 !== 0) return;
            const { src, id, width, height } = image;
            return (
              <li key={id} className="first:mt-[84px] mt-[18px] ]">
                <Image
                  src={require(`../assets/images/about/${category}/${src}`)}
                  width={width}
                  height={height}
                  alt={`${category}/${src}_logo`}
                />
              </li>
            );
          })}
      </ul>

      <ul className=" flex flex-wrap list-none">
        {images &&
          images.map((image) => {
            if (images.indexOf(image) % 2 === 0) return;
            const { src, id, width, height } = image;
            return (
              <li key={id} className="first:mt-[84px]]">
                <Image
                  src={require(`../assets/images/about/${category}/${src}`)}
                  width={width}
                  height={height}
                  alt={`${category}/${src}_logo`}
                />
              </li>
            );
          })}
      </ul>

      <Image
        className="absolute bottom-[0px] right-[0px] rotate-180 "
        src={require("../assets/images/about-list-bg.svg")}
        alt="image-bg-bottom"
        width={433}
        height={41}
      />
    </div>
  );
};

const About = () => {
  const [checkItem, setCheckItem] = useState("radio");

  return (
    <section className="bg-background_orange">
      <div className="w-[1512px] pt-[76px] pl-[213px] pr-[203px] pb-[48px]">
        <h2 className="font-medium text-[48px] text-text_white text-center mb-[27px]">
          What does Test Site offer?
        </h2>
        <p className="font-normal text-[18px] text-text_white text-center mb-[15px]">
          We’re not just a job site, what makes us stand out are our trade
          focused offerings.
        </p>
        <div className="flex">
          <div className="mt-[94px] mr-[113px]">
            <AboutItem
              title={"Social"}
              description={
                "Direct list all of your job sites directly onto social. We’redigital natives."
              }
              name={"social"}
              setCheckItem={setCheckItem}
              checkItem={checkItem}
            />
            <AboutItem
              title={"Radio"}
              description={
                "We partner with the biggest radio advertisers to get you nationwide coverage."
              }
              name={"radio"}
              setCheckItem={setCheckItem}
              checkItem={checkItem}
            />
            <AboutItem
              title={"Social Video"}
              description={
                "Direct list all of your job sites directly onto social. We’re digital natives, video video video."
              }
              name={"social_video"}
              setCheckItem={setCheckItem}
              checkItem={checkItem}
            />
            <AboutItem
              title={"Reporting"}
              description={"Weekly, Monthyl reports."}
              name={"reporting"}
              setCheckItem={setCheckItem}
              checkItem={checkItem}
            />
          </div>

          <RenderAboutImages images={radioImages} category={checkItem} />
        </div>
      </div>
    </section>
  );
};

export default About;
