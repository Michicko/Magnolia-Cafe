import Link from "next/link";
import styles from "./Button.module.css";

const Button = ({ active, iconDirection, text, icon, center, type, link }) => {
  if (type === "link") {
    return (
      <Link
        href={link}
        className={`${styles.btn} ${active ? btn.active : ""} ${
          styles[iconDirection]
        } ${center ? styles.center : ""}`}
      >
        {icon && iconDirection === "left" && <>{icon}</>}
        <span className={styles["btn-text"]}>{text}</span>
        {icon && iconDirection === "right" && <>{icon}</>}
      </Link>
    );
  }
  return (
    <button
      className={`${styles.btn} ${active ? btn.active : ""} ${
        styles[iconDirection]
      } ${center ? styles.center : ""}`}
    >
      {icon && iconDirection === "left" && <>{icon}</>}
      <span className={styles["btn-text"]}>{text}</span>
      {icon && iconDirection === "right" && <>{icon}</>}
    </button>
  );
};

export default Button;
