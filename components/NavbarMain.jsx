// components/NavbarLogin.js
import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/NavbarMain.module.scss';

const NavbarMain = () => {
  const [cantidadCarrito, setCantidadCarrito] = useState(0);
  
  useEffect(() => {
  
  }, []);



  return (
    <div className={styles.header_content}>
      <div className={styles.div_promo}>
        HOT SALE -30% EN SANDALIAS
      </div>
      <div className={styles.content_menu_micuenta}>
        <div className={styles.div_menu_micuenta}>
          <Link href="/directoriotiendas">
            <div>
                DIRECTORIO DE TIENDAS
            </div>
            </Link>
            &nbsp;&nbsp;&nbsp;
          <Link href="/servicioalcliente">
            <div>
                SERVICIO AL CLIENTE
            </div>
          </Link>
            &nbsp;&nbsp;&nbsp;
          <Link href="/micuenta">
            <div>
                MI CUENTA
            </div>
          </Link>
        </div>
      </div>
      <div className={styles.content_logo_buscador_envio}>
          <div className={styles.div_logo_buscador_envio}>
            <div className={styles.div_logo_tipo}>
                  <Image src="/img/logo-2.png" width={300} height={80} alt='Imagen Logo Tipo' className={styles.img_logotipo}/>
            </div>
            <div className={styles.div_buscador_envio}>
                <div className={styles.div_buscador}>
                  <div className={styles.div_input_icon_buscar}>
                    <input type="text" placeholder='  BUSCAR' className={styles.input_buscar}/>
                    <div className={styles.div_buscador_icon}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-right" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
                      </svg>
                    </div>
                  </div>
                  <div className={styles.div_car_movil}>
                      <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
</svg>
                      </div>&nbsp;&nbsp;
                      <div>
                        CARRITO
                      </div>&nbsp;&nbsp;
                      <div>
                        {cantidadCarrito}
                      </div>
                      
                  </div>
                </div>
                <div className={styles.div_envio}>
                  ENVÍO GRATIS PARA PEDIDOS SUPERIORES A $300.000
                </div>
            </div>
          </div>
      </div>
      <div className={styles.content_menu}>
        <div className={styles.div_menu_carrito}>
          <div className={styles.div_menu}>
              <div>
                HOMBRE
              </div>
              <div>
                MUJER
              </div>
              <div>
                BLOG
              </div>
              <div> 
                HISTORIA
              </div>
              <div>
                TIENDAS
              </div>

          </div>
          <div  className={styles.div_carrito}>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
              </svg>
            </div>&nbsp;&nbsp;
            <div>
              CARRITO
            </div>&nbsp;&nbsp;
            <div>
              {cantidadCarrito}
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default NavbarMain;