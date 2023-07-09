import React, { useState, useRef } from "react"
import { Link } from "react-router-dom";
import styles from "../../styles/register.module.css"
import { useForm } from "react-hook-form";
import SignatureCanvas from 'react-signature-canvas'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
    const sigRef = useRef();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [signature, setSignature] = useState()
    const handleSignatureEnd = () => {
        setSignature(sigRef.current.toDataURL());
    }
    const clearSignature = () => {
        sigRef.current.clear();
        setSignature();
    }
    const onSubmit = async (data) => {
        if (signature === undefined) {
            return
        }
        console.log('Data', data)
        data.signature = signature

        const form_data = new FormData();
        for (const [i, photo] of Array.from(data.doc_file).entries()) {
            console.log(i)
            form_data.append(`doc_file[]`, photo);
        }

        for (let key in data) {
            if (key !== 'doc_file') {
                form_data.append(key, data[key])
            }
        }

        const Url = process.env.REACT_APP_DOMAIN_ENDPOINTS + process.env.REACT_APP_REGISTER_ENDPOINT ?? ''
        const dataFetch = await fetch(Url, {
            method: 'POST',
            body: form_data
        })
        const dataJson = await dataFetch.json()

        if ('error' in dataJson && dataJson.error) {
            toast.error('Algo salio mal !', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });

            return
        }

        toast.success('Registrado correctamente !', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        reset()
    };

    return (
        <section className={styles.register}>
            <section className={styles.infsection}>
                <img className={styles.logo} src={'/images/logo_white.png'} alt="Logo" />
                <span className={styles.description}>En CECOL OCP, estamos comprometidos a empoderar a las personas y organizaciones al proporcionar certificaciones rigurosas y reconocidas de competencias laborales.
                    <br />
                    <br />
                    Si usted es un profesional ambicioso que busca mejorar sus habilidades o una empresa que busca asegurar una fuerza laboral competente, ha venido al lugar correcto.</span>
            </section>
            <section className={styles.formsection}>
                <span className={styles.title}>Registro de matricula</span>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className={styles.labelForm}>Nombres completos</label>
                    <input className={styles.inputForm} {...register("name", { required: true, pattern: /^[a-zA-Z]{2,100}.*[\s]*$/g })} />
                    {errors.name && <span className={styles.errorForm}>No válido ^</span>}
                    <label className={styles.labelForm}>Apellidos completos</label>
                    <input className={styles.inputForm} {...register("lastname", { required: true, pattern: /^[a-zA-Z]{2,100}.*[\s]*$/g })} />
                    {errors.lastname && <span className={styles.errorForm}>No válido ^</span>}
                    <label className={styles.labelForm}>Tipo de documento</label>
                    <select {...register("doc_type")}>
                        <option value="1">Cédula de ciudadania</option>
                        <option value="2">Otro</option>
                    </select>
                    {errors.doc_type && <span className={styles.errorForm}>No válido ^</span>}
                    <label className={styles.labelForm}>Numero de documento</label>
                    <input className={styles.inputForm} {...register("doc_number", { required: true, pattern: /^[0-9]*$/i })} />
                    {errors.doc_number && <span className={styles.errorForm}>No válido ^</span>}
                    <label className={styles.labelForm}>Lugar de expedicion</label>
                    <input className={styles.inputForm} {...register("doc_exp_place", { required: true })} />
                    {errors.doc_exp_place && <span className={styles.errorForm}>No válido ^</span>}
                    <label className={styles.labelForm}>Numero de télefono</label>
                    <input className={styles.inputForm} {...register("phone", { required: true, pattern: /^[0-9]*$/i })} />
                    {errors.phone && <span className={styles.errorForm}>No válido ^</span>}
                    <label className={styles.labelForm}>Correo eléctronico</label>
                    <input className={styles.inputForm} {...register("email", { required: true, pattern: /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/i })} />
                    {errors.email && <span className={styles.errorForm}>No válido ^</span>}
                    <label className={styles.labelForm}>Curso</label>
                    <select {...register("course")}>
                        <option value="2">Vigilante</option>
                        <option value="3">Supervisor</option>
                        <option value="4">Escolta</option>
                        <option value="5">Operador de medios</option>
                        <option value="6">Atención y servicio al cliente</option>
                    </select>
                    {errors.course && <span className={styles.errorForm}>No válido ^</span>}
                    <label className={styles.labelForm}>Documentos</label>
                    <input className={styles.inputForm} name="doc_file[]" type="file" multiple {...register("doc_file[]", { required: true, pattern: /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/i })} />
                    {errors.doc_file && <span className={styles.errorForm}>No válido ^</span>}
                    <label className={styles.labelForm}>Firma del documento</label>
                    <section className={styles.firma} {...register("signature")}>
                        <SignatureCanvas penColor='blue'
                            canvasProps={{ width: 500, height: 200, className: 'sigCanvas' }}
                            ref={sigRef}
                            onEnd={function (res) {
                                handleSignatureEnd()
                                const { target } = res
                                const data = target.toDataURL().replace(/^data:image\/png;base64,/, "")
                                setSignature(data)
                            }}
                        />
                        {signature === undefined && <span className={styles.errorForm}>Complete la firma</span>}
                    </section>
                    {errors.documentfile && <span className={styles.errorForm}>Cargue un documento</span>}
                    <input className={styles.btnClearSignature} onClick={clearSignature} value="Borrar firma" />
                    <Link className={styles.tyc} to="/quienes-somos">Política de tratamiento de datos personales</Link>
                    <input className={styles.btnsubmit} type="submit" value="Registrarse" />
                </form>
            </section>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </section>
    )
}

export default Register