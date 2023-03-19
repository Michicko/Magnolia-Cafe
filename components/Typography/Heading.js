import styles from "./Typography.module.css";

const Heading = ({ text, type, color }) => {
  return (
    <>
      {type === 1 && (
        <h1
          className={`${styles.heading} ${styles["heading-1"]} ${styles[color]}`}
        >
          {text}
        </h1>
      )}
      {type === 2 && (
        <h2
          className={`${styles.heading} ${styles["heading-2"]} ${styles[color]}`}
        >
          {text}
        </h2>
      )}
    </>
  );
};

export default Heading;
