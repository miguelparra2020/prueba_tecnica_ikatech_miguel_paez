import React from 'react';
import styles from '../styles/filtrosproductos.module.scss';
import data from '../data/data.jsx';

const ModalFiltro = ({ isOpen, closeModal }) => {
  const contadorProductos = data.length
  const modalStyles = {
    display: isOpen ? 'block' : 'none',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente
    zIndex: 999, // Asegura que el modal esté por encima de todo
    transition: 'opacity 0.3s ease',
    opacity: isOpen ? 1 : 0,
  };

  const contentStyles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%', 
    height: '150vh', 
    maxWidth: '600px',
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
  };

  if (!isOpen) return null;

  return (
    <div style={modalStyles}>
      <div style={contentStyles}>
        <button className="close-button" onClick={closeModal}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square-fill" viewBox="0 0 16 16">
    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
          </svg>
        </button>
        <br />
        <br />
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
      </div>
    </div>
  );
};

export default ModalFiltro;
