import Image from "next/image";
import { FC } from "react";
import Button from "../../Button";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";

export interface ImageProps {
  company: string;
  src: string;
  width: number;
  height: number;
}

interface HeroProps {
  title: string;
  main_text: string;
  teams_text: string;
  teams_logos: ImageProps[];
}

interface RenderAboutProps {
  images: ImageProps[];
}

export const RenderImages = ({ images }: RenderAboutProps) => {
  return (
    <ul className="flex justify-around">
      {images &&
        images.length &&
        images.map((image: ImageProps) => {
          const { company, src, width, height } = image;
          return (
            <motion.li
              key={uuidv4()}
              whileHover={{
                position: "relative",
                zIndex: 11,
                scale: [1, 1.2],
                transition: {
                  duration: 0.7,
                },
              }}
              animate={{ opacity: [0, 1] }}
              transition={{ delay: 1.4 }}
            >
              <Image src={src} alt={company} width={width} height={height} />
            </motion.li>
          );
        })}
    </ul>
  );
};

const Hero: FC<HeroProps> = ({ title, main_text, teams_text, teams_logos }) => {
  return (
    <main className="flex justify-center">
      <div className=" w-4/5 pt-16 pb-16 flex-col">
        <motion.div
          style={{
            paddingTop: "40px",
            paddingBottom: "40px",
            paddingLeft: "220px",
            paddingRight: "220px",
          }}
          animate={{ opacity: [0, 1] }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="text-7xl">
            Employment{" "}
            <span className="text-text_orange relative">
              <motion.span
                animate={{ opacity: [0, 1] }}
                transition={{ delay: 1 }}
              >
                <Image
                  className="absolute top-14 right-3 "
                  src={"/hero-zigzag.svg"}
                  alt="image-bg"
                  width={433}
                  height={41}
                />
              </motion.span>
              made simple
            </span>{" "}
            for all trade businesses
          </h1>
        </motion.div>
        <div className="text-center w-2/5 mx-auto">
          <p className="text-lg leading-8 mb-12">{main_text}</p>
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
          <p className="text-base text-center leading-7 mb-8">{teams_text}</p>
          <RenderImages images={teams_logos} />
        </div>
      </div>
    </main>
  );
};

export default Hero;
