import styles from "../styles/Home.module.css";
import SocialIcons from "@/components/Icons/SocialIcons";
import RoundButton from "@/components/Buttons/RoundButton";
import { ImDiamonds } from "react-icons/im";
import Container from "@/components/Layout/Container/Container";
import Heading from "@/components/Typography/Heading";
import Text from "@/components/Typography/Text";
import Card from "@/components/Card/Card";
import generateUniqueId from "@/utils/generateUniqueId";
import Button from "@/components/Buttons/Button";
import { CgArrowLongRight } from "react-icons/cg";
import Image from "next/image";
import SocialSlider from "@/components/Sliders/SocialSlider";
import { AiOutlineInstagram } from "react-icons/ai";

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

  const sets = [
    {
      name: "chocolate croissant and almond latte macchiato",
      image: "breakfast-1.jpg",
      price: 7,
    },
    {
      name: "vegetable bagel and cappuccino",
      image: "breakfast-2.jpg",
      price: 11,
    },
    {
      name: "Avocado toast with egg & latte",
      image: "breakfast-3.jpg",
      price: 12.5,
    },
  ];

  const menu = [
    {
      name: "cappuccino",
      image: "cappuccino.jpg",
      price: 5.25,
    },
    {
      name: "iced latte",
      image: "iced-latte.jpg",
      price: 4.5,
    },
  ];

  const images = [
    "social-1.jpg",
    "social-2.jpg",
    "social-3.jpg",
    "social-4.jpg",
    "social-5.jpg",
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
      <section className={`${styles.section} ${styles.periods}`}>
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
            <div className={styles.sets}>
              {sets.map((set, i) => {
                const { name, image, price } = set;
                return (
                  <Card
                    withBody={true}
                    outerBorder={true}
                    size={"md"}
                    marker={`sets-${i + 1}`}
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
      <section className={`${styles.section} ${styles.menu}`}>
        <Container size={"md"}>
          <div className={styles["section-inner"]}>
            <Heading type={1} text="Menu" color={"light"} center={true} />
            <div className={styles["menu-items"]}>
              {menu.map((item, i) => {
                const { name, image, price } = item;
                return (
                  <Card
                    withBody={true}
                    outerBorder={false}
                    size={"lg"}
                    marker={`menuItem-${i + 1}`}
                    image={image}
                    name={name}
                    price={price}
                    key={generateUniqueId()}
                  />
                );
              })}
              <div className={`${styles.bean} ${styles["bean-1"]}`}>
                <div className="bean-img-box">
                  <Image
                    src={require("../public/1.png")}
                    alt={"coffee bean"}
                    fill
                    sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                  />
                </div>
              </div>
              <div className={`${styles.bean} ${styles["bean-3"]}`}>
                <div className="bean-img-box">
                  <Image
                    src={require("../public/3.png")}
                    alt={"coffee bean"}
                    fill
                    sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                  />
                </div>
              </div>
              <div className={`${styles.bean} ${styles["bean-4"]}`}>
                <div className="bean-img-box">
                  <Image
                    src={require("../public/4.png")}
                    alt={"coffee bean"}
                    fill
                    sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                  />
                </div>
              </div>
              <div className={`${styles.bean} ${styles["bean-2"]}`}>
                <div className="bean-img-box">
                  <Image
                    src={require("../public/2.png")}
                    alt={"coffee bean"}
                    fill
                    sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                  />
                </div>
              </div>
              <div className={`${styles.bean} ${styles["bean-5"]}`}>
                <div className="bean-img-box">
                  <Image
                    src={require("../public/5.png")}
                    alt={"coffee bean"}
                    fill
                    sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                  />
                </div>
              </div>
              <div className={`${styles.grain} ${styles["grain-1"]}`}>
                <div className="bean-img-box">
                  <Image
                    src={require("../public/grain.png")}
                    alt={"coffee grains"}
                    fill
                    sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                  />
                </div>
              </div>
              <div className={`${styles.grain} ${styles["grain-2"]}`}>
                <div className="bean-img-box">
                  <Image
                    src={require("../public/grain.png")}
                    alt={"coffee grains"}
                    fill
                    sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                  />
                </div>
              </div>
            </div>
            <Button
              type={"link"}
              link={"/menu"}
              text={"See menu"}
              iconDirection={"right"}
              icon={<CgArrowLongRight className={styles["menu-btn-icon"]} />}
              center={true}
            />
          </div>
        </Container>
      </section>
      {/* socials */}
      <section className={styles.socials}>
        <SocialSlider images={images} />
        <Button
          text={"Follow us on instagram"}
          iconDirection={"left"}
          icon={<AiOutlineInstagram className={styles["social-icon"]} />}
          center={true}
        />
        <div className={`${styles.bean} ${styles["bean-social"]}`}>
          <div className="bean-img-box">
            <Image
              src={require("../public/4.png")}
              alt={"coffee bean"}
              fill
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            />
          </div>
        </div>
      </section>
    </>
  );
}
