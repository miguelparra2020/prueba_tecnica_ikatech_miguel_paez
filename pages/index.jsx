// pages/index.js
import React, { useEffect, useState } from 'react';
import  MainLayout from '../components/layouts/MainLayout';
import styles from '../styles/index.module.scss';
import Link from 'next/link';
import ModalVideo from '../components/ModalVideo'

const LandPage = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {   

  }, []);
  return (
    <MainLayout>
      {isModalOpen && (
        <ModalVideo isOpen={isModalOpen} closeModal={closeModal}>
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              X
            </button>
            <h2>Contenido del Modal</h2>
            <p>Aquí puedes colocar cualquier contenido que desees en tu modal.</p>
          </div>
        </ModalVideo>
      )}
      {/* Banner 1 */}
     <div className={styles.content_banner_1}>
      <div className={styles.div_banner_1}>
          <div className={styles.div_banner_1_divisor_1}>

          </div>
          <div className={styles.div_banner_1_divisor_2}>
            <button className={styles.buttons}>
            <Link href="/categoria" className={styles.button_link}>
              <div className={styles.div_button_shop_now}>
                  SHOP NOW
              </div>
              </Link>
            </button>
          </div>
      </div>
     </div>
     {/* Banner 1 */}
     {/* Category 1 */}
     <div className={styles.content_category_1}>
      <div className={styles.div_category_1_divs_1_2}>
        <div className={styles.div_category_1_divs_1}>
          <div className={styles.div_category_1_divs_1_img}>
            <button className={styles.buttons}>
              <Link href="/categoria" className={styles.button_link}>
                <div className={styles.div_button_category_1_divs_1}>
                    HOMBRE
                </div>
              </Link>
            </button>
          </div>
        </div>
        <div className={styles.div_category_1_divs_1}>
          <div className={styles.div_category_1_divs_1_img_2}>
            <button className={styles.buttons}>
              <Link href="/categoria" className={styles.button_link}>
                <div className={styles.div_button_category_1_divs_1}>
                    MUJER
                </div>
              </Link>
            </button>
          </div>
        </div>
      </div>
     </div>
     {/* Category 1 */}
     {/* Banner 2 */}
     <div className={styles.content_banner_2}>
      <div className={styles.div_banner_2}>
        <button className={styles.buttons} onClick={openModal}>
          <div className={styles.div_button_banner_2}>
            <div className={styles.div_triangle_play}>
            </div>
          </div>
        </button>
      </div>      
     </div>
     {/* Banner 2 */}
     {/* Category  2 */}
     <div className={styles.content_category_2}>
      <div className={styles.div_content_category_2}>
        <div className={styles.div_content_category_2_divs}>
          <div className={styles.div_content_category_2_divs_internos_1}>
            <button className={styles.buttons}>
              <Link href="/categoria" className={styles.button_link}>
                <div className={styles.div_buttons_category_2}>
                  ACCESORIOS
                </div>
              </Link>
            </button>
          </div>
        </div>
        <div className={styles.div_content_category_2_divs}>
          <div className={styles.div_content_category_2_divs_internos_2}>
            <div className={styles.div_content_category_2_divs_mujer}>
              <button className={styles.buttons}>
                <Link href="/categoria" className={styles.button_link}>
                  <div className={styles.div_buttons_category_2}>
                    MUJER
                  </div>
                  </Link>
              </button>
            </div>
            <div className={styles.div_content_category_2_divs_hombre}>
              <button className={styles.buttons}>
                <Link href="/categoria" className={styles.button_link}>
                  <div className={styles.div_buttons_category_2}>
                    HOMBRE
                  </div>
                </Link>
              </button>
            </div>            
          </div>
        </div>
      </div>
     </div>
     {/* Category  2 */}
      {/* Banner Instagram */}
    <div className={styles.content_banner_instagram}>
      <div className={styles.div_banner_instagram_titulo}>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
</svg>&nbsp;
          Instagram - HUSHPUPPIESCO
      </div>
      <div className={styles.div_banner_instagram}>
        <div className={styles.div_banner_instagram_div_1}>
          <div className={styles.div_banner_instagram_img_1}>
          </div>
          <div className={styles.div_banner_instagram_img_2}>

          </div>
          <div className={styles.div_banner_instagram_img_3}>

          </div>
        </div>
        <div className={styles.div_banner_instagram_div_2}>
          <div className={styles.div_banner_instagram_img_4}>
          </div>
          <div className={styles.div_banner_instagram_img_5}>

          </div>
          <div className={styles.div_banner_instagram_img_6}>

          </div>
        </div>
      </div>
    </div>
      {/* Banner Instagram */}
    </MainLayout>
  );
};

export default LandPage;