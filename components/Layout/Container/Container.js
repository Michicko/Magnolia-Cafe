import styles from "./Container.module.css";

const Container = ({ size, children }) => {
  return (
    <div className={`${styles["container"]} ${styles[size]}`}>{children}</div>
  );
};

export default Container;
