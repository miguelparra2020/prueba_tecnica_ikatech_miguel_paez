// pages/index.js
import React, { useEffect,useState } from 'react';
import  MainLayout from '../../components/layouts/MainLayout';
import styles from '../../styles/detalle.module.scss';
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
  const [data_producto, setDataProducto] = useState([]);

  const [productos_completar, setProductosCompletar] = useState([]);
  const [productos_recomendados, setProductosRecomendados] = useState([]);

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

    const filteredProducts = productos.filter(producto => producto.nombre === nombre_producto);
    if (filteredProducts.length > 0) {
      const producto = filteredProducts[0];
      setDataProducto({
        nombre: producto.nombre,
        foto: producto.foto,
        precio: producto.precio,
        referencia: producto.referencia
      });
    } else {
      setDataProducto({
        nombre: '',
        foto: '',
        precio: '',
        referencia: ''
      });
    }

    function obtenerProductosAleatorios(productos, cantidad) {
      const copiaProductos = [...productos]; 
      const productosAleatorios = [];
    
      while (productosAleatorios.length < cantidad && copiaProductos.length > 0) {
        const indiceAleatorio = Math.floor(Math.random() * copiaProductos.length);
        const productoAleatorio = copiaProductos.splice(indiceAleatorio, 1)[0]; // Eliminar y obtener el elemento aleatorio
        productosAleatorios.push(productoAleatorio);
      }
    
      return productosAleatorios;
    }


    setProductosCompletar(obtenerProductosAleatorios(productos, 4));
    setProductosRecomendados(obtenerProductosAleatorios(productos, 4));

    toast.message('Detalles de: ', {
      description: nombre_producto
    });
  }, [nombre_producto, productos]);

  console.log("Completar:", productos_completar);
  console.log("Recomendados:", productos_recomendados);

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
              <Image src={`/img/${data_producto.foto}`} width={400} height={400} alt={`Imagen de ${data_producto.nombre}`} className={styles.img_principal}/>              
            </div>
          </div>
          <div className={styles.div_fotos_imgs_adicionales}>
              <div className={styles.div_fotos_imgs}>
                <Image src={`/img/${data_producto.foto}`} width={100} height={100} alt={`Imagen de ${data_producto.nombre}`} className={styles.img_principal}/> 
              </div>
              <div className={styles.div_fotos_imgs}>
                <Image src={`/img/${data_producto.foto}`} width={100} height={100} alt={`Imagen de ${data_producto.nombre}`} className={styles.img_principal}/>
              </div>
              <div className={styles.div_fotos_imgs}>
                <Image src={`/img/${data_producto.foto}`} width={100} height={100} alt={`Imagen de ${data_producto.nombre}`} className={styles.img_principal}/>
              </div>
              <div className={styles.div_fotos_imgs}>
                <Image src={`/img/${data_producto.foto}`} width={100} height={100} alt={`Imagen de ${data_producto.nombre}`} className={styles.img_principal}/>
              </div>
              <div className={styles.div_fotos_imgs}>
                <Image src={`/img/${data_producto.foto}`} width={100} height={100} alt={`Imagen de ${data_producto.nombre}`} className={styles.img_principal}/>
              </div>
          </div>
        </div>
        <div className={styles.content_talla}>
            <div className={styles.div_talla}>
              <div className={styles.detalle_nombre}>
                {data_producto.nombre}
              </div>
              <div className={styles.detalle_precio}>
                ${formatNumberWithCommas(data_producto.precio)}
              </div>
              <div className={styles.detalle_codigo}>
                Código del producto {data_producto.referencia}
              </div>
              <div className={styles.detalle_color}>
                <div className={styles.detalle_color_titulo}>
                  COLOR
                </div>
                <div className={styles.detalle_color_img}>
                  <Image src={`/img/${data_producto.foto}`} width={100} height={100} alt={`Imagen de ${data_producto.nombre}`} className={styles.img_color}/>
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
     </div>
     <div className={styles.content_detalles_producto}>
      <div className={styles.div_detalles_producto}>
        <div className={styles.div_detalles_producto_titulo}>
          DESTALLES DE PRODUCTO
        </div>
        <div className={styles.div_detalles_producto_parrafo}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta, ea nam quibusdam molestiae iusto, voluptatibus, in libero et natus repudiandae exercitationem culpa quam quae molestias. Sequi voluptas nesciunt deserunt explicabo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo expedita placeat accusamus earum eum optio vel tenetur molestiae, repellat eligendi quae quibusdam! Consequuntur suscipit placeat omnis. Incidunt optio libero modi!
        </div>
      </div>
     </div>
     <div className={styles.content_detalles_producto}>
     <div className={styles.div_detalles_producto}>
        <div className={styles.div_detalles_producto_titulo}>
          TECNOLOGÍAS
        </div>
        <div className={styles.div_detalles_producto_parrafo}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta, ea nam quibusdam molestiae iusto, voluptatibus, in libero et natus repudiandae exercitationem culpa quam quae molestias. Sequi voluptas nesciunt deserunt explicabo! Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        </div>
      </div>
      </div>
     <div className={styles.content_completa_look}>
      <div className={styles.div_completa_look}>
        <div className={styles.div_completa_look_titulo}>
          &nbsp; COMPLETA TU LOOK
        </div>
        <div className={styles.content_divs_productos_completar_look}>
            
              {
                productos_completar.map((item) => (                  
                    <div key={item} className={styles.content_card_producto_completar}>
                      <div className={styles.div_card_producto}>                
                    <div className={styles.div_card_producto_img_principal}>
                      <Image src={`/img/${item.foto}`} width={300} height={300} alt={`Imagen de ${item.nombre}`} className={styles.img_principal}/>
                    </div>
                    <div className={styles.div_card_producto_imgs_carrusel}>
                      <div className={styles.div_card_producto_imgs_carrusel_peque}>
                      <Image src={`/img/${item.foto}`} width={100} height={100}alt={`Imagen de  ${item.nombre}`} className={styles.imgs_carrusel_peque}/>
                      </div>
                      <div className={styles.div_card_producto_imgs_carrusel_peque}>
                      <Image src={`/img/${item.foto}`} width={100} height={100}alt={`Imagen de  ${item.nombre}`} className={styles.imgs_carrusel_peque}/>
                      </div>
                      <div className={styles.div_card_producto_imgs_carrusel_peque}>
                      <Image src={`/img/${item.foto}`} width={100} height={100}alt={`Imagen de  ${item.nombre}`} className={styles.imgs_carrusel_peque}/>
                      </div>
                    </div>
                    <div className={styles.div_card_producto_nombre}>
                      {item.nombre}
                    </div>
                    <div className={styles.div_card_producto_precio}>
                    ${formatNumberWithCommas(item.precio)}
                    </div>

                      <div onClick={incremetarAlert} className={styles.div_button_anadir}>
                      <IncrementarButton />
                      </div>
                      </div>
                      
                    </div>                  
                ))
              }
        </div>
      </div>
      

     </div>
     <div className={styles.content_productos_recomendados}>

     </div>
     <Toaster/>
    </MainLayout>
  );
};

export default DetallePage;