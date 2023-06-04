import React from "react"
import { Link } from "react-router-dom";
import styles from "../../styles/register.module.css"
import { useForm } from "react-hook-form";


const Register = ()=> {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  
    console.log(watch("example"));
    return (
        <section className={styles.register}>
            <section className={styles.infsection}>
                <img className={styles.logo} src={'/images/logo_white.png'} alt="Logo"/>
                <span className={styles.description}>En CECOL OCP, estamos comprometidos a empoderar a las personas y organizaciones al proporcionar certificaciones rigurosas y reconocidas de competencias laborales. 
                    <br/>
                    <br/>
                Si usted es un profesional ambicioso que busca mejorar sus habilidades o una empresa que busca asegurar una fuerza laboral competente, ha venido al lugar correcto.</span>
            </section>
            <section className={styles.formsection}>
                <span className={styles.title}>Registro de matricula</span>
                <form onSubmit={handleSubmit(onSubmit)}>                      
                    <label className={styles.labelForm}>Nombres completos</label>
                    <input className={styles.inputForm} {...register("first_name", { required: true, pattern: /^[a-zA-Z]{2,100}.*[\s\.]*$/g })} />
                    {errors.first_name && <span className={styles.errorForm}>No válido ^</span>}
                    <label className={styles.labelForm}>Apellidos completos</label>
                    <input className={styles.inputForm} {...register("last_name", { required: true, pattern: /^[a-zA-Z]{2,100}.*[\s\.]*$/g })} />
                    {errors.last_name && <span className={styles.errorForm}>No válido ^</span>}
                    <label className={styles.labelForm}>Tipo de documento</label>
                    <select {...register("tipo_documento")}>
                        <option value="CC">Cédula de ciudadania</option>
                        <option value="NIT">Nit</option>
                        <option value="other">Otro</option>
                    </select>
                    {errors.tipo_documento && <span className={styles.errorForm}>No válido ^</span>}
                    <label className={styles.labelForm}>Numero de documento</label>
                    <input className={styles.inputForm} {...register("id_documento", { required:true, pattern: /^[0-9]*$/i })} />
                    {errors.id_documento && <span className={styles.errorForm}>No válido ^</span>}
                    <label className={styles.labelForm}>Fecha de nacimiento</label>
                    <input className={styles.inputForm} type="date" {...register("fecha_nacimiento", { required: true })} />
                    {errors.fecha_nacimiento && <span className={styles.errorForm}>No válido ^</span>}
                    <label className={styles.labelForm}>Numero de télefono</label>
                    <input className={styles.inputForm} {...register("telefono", { required: true, pattern: /^[0-9]*$/i })} />
                    {errors.telefono && <span className={styles.errorForm}>No válido ^</span>}
                    <label className={styles.labelForm}>Correo eléctronico</label>
                    <input className={styles.inputForm} {...register("email", { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i })} />
                    {errors.email && <span className={styles.errorForm}>No válido ^</span>}
                    <label className={styles.labelForm}>Curso</label>
                    <select {...register("tipo_documento")}>
                        <option value="CC">Aviación</option>
                        <option value="NIT">Sguridad nacional</option>
                        <option value="other">FBI</option>
                    </select>
                    {errors.tipo_documento && <span className={styles.errorForm}>No válido ^</span>}
                    <label className={styles.labelForm}>Imagen del documento</label>
                    <input className={styles.inputForm} type="file" {...register("documentfile", { required: true })} />
                    {errors.documentfile && <span className={styles.errorForm}>Cargue un documento</span>}
                    <Link className={styles.tyc} to="/quienes-somos">Política de tratamiento de datos personales</Link>
                    <input className={styles.btnsubmit} type="submit"  value="Registrarse"/>
                </form>
            </section>
        </section>
    )
}

export default Register