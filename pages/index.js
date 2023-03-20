import styles from "../styles/Home.module.css";
import SocialIcons from "@/components/Icons/SocialIcons";
import Header from "@/components/Pages/Home/Header";
import RoundButton from "@/components/Buttons/RoundButton";
import { ImDiamonds } from "react-icons/im";

export default function Home() {
  return (
    <>
      <header className={`${styles.header} row`}>
        <div className={styles["header-bg"]}></div>
        <div className={styles["header-logo-box"]}>
          <ImDiamonds className={styles["header-logo-icon"]} />
          <h1 className={styles["header-logo"]}>Magnolia</h1>
          <ImDiamonds className={styles["header-logo-icon"]} />
        </div>

        <div className={styles["header-icons"]}>
          <SocialIcons color={"light"} />
        </div>
      </header>
      <RoundButton type={"page-direction"} />
    </>
  );
}
