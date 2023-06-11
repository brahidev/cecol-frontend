import React from "react";
import styles from '../styles/footer.module.css'
import { itemsFooter } from '../provider/dataconfig'

const Footer = () =>{
    return(
        <footer className={styles.wrapperfooter}>
            <img className={styles.logo} src={'/images/logo.png'} alt="Logo"/>
            <section className={styles.info}>
                {itemsFooter.map((item, index)=>(
                    <div key={item.title} className={styles.col}>
                        <span className={styles.title}>{item.title}</span>
                        {item.subitems.map((subitem)=>(
                            <a key={subitem.name} href={subitem.url} className={styles.subitem}>{subitem.name}</a>
                        ))}
                    </div>
                ))}
                <div className={styles.col}>
                    <span className={styles.title}>Siguenos</span>
                    <div className={styles.social}>
                        <img src={'/images/facebook.png'} alt="facebook"/>
                        <img src={'/images/twitter.png'} alt="twitter"/>
                        <img src={'/images/instagram.png'} alt="instagram"/>
                        <img src={'/images/linkedIn.png'} alt="linkedIn"/>
                    </div>
                    <div className={styles.login}>
                        <a href="https://www.google.com">REGISTRO</a>
                        <a href="https://www.google.com">INGRESAR</a>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer