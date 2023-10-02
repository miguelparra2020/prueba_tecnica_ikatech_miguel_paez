// pages/index.js
import React, { useEffect } from 'react';
import  MainLayout from '../../components/layouts/MainLayout';
import styles from '../../styles/detalle.module.scss'
import Image from 'next/image';
import data from '../../data/data.jsx';

import { Toaster, toast } from 'sonner';

const DetallePage = () => {
  const rutaSinDominio = window.location.pathname;
  const partes = rutaSinDominio.split("/");
  const nombre_producto = decodeURIComponent(partes[2]);

  const productos = data;

  const data_producto = [];

  const obtener_datos = () => {
    for (let index = 0; index < productos.length; index++) {
       if (productos[index].nombre == nombre_producto){
        data_producto.push({
          nombre: productos[index].nombre,
          foto: productos[index].foto,
          precio: productos[index].precio,
          referencia: productos[index].referencia        
        });
        
       }
    }
  }
  obtener_datos();

  function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  useEffect(() => {   
    toast.message('Detalles de: ', {
      description: nombre_producto
    });
  }, [nombre_producto]);
  return (
    <MainLayout>
     <div className={styles.content_indicador_ruta}>
      <div className={styles.div_indicador_ruta}>
        HUSHPUPPIESCO / CALZADO / {nombre_producto}
      </div>
     </div>
     <div className={styles.content_fotos_talla}>
      <div className={styles.content_fotos_talla_columns}>
        <div className={styles.content_fotos}>
          <div className={styles.div_fotos_principal}>
            <div className={styles.div_fotos_principal_img}>
              <Image src={`/img/${data_producto[0].foto}`} width={400} height={400} alt={`Imagen de ${data_producto[0].nombre}`} className={styles.img_principal}/>              
            </div>
          </div>
          <div className={styles.div_fotos_imgs_adicionales}>
              <div className={styles.div_fotos_imgs}>
                <Image src={`/img/${data_producto[0].foto}`} width={100} height={100} alt={`Imagen de ${data_producto[0].nombre}`} className={styles.img_principal}/> 
              </div>
              <div className={styles.div_fotos_imgs}>
                <Image src={`/img/${data_producto[0].foto}`} width={100} height={100} alt={`Imagen de ${data_producto[0].nombre}`} className={styles.img_principal}/>
              </div>
              <div className={styles.div_fotos_imgs}>
                <Image src={`/img/${data_producto[0].foto}`} width={100} height={100} alt={`Imagen de ${data_producto[0].nombre}`} className={styles.img_principal}/>
              </div>
              <div className={styles.div_fotos_imgs}>
                <Image src={`/img/${data_producto[0].foto}`} width={100} height={100} alt={`Imagen de ${data_producto[0].nombre}`} className={styles.img_principal}/>
              </div>
              <div className={styles.div_fotos_imgs}>
                <Image src={`/img/${data_producto[0].foto}`} width={100} height={100} alt={`Imagen de ${data_producto[0].nombre}`} className={styles.img_principal}/>
              </div>
          </div>
        </div>
        <div className={styles.content_talla}>
            <div className={styles.div_talla}>
              <div className={styles.detalle_nombre}>
                {data_producto[0].nombre}
              </div>
              <div className={styles.detalle_precio}>
                ${formatNumberWithCommas(data_producto[0].precio)}
              </div>
              <div className={styles.detalle_codigo}>
                Código del producto {data_producto[0].referencia}
              </div>
              <div className={styles.detalle_color}>
                <div className={styles.detalle_color_titulo}>
                  COLOR
                </div>
                <div className={styles.detalle_color_img}>
                  <Image src={`/img/${data_producto[0].foto}`} width={100} height={100} alt={`Imagen de ${data_producto[0].nombre}`} className={styles.img_color}/>
                </div>
              </div>
              <div className={styles.detalle_talla}>
                TALLA
              </div>
              <div className={styles.detalle_talla_opciones}>
                <div className={styles.detalle_talla_opcion_1}>
                  <div className={styles.div_tallas}>
                    5
                  </div>
                  <div className={styles.div_tallas}>
                    5.5
                  </div>
                  <div className={styles.div_tallas}>
                    6
                  </div>
                  <div className={styles.div_tallas}>
                    6.5
                  </div>
                  <div className={styles.div_tallas}>
                    7
                  </div>
                </div>
                <div className={styles.detalle_talla_opcion_2}>
                  <div className={styles.div_tallas}>
                    7.5    
                  </div>
                  <div className={styles.div_tallas}>
                    8
                  </div>
                  <div className={styles.div_tallas}>
                    8.5
                  </div>
                  <div className={styles.div_tallas}>
                    9
                  </div>
                  <div className={styles.div_tallas}>
                    9.5
                  </div>
                </div>
              </div>
              <div className={styles.detalle_guia_talla}>
                GUÍA DE TALLAS
              </div>
              <div className={styles.detalle_carrito}>
                <button className={styles.detalle_carrito_anadir}>
                    AÑADIR AL CARRITO
                </button>
                <div className={styles.detalle_carrito_favorito}>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg>
                </div>
              </div>

            </div>
        </div>
      </div>
     </div>
     <div className={styles.content_detalles_producto}>

     </div>
     <div className={styles.content_tecnologias}>

     </div>
     <div className={styles.content_completa_look}>

     </div>
     <div className={styles.content_productos_recomendados}>

     </div>
     <Toaster/>
    </MainLayout>
  );
};

export default DetallePage;