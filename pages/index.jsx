// pages/index.js
import React, { useEffect } from 'react';
import  MainLayout from '../components/layouts/MainLayout';
import styles from '../styles/index.module.scss';
import Image from 'next/image';

import { Toaster, toast } from 'sonner';

const LandPage = () => {
  useEffect(() => {   

  }, []);
  return (
    <MainLayout>
      <div className={styles.titulo}>
        MIS PEDIDOS
      </div>
      <div className={styles.titulo2}>
        MIS PEDIDOS
      </div>
    </MainLayout>
  );
};

export default LandPage;