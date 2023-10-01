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
      <div className={styles.content_headers}>
        <div className={styles.div_headers}>
          <div className={styles.content_indicador_ruta}>
            <div className={styles.div_indicador_ruta}>
                HUSHPIPPIESCO / CALZADO
            </div>
            <div className={styles.div_indicador_ruta_titulo}>
                CALZADO
            </div>
          </div>
          <div className={styles.content_ordenar_por}>
            <div className={styles.div_ordenar_por}>
              ORDENAR POR
            </div>
            <div className={styles.div_ordenar_por_opcion}>
              FECHA DE LANZAMIENTO
            </div>
          </div>
          <div className={styles.content_filtrar_movil}>
              <div className={styles.div_filtrar_por}>
                FILTRAR POR
              </div>
              <div  className={styles.div_filtrar_por_contenido}>
                CONTENIDO DEL FILTRO MOVIL
              </div>
          </div>
          <div className={styles.content_articulos_pagina}>
              <div className={styles.div_articulos_pagina}>
                ARTÍCULOS POR PÁGINA
              </div>
              <div className={styles.div_articulos_pagina_2}></div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CategoriaPage;