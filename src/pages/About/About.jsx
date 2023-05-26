import React, { useEffect, useRef } from 'react'
import { configSlideHome } from '../../provider/dataconfig'; 
import styles from '../../styles/home.module.css'
import aboutStyles from '../../styles/about/about.module.css'
import { itemsPresentation } from '../../provider/dataconfig'

const About = () => {
    // Slide
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
            <section className={aboutStyles.container}>
                {/* Presentacion */}
                <section className={aboutStyles.presentation}>
                    <label className={aboutStyles.subTitle}>Presentación de la empresa</label>
                    <div>
                        <p>CERTIFICACIÓN DE COMPETENCIA LABORALES S.A.S, NIT 901.693.108-8, Sigla: CE.COMP SAS Se constituyó por documento privado del 06 de marzo de 2023 bajo el número 02944310 del libro IX, matricula 03651875 del 13 de marzo de 2023 ante Cámara de Bogotá D.C.</p>
                        <p>La sociedad cuenta con un establecimiento de comercio dedicado única y exclusivamente a realizar las actividades de evaluación de la conformidad de acuerdo con los alcances acreditados, denominado CECOL OCP, matrícula 109428 del 10 de junio de 2022 ante Cámara de Comercio de Bogotá D.C.</p>
                        <p>Se designó un Representante legal de libre nombramiento y remoción por parte de la Asamblea general de accionistas, así como un Director General quien tendrá la responsabilidad de asegurar la continuidad del negocio mediante el cumplimiento de los requisitos de orden normativo y operativo. Además, se designará un Líder para el sistema de gestión que será asumido por el Coordinador de calidad.</p>
                    </div>
                </section>
                {/* Mision */}
                <section className={aboutStyles.mision}>
                    <img className={aboutStyles.image} src={itemsPresentation.mision.image} title={itemsPresentation.mision.title_img} alt={itemsPresentation.mision.title} />
                    <div>
                        <label className={aboutStyles.subTitle}>Nuestra misión</label>
                        <p>
                            Realizar procesos de evaluación de la conformidad a personas teniendo presente los lineamientos de orden legal y normativo en el que se demuestre la competencia y experticia necesaria para un desempeño con éxito en campo de la certificación. Lo anterior con el apoyo de examinadores idóneos, calificados e imparciales que actúan siempre bajo la premisa de objetividad e imparcialidad aplicadas al servicio e integrando el uso de tecnologías de la información y comunicaciones asegurando la ejecución de exámenes equitativos, justos y confiables para emitir juicios de valor bajo evidencias objetivas que satisfagan las expectativas sin favoritismos de todos nuestros grupos de interés.
                        </p>
                    </div>
                </section>
                {/* Vision */}
                <section className={aboutStyles.vision}>
                    <div>
                        <label className={aboutStyles.subTitle}>Nuestra Visión</label>
                        <p>
                            Para el año 2028, CECOL OCP será un Organismo de Certificación de Personas que ofrecerá un diverso portafolio de servicios de evaluación ampliando nuestros alcances y mercado objetivo. Seremos reconocidos en el sector por la calidad en nuestra atención, cumplimiento del marco legal y transparencia en todas las actividades desarrolladas.
                        </p>
                    </div>
                    <img className={aboutStyles.image} src={itemsPresentation.vision.image} alt={itemsPresentation.vision.title} title={itemsPresentation.vision.title_img} />
                </section>
            </section>
        </>
    )
}

export default About