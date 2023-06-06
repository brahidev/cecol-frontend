import React from 'react'
// Styles
import styles from '../../styles/questions/questions.module.css'

import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: 'none',
    backgroundColor: '#fff',
    fontWeight: 700
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '22rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    border: 'none',
    backgroundColor: 'transpartent',
    color: 'rgba(13, 56, 128, 1)',
    fontSize: '40px',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        color: 'rgba(7, 167, 194, 1)',
    },
    '& .MuiAccordionSummary-expandIconWrapper': {
        color: 'rgba(7, 167, 194, 1)',
    }
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    fontWeight: 700
}));


const Questions = () => {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <>
            {/* Banner */}
            <section className={styles.banner}>
                <div className={styles.info}>
                    <div className={styles.ubicacion}>
                        <label>Nuestra direccion</label>
                        <p>Dirección: Carrera 27 C # 71 B - 81</p>
                        <p>Bogotá D.C - Colombia</p>
                    </div>
                    <div className={styles.telefono}>
                        <label>Nuestro telefono</label>
                        <p>321 372 53 23</p>
                    </div>
                    <div className={styles.email}>
                        <label>Nuestro email</label>
                        <p>certificaciones.ccl.sas@gmail.com</p>
                    </div>
                </div>
                <div className={styles.form}>
                    <label>¿Quieres comunicarse con nosotros?</label>
                    <p>Estaremos felices de contestarte</p>
                    <div className={styles.formContainer}>
                        <div className={styles.inputFields}>
                            <input type="text" className={styles.inputForm} placeholder='Nombres' />
                            <input type="text" className={styles.inputForm} placeholder='Apellidos' />
                        </div>
                        <div className={styles.inputFields}>
                            <input type="text" className={styles.inputForm} placeholder='Email' />
                            <input type="text" className={styles.inputForm} placeholder='Asunto' />
                        </div>
                        <div className={styles.inputField}>
                            <textarea placeholder='Mensaje'></textarea>
                        </div>
                        <div className={styles.buttonField}>
                            <input className={styles.btnsubmit} type="submit" value="Aplicar" />
                        </div>
                    </div>
                </div>
            </section>
            {/* Questions */}
            <section className={styles.questions}>
                <label htmlFor="">Preguntas frecuentes</label>
                <div className={styles.accordionContainer}>
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary className={styles.AccordionSummary} aria-controls="panel1d-content" id="panel1d-header" expandIcon={<ExpandMoreIcon />}>
                            <Typography>¿Qué es un organismo de evaluación de la conformidad?</Typography>
                        </AccordionSummary>
                        <AccordionDetails className={styles.AccordionDetails}>
                            <Typography>
                                Es una organización cuyo objetivo principal está dirigido a determinar, directa o indirectamente, el cumplimiento de los requisitos especificados en normas o reglamentos técnicos para una persona, producto, proceso, sistema u organismo. Para obtener el reconocimiento formal de la competencia, el organismo a ser evaluado se presenta ante un organismo acreditador. Este debe garantizar la independencia, objetividad, imparcialidad, confidencialidad y la integridad profesional en las actividades que desempeña y los resultados que emite.
                                Por ello, para tener la adecuada confianza en la información recibida de un OEC, tanto el comprador, como la autoridad responsable y el público en general, necesitan saber que este organismo es competente en la labor que realiza.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary className={styles.AccordionSummary} aria-controls="panel2d-content" id="panel2d-header" expandIcon={<ExpandMoreIcon />}>
                            <Typography>¿Cuál es el objetivo de la certificación de competencias?</Typography>
                        </AccordionSummary>
                        <AccordionDetails className={styles.AccordionDetails}>
                            <Typography>
                                El objetivo global de la certificación de personas es reconocer la competencia de un individuo para llevar a cabo una tarea o un trabajo.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary className={styles.AccordionSummary} aria-controls="panel3d-content" id="panel3d-header" expandIcon={<ExpandMoreIcon />}>
                            <Typography>¿Qué es un Proceso de certificación?</Typography>
                        </AccordionSummary>
                        <AccordionDetails className={styles.AccordionDetails}>
                            <Typography>
                                Son las actividades por la que un organismo de certificación determina que una persona cumple o incumple con los requisitos de certificación que incluyen la solicitud, la evaluación, la decisión de certificación, la renovación de la certificación y el uso de certificados y logotipos/marcas.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                        <AccordionSummary className={styles.AccordionSummary} aria-controls="panel4d-content" id="panel4d-header" expandIcon={<ExpandMoreIcon />}>
                            <Typography>¿Para qué sirve una certificación de competencias laborales?</Typography>
                        </AccordionSummary>
                        <AccordionDetails className={styles.AccordionDetails}>
                            <Typography>
                                Mediante la certificación de competencias, la persona demuestra que cuenta con una serie de habilidades, conocimientos y experticia necesarias para el desarrollo efectivo de una labor en el ámbito laboral, lo cual le da una ventaja competitiva en relación con quienes no cuenten con un certificado de conformidad, además esto le permitirá ampliar su Hoja de Vida y aspirar a mejores cargos dentro de una organización.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                        <AccordionSummary className={styles.AccordionSummary} aria-controls="panel5d-content" id="panel5d-header" expandIcon={<ExpandMoreIcon />}>
                            <Typography>¿Cuáles son los mecanismos de evaluación utilizados en un Proceso de certificación de personas?</Typography>
                        </AccordionSummary>
                        <AccordionDetails className={styles.AccordionDetails}>
                            <Typography>
                                El organismo de evaluación de la conformidad establece la metodología de valoración de los criterios normativos necesarios para el desarrollo eficaz de la labor por medio de diferentes técnicas entre las que se encuentran; Entrevistas, observación, ensayos, pruebas orales, escritas, entre otros.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                        <AccordionSummary className={styles.AccordionSummary} aria-controls="panel6d-content" id="panel6d-header" expandIcon={<ExpandMoreIcon />}>
                            <Typography>¿Qué es un certificado de conformidad?</Typography>
                        </AccordionSummary>
                        <AccordionDetails className={styles.AccordionDetails}>
                            <Typography>
                                Un certificado de conformidad es un documento expedido por un Organismo de evaluación de la conformidad acreditado que certifica, como su nombre lo indica, el cumplimiento de las normas técnicas señaladas en la normatividad vigente y que abarca cada alcance de certificación ofertado.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                        <AccordionSummary className={styles.AccordionSummary} aria-controls="panel7d-content" id="panel7d-header" expandIcon={<ExpandMoreIcon />}>
                            <Typography>¿Qué es el enfoque funcional?</Typography>
                        </AccordionSummary>
                        <AccordionDetails className={styles.AccordionDetails}>
                            <Typography>
                                <p>La evaluación de la conformidad es una serie de tres funciones que satisfacen una necesidad, o una solicitud, de demostrar que se cumplen los requisitos especificados:</p>
                                <ul>
                                    <li>Selección</li>
                                    <li>Determinación, y</li>
                                    <li>Revisión y atestación.</li>     
                                </ul>
                                <p>Tal demostración puede aportar solidez o credibilidad a las afirmaciones de que se cumplen los requisitos especificados, proporcionando a los usuarios una mayor confianza en tales afirmaciones. Las normas se utilizan a menudo como los requisitos especificados, ya que representan un amplio consenso de lo que se quiere en una determinada situación. Como consecuencia, la evaluación de la conformidad es a menudo considerada como una actividad relacionada con las normas.</p>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                        <AccordionSummary className={styles.AccordionSummary} aria-controls="panel8d-content" id="panel8d-header" expandIcon={<ExpandMoreIcon />}>
                            <Typography>¿Qué es un esquema de certificación?</Typography>
                        </AccordionSummary>
                        <AccordionDetails className={styles.AccordionDetails}>
                            <Typography>
                                Es un mecanismo de selección, evaluación y certificación diseñado, revisado y validado para determinar la Competencia y otros requisitos relacionados con las categorías de ocupaciones especificas o habilidades de personas.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
                        <AccordionSummary className={styles.AccordionSummary} aria-controls="panel9d-content" id="panel9d-header" expandIcon={<ExpandMoreIcon />}>
                            <Typography>¿Por qué es importante mantener vigente una certificación de competencias?</Typography>
                        </AccordionSummary>
                        <AccordionDetails className={styles.AccordionDetails}>
                            <Typography>
                            Porque nos debemos asegurar de confirmar la continuidad de la competencia de la persona certificada y de su continua conformidad con los requisitos vigentes del esquema de certificación.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
                        <AccordionSummary className={styles.AccordionSummary} aria-controls="panel10d-content" id="panel10d-header" expandIcon={<ExpandMoreIcon />}>
                            <Typography>¿Por qué es importante asegurar la imparcialidad durante todo el proceso de certificación?</Typography>
                        </AccordionSummary>
                        <AccordionDetails className={styles.AccordionDetails}>
                            <Typography>
                                Es necesario que los organismos de certificación y su personal sean y se perciban imparciales para dar confianza en sus actividades y resultados. La certificación de una persona debería basarse en evidencias objetivas obtenidas por el organismo de certificación a través de una evaluación objetiva, valida y fiable que no esté influenciada por otros intereses u potras partes.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </section>
        </>
    )
}

export default Questions