import Head from "next/head";
import styles from "./landing.module.css";
import Image from "next/image";
import Copyright from "@components/Copyright";

export default function Landing() {
  return (
    <div className={styles.landing}>
      <Head></Head>
      <div className={styles["images-container"]}>
        <div className={styles["image-container"]}>
          <Image
            src="/images/mitchell-luo-XQM6QgFIezg-unsplash.jpg"
            alt="Stained Glass"
            width={480}
            height={380}
            className={styles["landing-image"]}
          />
        </div>
        <div className={styles["image-container"]}>
          <Image
            src="/images/marie-bellando-mitjans-qAh_tS-vdOU-unsplash.jpg"
            alt="Stained Glass"
            width={480}
            height={380}
            className={styles["landing-image"]}
          />
        </div>
        <div className={styles["image-container"]}>
          <Image
            src="/images/ant-rozetsky-u93RuS6IJGk-unsplash.jpg"
            alt="Stained Glass"
            width={480}
            height={380}
            className={styles["landing-image"]}
          />
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, sed do eiusmod tempor incididunt ut labore et. Let’s get in
        touch.
      </p>
      <div className={styles["sign-up-container"]}></div>
      <Copyright />
    </div>
  );
}
