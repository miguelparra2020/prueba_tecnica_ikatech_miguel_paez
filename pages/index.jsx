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
     <div className={styles.content_banner_1}>
      <div className={styles.div_banner_1}>
          <div className={styles.div_banner_1_divisor_1}>

          </div>
          <div className={styles.div_banner_1_divisor_2}>
            <div className={styles.div_button_shop_now}>
                SHOP NOW
            </div>
          </div>
      </div>

     </div>
    </MainLayout>
  );
};

export default LandPage;