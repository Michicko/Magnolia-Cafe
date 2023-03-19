import Link from "next/link";
import styles from "./Navbar.module.css";
import { FaRegUser } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { useRouter } from "next/router";
import generateUniqueId from "@/utils/generateUniqueId";

const Navbar = () => {
  const links = ["home", "about", "menu", "contact"];
  const router = useRouter();
  const { pathname } = router;
  const currentLink = pathname.split("/")[1];
  const currentLinkIndex = links.indexOf(currentLink);

  return (
    <nav className={styles.nav}>
      <Link className={styles["nav-logo"]} href="/">
        Magnolia cafe
      </Link>
      <div className={`${styles["nav-links"]} ${styles.main}`}>
        {links.map((link, i) => {
          if (link === "home") {
            return (
              <Link
                href={"/"}
                className={`${styles["nav-link"]} ${
                  currentLink === "" ? styles.active : ""
                }`}
                key={generateUniqueId()}
              >
                {link}
              </Link>
            );
          }
          return (
            <Link
              href={link}
              className={`${styles["nav-link"]} ${
                currentLinkIndex === i ? styles.active : ""
              }`}
              key={generateUniqueId()}
            >
              {link}
            </Link>
          );
        })}
      </div>
      <div className={`${styles["nav-links"]} ${styles.sub}`}>
        <Link href={"/profile"}>
          <FaRegUser className={styles["nav-icon"]} />
        </Link>
        <button className={styles["nav-cart-btn"]}>
          <IoBagOutline className={styles["nav-icon"]} />
          <span className={styles["cart-total"]}>2</span>
        </button>
        <Link className={styles["nav-btn"]} href="/reservation">
          Book a Table
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
