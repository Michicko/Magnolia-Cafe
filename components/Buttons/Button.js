import styles from "./Button.module.css";

const Button = ({ active, iconDirection, text, icon }) => {
  return (
    <button
      className={`${styles.btn} ${active ? btn.active : ""} ${
        styles[iconDirection]
      }`}
    >
      {icon && iconDirection === "left" && <>{icon}</>}
      <span className={styles["btn-text"]}>{text}</span>
      {icon && iconDirection === "right" && <>{icon}</>}
    </button>
  );
};

export default Button;
