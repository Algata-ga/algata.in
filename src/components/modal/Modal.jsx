import style from "./Modal.module.css";

const Modal = (props) => {
    return <div className={style.modal}>{props.children}</div>;
};

export default Modal;
