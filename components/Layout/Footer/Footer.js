import styles from "./Footer.module.css";
const { motion } = require("framer-motion");

const Footer = () => {
  const footerVariants = {
    offscreen: {
      y: 100,
    },
    onscreen: {
      y: 0,
      transition: {
        type: "spring",
        bounce: 0,
        duration: 1,
      },
    },
  };
  return (
    <motion.footer
      className={styles.footer}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.8 }}
    >
      <motion.div className={styles["footer-inner"]} variants={footerVariants}>
        <div className={styles["footer-content"]}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
          mollitia nulla minima rem quos asperiores, itaque sed assumenda!
          Cumque temporibus quae expedita vero quidem iusto alias veniam ad.
          Quam, consequatur.
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
