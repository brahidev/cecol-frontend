import ReactModal from 'react-modal'
import styles from './modal.module.css'

const Modal = ({ open, setOpen, title, content }) => {
  const handleClose = () => {
    setOpen(!open)
  }

  return (
    <ReactModal
      isOpen={open}
      contentLabel={title}
      id={"cool-id"}
      shouldCloseOnEsc={true}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <label>{title}</label>
      <p>{content}</p>
      <hr />
      <button onClick={() => handleClose()} />
    </ReactModal>
  )
}

export default Modal