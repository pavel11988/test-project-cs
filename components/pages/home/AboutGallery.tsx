import Image from "next/image";
import { FC } from "react";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";
import styled, { css } from "styled-components";

interface ImageProps {
  company: string;
  src: string;
  width: number;
  height: number;
}

const gradientStyles = css`
  content: "";
  position: absolute;
  width: 100%;
  height: 30px;
  z-index: 20;
`;

const AboutContainer = styled(motion.div)`
  position: relative;
  margin-top: 30px;
  overflow: hidden;

  &::before {
    ${gradientStyles}
    top:0;
    background: linear-gradient(
      0deg,
      rgba(2, 0, 36, 0) 0%,
      rgba(218, 106, 32, 1) 45%,
      rgba(218, 106, 32, 1) 100%
    );
  }
  &::after {
    ${gradientStyles}
    bottom: 0;
    background: linear-gradient(
      180deg,
      rgba(2, 0, 36, 0) 0%,
      rgba(218, 106, 32, 1) 45%,
      rgba(218, 106, 32, 1) 100%
    );
  }
`;

const List = styled(motion.ul)`
  height: 700px;
`;

interface AboutGalleryProps {
  images: ImageProps[];
}
const separateArray = (images: ImageProps[]) => {
  if (images.length > 8) images = images.slice(0, 8);
  else if (images.length < 8) {
    let newImages = [...images];
    while (newImages.length < 8) newImages = [...newImages, ...images];
    if (newImages.length > 8) images = newImages.slice(0, 8);
    else images = newImages;
  }
  return [images.slice(0, 4), images.slice(4, 8)];
};

const AboutGallery: FC<AboutGalleryProps> = ({ images }) => {
  const [leftArray, rightArray] = separateArray(images);

  return (
    <AboutContainer style={{ display: "flex" }}>
      <List>
        {leftArray.map((image, i) => {
          const { company, src, width, height } = image;
          return (
            <motion.li
              key={uuidv4()}
              animate={{ y: 50 }}
              transition={{ delay: 0 }}
              whileHover={{
                position: "relative",
                zIndex: 11,
                y: i > 1 ? -100 : 120,
                x: 30,
                scale: [1, 1.5],
                transition: {
                  duration: 0.2,
                },
              }}
            >
              <Image
                style={{ margin: "20px" }}
                src={src}
                alt={company}
                width={width}
                height={height}
              />
            </motion.li>
          );
        })}
      </List>
      <List>
        {rightArray.map((image, i) => {
          const { company, src, width, height } = image;
          return (
            <motion.li
              key={uuidv4()}
              animate={{ y: -50 }}
              transition={{ delay: 0 }}
              whileHover={{
                position: "relative",
                zIndex: 11,
                y: i > 1 ? -100 : 120,
                x: -30,
                scale: [1, 1.5],
                transition: {
                  duration: 0.2,
                },
              }}
            >
              <Image
                style={{ margin: "20px" }}
                src={src}
                alt={company}
                width={width}
                height={height}
              />
            </motion.li>
          );
        })}
      </List>
    </AboutContainer>
  );
};

export default AboutGallery;
