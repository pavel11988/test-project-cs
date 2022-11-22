import { useEffect, useState } from "react";
import AboutItem from "./AboutItem";

import Image from "next/image";

type Image = {
  id: string;
  company: string;
  src: string;
  width: number;
  height: number;
};

interface RenderAboutProps {
  images: Image[] | [];
  category: string;
}
//
const RenderAboutImages = ({ images, category }: RenderAboutProps) => {
  if (category !== "radio") return <h3>No data</h3>;
  return (
    <>
      <div className="flex h-max overflow-scroll">
        <ul className="flex flex-wrap list-none mt-2.5 ">
          {images &&
            images.length !== 0 &&
            images.map((image) => {
              if (images.indexOf(image) % 2 !== 0) return;
              const { src, id, width, height } = image;
              return (
                <li key={id} className="first:mt-20 mb-5">
                  <Image
                    src={src}
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
            images.length !== 0 &&
            images.map((image) => {
              if (images.indexOf(image) % 2 === 0) return;
              const { src, id, width, height } = image;
              return (
                <li key={id} className="">
                  <Image
                    src={src}
                    width={width}
                    height={height}
                    alt={`${category}/${src}_logo`}
                  />
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};

const About = () => {
  const [checkItem, setCheckItem] = useState("radio");
  const [images, setImages] = useState([]);

  const fetchImages = async (checkItem: string) => {
    const response = await fetch(`api/about/${checkItem}`);
    const newImages = await response.json();
    console.log(newImages);
    setImages(newImages.data);
  };

  useEffect(() => {
    fetchImages(checkItem);
  }, [checkItem]);

  return (
    <section className="bg-background_orange">
      <div className="pt-20 pb-12">
        <h2 className="font-medium text-5xl text-text_white text-center mb-7">
          What does Test Site offer?
        </h2>
        <p className="font-normal text-lg text-text_white text-center mb-4">
          We’re not just a job site, what makes us stand out are our trade
          focused offerings.
        </p>
        <div className="flex justify-center ">
          <div className="w-2/7 mt-24 mr-28">
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
          <div className="relative w-96 pt-12 pb-12 overflow-y-scroll">
            <Image
              className="absolute -top-10 left-0"
              src={require("/assets/images/about-list-bg.svg")}
              alt="image-bg-top"
              width={433}
              height={41}
            />
            <RenderAboutImages images={images} category={checkItem} />

            <Image
              className="absolute -bottom-2 left-0 rotate-180 "
              src={require("/assets/images/about-list-bg.svg")}
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
