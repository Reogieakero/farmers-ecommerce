import React from "react";
import { FaLeaf } from "react-icons/fa";
import styles from "./banner.module.css";

export default function Banner() {
  return (
    <section className={styles.farmBanner}>
      <div className={styles.farmBannerInner}>
        <div className={styles.farmBrand}>
          <FaLeaf className={styles.farmLeaf} />
          <div className={styles.farmTitle}>
            <h1>FarmFresh</h1>
            <p className={styles.farmSub}>Fresh, organic produce delivered to your door.</p>
          </div>
        </div>

        <div className={styles.farmCta}>
          <a className={`${styles.btn} ${styles.btnPrimary}`} href="#products">Shop Now</a>
          <a className={`${styles.btn} ${styles.btnOutline}`} href="#about">Learn More</a>
        </div>
      </div>
    </section>
  );
}