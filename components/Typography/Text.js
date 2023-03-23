import styles from "./Typography.module.css";

const Text = ({ size, text, color, center, upper }) => {
  return (
    <p
      className={`${styles.text} ${styles[size]} ${styles[color]} ${
        center ? styles.center : ""
      } ${upper ? styles.upper : ""}`}
    >
      {text}
    </p>
  );
};

export default Text;
