// components/layouts/MainLayout.js
import React from 'react';
import FooterMain from '../FooterMain'
import NavbarMain from '../NavbarMain'

import styles from '../../styles/global.css'


const MainLayout = ({ children }) => {
  return (
    <div style={styles.body}>
      <header>
        <NavbarMain/>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <FooterMain/>
      </footer>
    </div>
  );
};

export default MainLayout;
