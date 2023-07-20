import React from "react";
import styles from '../styles/footerMB.module.css'
import { itemsFooter } from '../provider/dataconfig'
import { Link } from "react-router-dom";

const Footer = () =>{
    return(
        <footer className={styles.wrapperfooter}>
            <section className={styles.info}>
                {itemsFooter.map((item, index)=>(
                    <div key={item.title} className={styles.col}>
                        <span className={styles.title}>{item.title}</span>
                        {item.subitems.map((subitem)=>(
                            <Link key={subitem.name} to={subitem.url} className={styles.subitem}>{subitem.name}</Link>
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
                        <Link to={process.env.REACT_APP_BTN_REGISTER}>REGISTRO</Link>
                        <Link to={process.env.REACT_APP_BTN_LOGIN}>INGRESAR</Link>
                    </div>
                </div>
            </section>
            <hr />
            <img className={styles.logo} src={'/images/logo.png'} alt="Logo"/>
        </footer>
    )
}

export default Footer