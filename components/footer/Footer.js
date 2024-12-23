import React from "react";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div>
          <p>&copy; Copyright 2024</p>
        </div>
        <div className={styles.comp2}>
          <div>Privacy Policy</div>
          <div>Terms of Use</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
