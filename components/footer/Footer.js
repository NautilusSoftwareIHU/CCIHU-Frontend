import React from 'react'
import styles from "./Footer.module.css"
const Footer = () => {
  return (
   <>
    <div className={styles.Footer}>
      <div className={styles.comp}>
        Copyright 2024
      </div>
      <div className={styles.comp2}>
        <div>Privacy Policy</div>
        <div>Terms of Use</div>
      </div>
    </div>
   </>

  )
}

export default Footer
