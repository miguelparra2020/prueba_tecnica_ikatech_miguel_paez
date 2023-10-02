// pages/index.js
import React, { useEffect,useState } from 'react';
import  MainLayout from '../../components/layouts/MainLayout';
import styles from '../../styles/detalle.module.scss'
import Image from 'next/image';
import data from '../../data/data.jsx';
import IncrementarButton from '../../components/IncrementarButton';
import DecrementarButton from '../../components/DecrementarButton';

import { Toaster, toast } from 'sonner';

const DetallePage = () => {
  const [ruta, setRuta] = useState('');
  const partes = ruta.split("/");
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

  const incremetarAlert = () => {
    toast.success('Ha añadido al carrito el producto: ', {
      description: nombre_producto
    });
  }
  const decrementarAlert = () => {
    toast.message('Ha retirado del carrito el producto: ', {
      description: nombre_producto
    });
  }

  useEffect(() => {   
    const ruta = window.location.pathname;
    setRuta(ruta);

    toast.message('Detalles de: ', {
      description: nombre_producto
    });
  }, [nombre_producto]);

    console.log(productos)
  return (
    <MainLayout>
     <div className={styles.content_indicador_ruta}>
      <div className={styles.div_indicador_ruta}>
        HUSHPUPPIESCO / CALZADO / {nombre_producto}
      </div>
     </div>
     {/* <div className={styles.content_fotos_talla}>
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
                <div className={styles.div_detalle_carrito_anadir} onClick={incremetarAlert}>
                  <IncrementarButton/>
                </div>
                <div className={styles.detalle_carrito_favorito} onClick={decrementarAlert}>
                  <DecrementarButton/>
                </div>
              </div>

            </div>
        </div>
      </div>
     </div> */}
     <div className={styles.content_detalles_producto}>
     </div>
     <div className={styles.content_tecnologias}>
        <IncrementarButton/>
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