// components/FooterMain.js
import React from 'react';
import styles from '../styles/FooterMain.module.scss';

const FooterMain = () => {
  return (
    <div className={styles.footer}>
    <div >
      <div className={styles.container}>
            <p className={styles.container__p}>
              Copyright © 2023 - SENA CDIT / ADSO - 2465417
            </p>
      </div>
    </div>
    </div>
  );
};

export default FooterMain;