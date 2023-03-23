import Image from "next/image";
import Link from "next/link";
import { IoBody } from "react-icons/io5";
import Text from "../Typography/Text";
import styles from "./Card.module.css";

const Card = ({ marker, withBody, outerBorder, size, image, name, price }) => {
  return (
    <div
      className={`${styles.card} ${withBody ? styles["with-body"] : ""}
      ${styles[marker]}`}
    >
      <div className={`${styles["card-img-box"]} ${styles[size]} `}>
        <Image
          src={require(`../../public/${image}`)}
          className={styles["card-img"]}
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </div>
      {outerBorder && <div className={styles["outer-border"]}></div>}
      {withBody && (
        <div className={styles["card-body"]}>
          <Text
            text={name}
            color={"light"}
            center={true}
            size={"md"}
            capitalized={true}
          />
          <Text
            text={`$${price}`}
            color={"secondary"}
            center={true}
            size={"md"}
          />
        </div>
      )}
    </div>
  );
};

export default Card;
