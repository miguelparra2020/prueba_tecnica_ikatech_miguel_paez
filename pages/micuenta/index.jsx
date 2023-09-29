// pages/index.js
import React, { useEffect } from 'react';
import  MainLayout from '../../components/layouts/MainLayout';
import styles from '../../styles/index.module.scss';
import Image from 'next/image';

import { Toaster, toast } from 'sonner';

const MiCuentaPage = () => {
  useEffect(() => {   

  }, []);
  return (
    <MainLayout>
     PÁGINA MI CUENTA
    </MainLayout>
  );
};

export default MiCuentaPage;