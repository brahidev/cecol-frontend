import React, { useEffect, useRef } from 'react'
import { register } from 'swiper/element/bundle';
import { configSlideHome } from '../../provider/dataconfig'; 
import styles from '../../styles/home.module.css'

register();

const Home = ()=>{
    const swiperElRef = useRef(null);

    useEffect(() => {
        // listen for Swiper events using addEventListener
        swiperElRef.current.addEventListener('progress', (e) => {
        const [swiper, progress] = e.detail;
        console.log(progress);
        });

        swiperElRef.current.addEventListener('slidechange', (e) => {
        console.log('slide changed');
        });
    }, []);
    return(
        <>
            <section className={styles.main_slide}>
                <swiper-container
                    ref={swiperElRef}
                    slides-per-view="1"
                    navigation="true"
                    pagination="true"
                    >
                    {
                        configSlideHome.map((slide)=>(
                            <swiper-slide>
                                <div className={styles.wrapper_contain_slide}>
                                    <img className={styles.img_main_slide} src={slide.img} alt={slide.title_img} />
                                    <span className={styles.title_slide}>{slide.title}</span>
                                    <span className={styles.description_slide}>{slide.description}</span>
                                </div>
                            </swiper-slide>
                        ))
                    }
                </swiper-container>
            </section>
            <section className={styles.formcertified}>
                    <div className={styles.formcertified_desc}>
                        <img src={'/images/sheets.png'} alt='' className={styles.formcertified_desc_img}/>
                        <span className={styles.formcertified_desc_title}>Valida la información de la certificación</span>
                        <span className={styles.formcertified_desc_desc}>solicite fácilmente tus certificados vigentes.</span>
                    </div>
                    <div className={styles.formcertified_form}>
                        <span className={styles.formcertified_form_title}>Complete el siguiente formulario</span>
                        <span className={styles.formcertified_form_subtitle}>Para validar su certificado</span>
                        <span className={styles.formcertified_form_subsubtitle}>Ingrese su documento*</span>
                        <div className={styles.formcertified_form_wrapper_input}>
                            <select className={styles.formcertified_form_list}>
                                <option selected>Tipo</option>
                                <option className={styles.formcertified_form_option} value="CC">CC</option>
                                <option className={styles.formcertified_form_option} value="NIT">NIT</option>
                            </select>
                            <input className={styles.formcertified_form_text} type="number" name="" id="" />
                        </div>
                        <button className={styles.formcertified_form_button}>Validar</button>
                    </div>
            </section>
        </>
    )
}

export default Home