import React from 'react';
import Image from 'next/image';
import styles from '../styles/cardproducto.module.scss';
import Link from 'next/link';

const CardProducto = ({nombre, precio, referencia, foto}) => {
  function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  return (
    <div className={styles.content_card}>
      <Link href={`/categoria/${nombre}`} className={`${styles.div_card_producto} `}>
        <div className={styles.div_card_producto}>                
                    <div className={styles.div_card_producto_img_principal}>
                      <Image src={`/img/${foto}`} width={300} height={300} alt={`Imagen de ${nombre}`} className={styles.img_principal}/>
                      <div className={styles.div_favorito}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                        </svg>
                      </div>
                    </div>
                    <div className={styles.div_card_producto_imgs_carrusel}>
                      <div className={styles.div_card_producto_imgs_carrusel_peque}>
                      <Image src={`/img/${foto}`} width={100} height={100}alt={`Imagen de  ${nombre}`} className={styles.imgs_carrusel_peque}/>
                      </div>
                      <div className={styles.div_card_producto_imgs_carrusel_peque}>
                      <Image src={`/img/${foto}`} width={100} height={100}alt={`Imagen de  ${nombre}`} className={styles.imgs_carrusel_peque}/>
                      </div>
                      <div className={styles.div_card_producto_imgs_carrusel_peque}>
                      <Image src={`/img/${foto}`} width={100} height={100}alt={`Imagen de  ${nombre}`} className={styles.imgs_carrusel_peque}/>
                      </div>
                    </div>
                    <div className={styles.div_card_producto_nombre}>
                      {nombre}
                    </div>
                    <div className={styles.div_card_producto_precio}>
                    ${formatNumberWithCommas(precio)}
                    </div>
        </div>
      </Link>
    </div>
  );
};

export default CardProducto;