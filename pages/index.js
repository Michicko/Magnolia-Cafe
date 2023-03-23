import styles from "../styles/Home.module.css";
import SocialIcons from "@/components/Icons/SocialIcons";
import Header from "@/components/Pages/Home/Header";
import RoundButton from "@/components/Buttons/RoundButton";
import { ImDiamonds } from "react-icons/im";
import Container from "@/components/Layout/Container/Container";
import Heading from "@/components/Typography/Heading";
import Text from "@/components/Typography/Text";

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
      {/* seasons */}
      <section className={`${styles.section} ${styles.seasons}`}>
        <Container size={"lg"}>
          <div className={styles["section-inner"]}>
            <Heading
              type={1}
              text="Hot winter treats"
              color={"light"}
              center={true}
            />
            <Text
              text={"Limited time only - Available until feb 28th 2023"}
              center={true}
              color={"secondary"}
              size={"lg"}
              upper={true}
            />
            <div className={styles["treats"]}></div>
          </div>
        </Container>
      </section>
      {/* sets */}
    </>
  );
}
