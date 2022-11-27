import Image from "next/image";
import { FC, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

interface ImageProps {
  company: string;
  src: string;
  width: number;
  height: number;
}

interface AboutGalleryProps {
  images: ImageProps[];
}

interface changedImageProps {
  // id: 'string'
  company: string;
  src: string;
  width: number;
  height: number;
}

const separateArray = (images: changedImageProps[]) => {
  if (images.length > 8) images = images.slice(0, 8);
  else if (images.length < 8) {
    let newImages = [...images];
    while (newImages.length < 8) newImages = [...newImages, ...images];
    if (newImages.length > 8) images = newImages.slice(0, 8);
    else images = newImages;
  }
  const changedImages = images.map((image) => {
    const id = uuidv4();
    return {
      ...image,
      id,
    };
  });
  return [changedImages.slice(0, 4), changedImages.slice(4, 8)];
};

const AboutGallery: FC<AboutGalleryProps> = ({ images }) => {
  const [hovered, setHovered] = useState<null | string>(null);

  const [leftArray, rightArray] = useMemo(
    () => separateArray(images),
    [images]
  );

  // useEffect(() => {
  //   console.log(hovered);
  // }, [hovered]);

  // useEffect(() => {
  //   console.log("rerender");
  // }, [images]);

  return (
    <motion.div className="flex images-container">
      <motion.ul className="images-list">
        {leftArray.map((image, i) => {
          const { id, company, src, width, height } = image;
          return (
            <motion.li
              onMouseEnter={() => setHovered(id)}
              onMouseLeave={() => setHovered(null)}
              key={i}
              animate={{ y: 50 }}
              transition={{ delay: 0 }}
              className={"relative"}
            >
              <motion.img
                animate={
                  id === hovered
                    ? {
                        position: "relative",
                        zIndex: 25,
                        y: i > 1 ? -100 : 120,
                        x: 30,
                        scale: [1, 1.5],
                        transition: {
                          duration: 0.2,
                        },
                      }
                    : { position: "relative", zIndex: 10 }
                }
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
          const { id, company, src, width, height } = image;
          return (
            <motion.li
              onMouseEnter={() => setHovered(id)}
              onMouseLeave={() => setHovered(null)}
              key={i}
              animate={{ y: -50 }}
              transition={{ delay: 0 }}
            >
              <motion.img
                animate={
                  id === hovered
                    ? {
                        position: "relative",

                        y: i > 1 ? -100 : 120,
                        x: -30,
                        zIndex: 25,
                        scale: [1, 1.5],
                        transition: {
                          duration: 0.2,
                        },
                      }
                    : {}
                }
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
