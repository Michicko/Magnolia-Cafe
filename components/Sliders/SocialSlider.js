import generateUniqueId from "@/utils/generateUniqueId";
import Image from "next/image";
import styles from "./SocialSlider.module.css";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const SocialSlider = ({ images }) => {
  const [width, setWidth] = useState(0);
  const slider = useRef(null);
  const constraintsRef = useRef(null);

  useEffect(() => {
    setWidth(slider.current.scrollWidth - slider.current.offsetWidth);
  }, []);

  return (
    <div className={styles["social-slider"]} ref={constraintsRef}>
      <motion.div
        ref={slider}
        whileTap={{ cursor: "grabbing" }}
        className={styles["social-slider-inner"]}
      >
        <motion.div
          className={styles["social-slides"]}
          drag={"x"}
          dragConstraints={constraintsRef}
        >
          {images.map((img) => {
            return (
              <motion.div
                className={styles["img-box"]}
                key={generateUniqueId()}
              >
                <Image
                  src={require(`../../public/${img}`)}
                  fill
                  sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SocialSlider;
