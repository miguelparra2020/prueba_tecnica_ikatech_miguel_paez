// pages/index.js
import React, { useEffect } from 'react';
import  MainLayout from '../components/layouts/MainLayout';
import styles from '../styles/index.module.scss';
import Image from 'next/image';

import { Toaster, toast } from 'sonner';

const LandPage = () => {
  useEffect(() => {   

  }, []);
  return (
    <MainLayout>
      {/* Banner 1 */}
     <div className={styles.content_banner_1}>
      <div className={styles.div_banner_1}>
          <div className={styles.div_banner_1_divisor_1}>

          </div>
          <div className={styles.div_banner_1_divisor_2}>
            <button className={styles.buttons}>
              <div className={styles.div_button_shop_now}>
                  SHOP NOW
              </div>
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
              <div className={styles.div_button_category_1_divs_1}>
                  HOMBRE
              </div>
            </button>
          </div>
        </div>
        <div className={styles.div_category_1_divs_1}>
          <div className={styles.div_category_1_divs_1_img_2}>
            <button className={styles.buttons}>
              <div className={styles.div_button_category_1_divs_1}>
                  MUJER
              </div>
            </button>
          </div>
        </div>
      </div>
     </div>
     {/* Category 1 */}
     {/* Banner 2 */}
     <div className={styles.content_banner_2}>
      <div className={styles.div_banner_2}>
        <button className={styles.buttons}>
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
              <div className={styles.div_buttons_category_2}>
                ACCESORIOS
              </div>
            </button>
          </div>
        </div>
        <div className={styles.div_content_category_2_divs}>
          <div className={styles.div_content_category_2_divs_internos_2}>
            <div className={styles.div_content_category_2_divs_mujer}>
              <button className={styles.buttons}>
                <div className={styles.div_buttons_category_2}>
                  MUJER
                </div>
              </button>
            </div>
            <div className={styles.div_content_category_2_divs_hombre}>
              <button className={styles.buttons}>
                <div className={styles.div_buttons_category_2}>
                  HOMBRE
                </div>
              </button>
            </div>            
          </div>
        </div>
      </div>
     </div>
     {/* Category  2 */}

    </MainLayout>
  );
};

export default LandPage;