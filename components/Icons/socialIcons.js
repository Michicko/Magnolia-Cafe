import styles from "./SocialIcons.module.css";

import {
  AiOutlineInstagram,
  AiFillFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";
import generateUniqueId from "@/utils/generateUniqueId";

const SocialIcons = ({ color }) => {
  const links = [
    {
      link: "instagram.com",
      icon: (
        <AiOutlineInstagram
          className={`${styles["social-icon"]} ${styles[color]}`}
        />
      ),
    },
    {
      link: "facebook.com",
      icon: (
        <AiFillFacebook
          className={`${styles["social-icon"]} ${styles[color]}`}
        />
      ),
    },
    {
      link: "twitter.com",
      icon: (
        <AiOutlineTwitter
          className={`${styles["social-icon"]} ${styles[color]}`}
        />
      ),
    },
  ];

  return (
    <>
      {links.map((el) => {
        return (
          <a
            href={el.link}
            key={generateUniqueId()}
            target="_blank"
            className={styles["social-icon-link"]}
          >
            {el.icon}
          </a>
        );
      })}
    </>
  );
};

export default SocialIcons;
