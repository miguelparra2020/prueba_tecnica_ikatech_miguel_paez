// pages/index.js
import React, { useEffect } from 'react';
import  MainLayout from '../../components/layouts/MainLayout';
import styles from '../../styles/categoria.module.scss'
import Image from 'next/image';

import { Toaster, toast } from 'sonner';

const CategoriaPage = () => {
  useEffect(() => {   

  }, []);
  return (
    <MainLayout>
     Categoria
    </MainLayout>
  );
};

export default CategoriaPage;