// components/NavbarLogin.js
import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/NavbarMain.module.scss';

const NavbarMain = () => {
  useEffect(() => {
  
  }, []);



  return (
    <div className={styles.header_content}>
      <div className={styles.div_promo}>
        HOT SALE -30% EN SANDALIAS
      </div>
      <div className={styles.content_menu_micuenta}>
        <div className={styles.div_menu_micuenta}>
            <div>
                DIRECTORIO DE TIENDAS
            </div>
            &nbsp;&nbsp;&nbsp;
            <div>
                SERVICIO AL CLIENTE
            </div>
            &nbsp;&nbsp;&nbsp;
            <div>
                MI CUENTA
            </div>
        </div>
      </div>
      <div className={styles.content_logo_buscador_envio}>
          <div className={styles.div_logo_buscador_envio}>
            <div className={styles.div_logo_tipo}>
                  <Image src="/img/21.jpg" width={300} height={80} alt='Imagen Logo Tipo'/>
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
                </div>
                <div className={styles.div_envio}>
                  ENVÍO GRATIS PARA PEDIDOS SUPERIORES A $300.000
                </div>
            </div>
          </div>
      </div>
      <div className={styles.content_menu}>

      </div>
      
    </div>
  );
};

export default NavbarMain;