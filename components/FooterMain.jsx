// components/FooterMain.js
import React from 'react';
import styles from '../styles/FooterMain.module.scss';

const FooterMain = () => {
  const year = new Date().getFullYear();
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        
      </div>
      <div className={styles.container}>
            <p className={styles.container__p}>
              Copyright © {year} - MIGUEL PÁEZ
            </p>
      </div>
    </div>
  );
};

export default FooterMain;