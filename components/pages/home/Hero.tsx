import Image from "next/image";
import Button from "../../Button";
import { useEffect, useState } from "react";

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
    <ul className="flex justify-between pl-20">
      {images &&
        images.length !== 0 &&
        images.map(({ src, company, id, width, height }) => (
          <li key={id}>
            <Image
              src={src}
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
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    const response = await fetch("api/hero/teams");
    const newImages = await response.json();
    console.log(newImages);
    setImages(newImages.data);
  };

  useEffect(() => {
    // if (images.length === 0) {
    //   fetchImages();
    // }
  }, [images]);

  return (
    <main className="flex justify-center">
      <div className=" w-3/4 pt-16 pb-16 flex-col">
        <h1 className="font-medium text-center text-7xl pl-48 pr-44 mb-6">
          Employment{" "}
          <span className="text-text_orange relative">
            <Image
              className="absolute top-14 right-3"
              src={require("/assets/images/hero-zigzag.svg")}
              alt="image-bg"
              width={433}
              height={41}
            />
            made simple
          </span>{" "}
          for all trade businesses
        </h1>

        <p className="text-lg leading-8 text-center  mb-12">
          Lorem is sum this is sum ipsum, lorem is sum sum sum sum plus one is
          <br /> sum ipsum.
        </p>
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
        <div className="">
          <p className="text-base text-center leading-7 mb-8">
            Trusted by teams of all sizes
          </p>
          <RenderLogos images={images} />
        </div>
      </div>
    </main>
  );
};

export default Hero;
