import React from 'react';
import styles from '../styles/filtrosproductos.module.scss'
import data from '../data/data.jsx';
const Filtros = () => {
  const contadorProductos = data.length

  return (
    <div className={styles.content_filtros}>
      <div className={styles.contador_productos}>
          Todos ({contadorProductos})    
      </div>
      <div className={styles.div_filtros}>
        <div className={styles.div_filtros_title}>
          TALLA
        </div>
        <div className={styles.content_tallas}>
           <div className={styles.content_tallas_1}>
              <div className={styles.div_talla}>
                  5
              </div>
              <div className={styles.div_talla}>
                  5.5
              </div>
              <div className={styles.div_talla}>
                  6
              </div>
              <div className={styles.div_talla}>
                  6.5
              </div>
              <div className={styles.div_talla}>
                  7
              </div>
           </div>
           <div className={styles.content_tallas_2}>
              <div className={styles.div_talla}>
                7.5
              </div>
              <div className={styles.div_talla}>
                8
              </div>
              <div className={styles.div_talla}>
                8.5
              </div>
              <div className={styles.div_talla}>
                  9
              </div>
              <div className={styles.div_talla}>
                9.5
              </div>
           </div>
        </div>
        <div className={styles.div_filtros_title}>
          PRECIO
        </div>
        <div className={styles.div_filtros_subtitle}>
          <div>
            $150.000 - $300.000 (10)
          </div>
          <div>
            $300.000 - $450.000 (24)
          </div>          
        </div>
        <div className={styles.div_filtros_title}>
          MATERIAL
        </div>
        <div className={styles.div_filtros_subtitle}>
          <div>
            Cuero (18)
          </div>
          <div>
            Nubuck (8)
          </div> 
        </div>
        <div className={styles.div_filtros_title}>
          COLOR
        </div>
        <div className={styles.div_filtros_subtitle}>
          <div>
            NEGRO (12)
          </div>
          <div>
            AZUL (12)
          </div> 
          <div>
            CAFE (12)
          </div> 
          <div>
            ORO (12)
          </div> 
        </div>
        <div className={styles.div_filtros_title}>
          TECNOLOGÍA
        </div>
        <div className={styles.div_filtros_subtitle}>
          <div>
            HPO2Flex (5)
          </div>
          <div>
            BioBevel (1)
          </div> 
          <div>
            flexGroove (3)
          </div> 
        </div>

      </div>
    </div>
  );
};

export default Filtros;
