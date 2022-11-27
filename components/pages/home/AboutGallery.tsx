import Image from "next/image";
import { FC } from "react";
import { motion } from "framer-motion";

interface ImageProps {
  company: string;
  src: string;
  width: number;
  height: number;
}

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
    <motion.div className="flex images-container">
      <motion.ul className="images-list">
        {leftArray.map((image, i) => {
          const { company, src, width, height } = image;
          return (
            <motion.li
              key={i}
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
                className={"m-5"}
                src={src}
                alt={company}
                width={width}
                height={height}
              />
            </motion.li>
          );
        })}
      </motion.ul>
      <motion.ul>
        {rightArray.map((image, i) => {
          const { company, src, width, height } = image;
          return (
            <motion.li
              key={i}
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
                className={"m-5"}
                src={src}
                alt={company}
                width={width}
                height={height}
              />
            </motion.li>
          );
        })}
      </motion.ul>
    </motion.div>
  );
};

export default AboutGallery;
