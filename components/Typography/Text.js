import styles from "./Typography.module.css";

const Text = ({ size, text, color, center, upper, capitalized }) => {
  return (
    <p
      className={`${styles.text} ${styles[size]} ${styles[color]} ${
        center ? styles.center : ""
      } ${upper ? styles.upper : ""} ${capitalized ? styles.capitalized : ""}`}
    >
      {text}
    </p>
  );
};

export default Text;
