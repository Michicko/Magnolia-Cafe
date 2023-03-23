import styles from "../styles/Home.module.css";
import SocialIcons from "@/components/Icons/SocialIcons";
import Header from "@/components/Pages/Home/Header";
import RoundButton from "@/components/Buttons/RoundButton";
import { ImDiamonds } from "react-icons/im";
import Container from "@/components/Layout/Container/Container";
import Heading from "@/components/Typography/Heading";
import Text from "@/components/Typography/Text";
import Card from "@/components/Card/Card";
import generateUniqueId from "@/utils/generateUniqueId";

export default function Home() {
  const treats = [
    {
      name: "Gingerbread cappuccino with mashmallow",
      image: "winter-1.png",
      price: 4.5,
    },
    {
      name: "Gingerbread cookies",
      image: "winter-2.jpg",
      price: 4,
    },
    {
      name: "Peppermint hot chocolatewith mashmallow",
      image: "winter-3.png",
      price: 5,
    },
  ];

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
            <div className={styles["treats"]}>
              {treats.map((treat, i) => {
                const { name, image, price } = treat;
                return (
                  <Card
                    withBody={true}
                    outerBorder={true}
                    size={i === treats.length - 1 ? "lg" : "md"}
                    marker={`treats-${i + 1}`}
                    image={image}
                    name={name}
                    price={price}
                    key={generateUniqueId()}
                  />
                );
              })}
            </div>
          </div>
        </Container>
      </section>
      {/* sets */}
      <section className={`${styles.section} ${styles.sets}`}>
        <Container size={"lg"}>
          <div className={styles["section-inner"]}>
            <Heading
              type={1}
              text="Breakfast Sets"
              color={"light"}
              center={true}
            />
            <Text
              text={"Start your day right"}
              center={true}
              color={"light"}
              size={"sm"}
              upper={false}
            />
            <Text
              text={"Buy your breakfast untill 11am"}
              center={true}
              color={"light"}
              size={"sm"}
              upper={false}
            />
          </div>
        </Container>
      </section>
    </>
  );
}
