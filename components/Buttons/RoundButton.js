import { IoIosArrowDown } from "react-icons/io";
import styles from "./Button.module.css";

const RoundButton = ({ type }) => {
  return (
    <button className={`${styles["round-btn"]} ${styles[type]}`}>
      <IoIosArrowDown className={styles["round-btn-icon"]} />
    </button>
  );
};

export default RoundButton;
