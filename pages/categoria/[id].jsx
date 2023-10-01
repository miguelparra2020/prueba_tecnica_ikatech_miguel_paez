// pages/index.js
import React, { useEffect } from 'react';
import  MainLayout from '../../components/layouts/MainLayout';
import styles from '../../styles/detalle.module.scss'
import Image from 'next/image';

import { Toaster, toast } from 'sonner';

const DetallePage = () => {
  useEffect(() => {   

  }, []);
  return (
    <MainLayout>
     <div className={styles.content_indicador_ruta}>

     </div>
     <div className={styles.content_fotos_talla}>

     </div>
     <div className={styles.content_detalles_producto}>

     </div>
     <div className={styles.content_tecnologias}>

     </div>
     <div className={styles.content_completa_look}>

     </div>
     <div className={styles.content_productos_recomendados}>

     </div>
    </MainLayout>
  );
};

export default DetallePage;