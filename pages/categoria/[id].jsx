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
                OPCIONES TALLA
              </div>
              <div className={styles.detalle_talla}>
                GUÍA DE TALLAS
              </div>
              <div className={styles.detalle_talla}>
                <div>
                  AÑADIR AL CARRITO
                </div>
                <div>
                  favorito
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