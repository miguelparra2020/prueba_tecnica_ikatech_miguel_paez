// pages/index.js
import React, { useEffect, useState } from 'react';
import  MainLayout from '../../components/layouts/MainLayout';
import styles from '../../styles/categoria.module.scss';
import Flitros from '../../components/FiltrosProductos';
import data from '../../data/data.jsx';
import CardProducto from '../../components/CardProducto';
import ModalFiltro from '../../components/ModalFiltro'

import { Toaster, toast } from 'sonner';

  

const CategoriaPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  useEffect(() => {   
    toast.success('Catagorías', {
      description: 'Escoge la que más te guste!'
    });
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
                  {isModalOpen && (
                <ModalFiltro isOpen={isModalOpen} closeModal={closeModal}>
                 
                </ModalFiltro>
              )}
              <button onClick={openModal}>
              <div className={styles.div_filtrar_por}>
                FILTRAR POR
              </div>
              </button>
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
      <div className={styles.content_body_categoria}>
        <div  className={styles.div_body_categoria}>
          <div className={styles.content_filtrar_en_escritorio}>
            <Flitros/>
          </div>
          <div className={styles.content_cards_productos}>            
            {
              data.map( (item) => (
                  <CardProducto key={item.id} nombre={item.nombre} precio={item.precio} referencia={item.referencia} foto={item.foto}/>
              ))
            }
          </div>
        </div>
      </div>
      <div>
      </div>
      <Toaster/>
    </MainLayout>
  );
};

export default CategoriaPage;