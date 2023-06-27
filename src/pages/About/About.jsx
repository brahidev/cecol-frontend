import React, { useEffect, useState, useRef } from 'react'
import { configSlideAbout } from '../../provider/dataconfig'; 
import styles from '../../styles/home.module.css'
import aboutStyles from '../../styles/about/about.module.css'
import { itemsPresentation, politiquesContent, deberesContent } from '../../provider/dataconfig'
import Modal from '../../components/modal'
import { isMobile } from "react-device-detect";

const About = () => {
    // State Modal
    const [ open, setOpen ] = useState(false)
    const [ itemModalSeleted, setItemContentModal] = useState(0)
    const [ contentModal, setContentModal ] = useState({})

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

    const handleClick = (title, content, index) => {
        // State Open
        setOpen(!open)
        // Set New index item selected 
        setItemContentModal(index)
        // State content
        setContentModal({
            title,
            content
        })
    }

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
                        configSlideAbout.map((slide)=>(
                            <swiper-slide>
                                <div className={styles.wrapper_contain_slide}>
                                    <img className={styles.img_main_slide} src={isMobile ? slide.imgMobile : slide.img} alt={slide.title_img} />
                                    <span className={styles.title_slide}>{slide.title}</span>
                                    <span className={styles.description_slide}>{slide.description}</span>
                                </div>
                            </swiper-slide>
                        ))
                    }
                </swiper-container>
            </section>
            <section>
                {/* Presentacion */}
                <section className={aboutStyles.presentation}>
                    <label className={aboutStyles.subTitle}>Presentación de la empresa</label>
                    <div>
                        <p>CERTIFICACIÓN DE COMPETENCIA LABORALES S.A.S, NIT 901.693.108-8, Sigla: CE.COMP SAS Se constituyó por documento privado del 06 de marzo de 2023 bajo el número 02944310 del libro IX, matricula 03651875 del 13 de marzo de 2023 ante Cámara de Bogotá D.C.

La sociedad cuenta con un establecimiento de comercio dedicado única y exclusivamente a realizar las actividades de evaluación de la conformidad de acuerdo con los alcances acreditados, denominado CECOL OCP, matrícula 03661013 del 30 de marzo de 2023 ante Cámara de Comercio de Bogotá D.C.

Se designó un Representante legal de libre nombramiento y remoción por parte de la Asamblea general de accionistas, así como un Gerente general quien tendrá la responsabilidad de asegurar la continuidad del negocio mediante el cumplimiento de los requisitos de orden normativo y operativo. Además, se designará un Líder para el sistema de gestión que será asumido por el Coordinador de calidad.</p>
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
                {/* Objetive General */}
                <section className={aboutStyles.generalObjective}>
                    <label className={aboutStyles.subTitle}>Objetivo general</label>
                    <p>Prestar servicios de evaluación de la conformidad justos, equitativos y confiables a partir de la aplicación de procesos de certificación alineados con los criterios de competencia necesarios para un desempeño con éxito en el ámbito laboral.</p>
                </section>
                {/* Objetive specific */}
                <section className={aboutStyles.specificObjective}>
                    <label className={aboutStyles.subTitle}>Objetivos específicos</label>
                    <div className={aboutStyles.specificContainer}>
                        <div>
                            <ul>
                                <li>Diseñar, revisar y validar esquemas de certificación que permitan tomar decisiones de certificación basados en evidencias objetivas sin distinciones ni sesgos injustificables que satisfagan las necesidades de los grupos de interés.</li>
                                <li>Contribuir en el desarrollo de un procedimiento claro para la realización de evaluaciones equitativas, válidas y confiables para la población que atiende el organismo.</li>
                                <li>Cumplir con los lineamientos de orden legal en la aplicación de evaluaciones de competencias laborales de acuerdo con los parámetros definidos en el esquema de certificación y los documentos normativos de referencia.</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>Desarrollar mecanismos de estandarización del proceso de evaluación que permita emitir conceptos bajo evidencias objetivas alineados con los requisitos de conformidad del esquema de certificación.</li>
                                <li>Ser garante de la ejecución de un proceso de evaluación óptimo que satisfaga las expectativas de todos los grupos de interés del organismo sin que existan desigualdades ni afectaciones a la imparcialidad.</li>
                            </ul>
                        </div>
                    </div>
                </section>
                {/* Politicas */}
                <section className={aboutStyles.politicas}>
                    <div className={aboutStyles.ourPoliticas}>
                        <label className={aboutStyles.subTitle}>Nuestras politicas</label>
                    </div>
                    <div className={aboutStyles.ourPoliticas}>
                        <label className={aboutStyles.subTitle}>Politicas</label>
                        <div className={aboutStyles.politicasContainer}>
                            {
                                politiquesContent.map((item, index) => {
                                    return (
                                        <div
                                            className={`${aboutStyles.politicaCard} ${itemModalSeleted === index ? aboutStyles.activePoliticaCard : ''}`}
                                            onClick={(e) => handleClick(item.title, item.content, index)}
                                            key={item.title}
                                        >
                                            <p>{item.title}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>
                {/* Responsabilidad */}
                <section className={aboutStyles.responsability}>
                    <label className={aboutStyles.subTitle}>Responsabilidad en materia de decisión de la certificacíon</label>
                    <p>El organismo no subcontrata la decisión de la certificación, puesto que asume en forma explícita la responsabilidad en este sentido, asignándole esta tarea a él (la) profesional certificador(a) debiendo demostrar bajo evidencias objetivas que se cumplieron los requisitos de conformidad del esquema de certificación.</p>
                </section>
                {/* Descripcion */}
                {/* <section className={aboutStyles.description}>
                    <label className={aboutStyles.subTitle}>Descripción del proceso</label>
                    <p>Evaluación y certificación de competencias laborales mediante el cumplimiento de tres etapas fundamentales:</p>
                    <ul>
                        <li>Selección - La selección involucra actividades de planificación y preparación con el fin de reunir o producir toda la información y las entradas necesarias para la siguiente función de determinación. Las actividades de selección varían ampliamente en número y complejidad. En ciertos casos puede ser necesaria muy poca actividad de selección.</li>
                        <li>Determinación - Las actividades de determinación se llevan a cabo con el fin de obtener información completa relativa al cumplimiento de los requisitos especificados por el objeto de evaluación de la conformidad o su muestra.</li>
                        <li>Revisión y atestación - Constituye la etapa final de verificación antes de tomar la importante decisión sobre si se ha demostrado o no en forma confiable que el objeto de evaluación de la conformidad cumple con los requisitos especificados. Si cumple, la atestación (5.2) da lugar a una “afirmación” en la forma que mejor llegue a todos los usuarios potenciales. “Afirmación de conformidad” es un término genérico que se utiliza para abarcar a todos los medios por los que se comunica que se ha demostrado que se cumplen los requisitos especificados.</li>
                    </ul>
                </section> */}
                {/* Derechos */}
                <section className={aboutStyles.derechos}>
                    <div className={aboutStyles.derechosContainer}>
                        <label className={aboutStyles.subTitle}>Derechos y deberes de los socitantes</label>
                        <div className={aboutStyles.derechosCardsContainer}>
                            {deberesContent.map((item, index)=>(
                                <div className={aboutStyles.derechosCards} key={item.title}>
                                    <img className={aboutStyles.image} src={item.image} title={itemsPresentation.derechos.title_img} alt={itemsPresentation.derechos.title} />
                                    <label className={aboutStyles.subTitle}>{item.title}</label>
                                    <button href='!#' onClick={(e) => handleClick(item.title, item.content)} className={aboutStyles.linkficha}>Leer mas</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </section>
            <Modal
                open={open}
                setOpen={setOpen}
                title={contentModal.title}
                content={contentModal.content}
            />
        </>
    )
}

export default About