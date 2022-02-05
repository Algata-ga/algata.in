import style from "./Modal.module.css";

const Modal = (props) => {
    if (!props.show) return null;
    return <div className={style.modal}>{props.children}</div>;
};

export default Modal;
