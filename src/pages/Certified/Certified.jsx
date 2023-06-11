import React, { useEffect, useRef } from 'react'
import styles from '../../styles/cretified.module.css'
import { configSlideCertified, esquemasCertificacion } from '../../provider/dataconfig'; 

const Certified = ()=>{
    const swiperElRef = useRef(null);
    useEffect(() => {
        // listen for Swiper events using addEventListener
        swiperElRef.current.addEventListener('progress', (e) => {
        const [progress] = e.detail;
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
                        configSlideCertified.map((slide)=>(
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
            <section className={styles.main_description}>
                <span className={styles.title}>Esquemas de Certificacion</span>
                <span className={styles.description}>Si deseas recibir mas información, comunícate con nosotros a nuestra linea telefónica (000) 0000000, celular 0000000000, o escríbenos a los correos info@correo.com, coordinador@correo.com.</span>
            </section>
            <section className={styles.certificaciones}>
                {esquemasCertificacion.map((itemCertified, index)=>(
                    <div key={itemCertified.title} className={styles.itemCertified} id={itemCertified.id}>
                    {index % 2 === 0 ? 
                        <>
                        <img src={itemCertified.img} alt={itemCertified.title}/>
                        <div className={styles.contentDscription}>
                            <span className={styles.title}>{itemCertified.title}</span>
                            <span className={styles.description}>{itemCertified.description}</span>
                        </div>
                        </>
                        :
                        <>
                        <div className={styles.contentDscription}>
                            <span className={styles.title}>{itemCertified.title}</span>
                            <span className={styles.description}>{itemCertified.description}</span>
                        </div>
                        <img src={itemCertified.img} alt={itemCertified.title}/>
                        </>
                    }
                    </div>
                ))}
            </section>
        </>
    )
}

export default Certified