import Link from "next/link";
import styles from "./NavBar.module.css";
import LogoLink from "./LogoLink";
import { useState, useEffect } from "react";
import IgIcon from "../public/instagram_icon.svg";

const NavBar = () => {
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", hideNav);
  }, []);

  let prevScroll;

  const hideNav = () => {
    if (window.scrollY > prevScroll) {
      setNavbar(true);
      prevScroll = window.scrollY;
    } else {
      setNavbar(false);
      prevScroll = window.scrollY;
    }
  };

  return (
    <div
      className={
        navbar ? styles["nav-container-hide"] : styles["nav-container"]
      }
    >
      <div className={styles.links}>
        <Link href="/contact">contact</Link>
        <Link href="/about">about</Link>
        <a className={styles.instagram} href="">
          <IgIcon />
        </a>
      </div>
      <LogoLink />
    </div>
  );
};

export default NavBar;
