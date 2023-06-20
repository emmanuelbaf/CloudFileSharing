import styles from './modalStyles.module.scss';

const Modal = (props) => {
  return (
    <section className={styles.modalContainer} onClick={props.onClick}>
      {props.children}
    </section>
  );
};

export default Modal;
