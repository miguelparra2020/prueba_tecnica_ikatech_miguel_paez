// components/NavbarLogin.js
import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/NavbarMain.module.scss';

const NavbarMain = () => {
  useEffect(() => {
  
  }, []);



  return (
    <div className={styles.header_content}>
      <div className={styles.div_promo}>
        HOT SALE -30% EN SANDALIAS
      </div>
      <div className={styles.content_micuenta}>
        <div className={styles.div_menu_micuenta}>
            <div>

            </div>
            <div>

            </div>
            <div>
              
            </div>
        </div>
      </div>
      
    </div>
  );
};

export default NavbarMain;