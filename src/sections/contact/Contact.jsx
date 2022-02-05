import Modal from "../../components/modal/Modal";
import style from "../contact/Contact.module.css";

import contact from "../../assets/contact.svg";

import { FaTelegram, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineMail, AiOutlineClose } from "react-icons/ai";

const Contact=()=>{
    return(
        <Modal show={true}>
            <div className={style.modalbox}>
            <div className={style.closebtn}>
                <button
                    className={style.btnclose}
                    onClick={() => setModalShow(false)}
                >
                    <AiOutlineClose />
                </button>
            </div>
                <div className={style.svgimg}>
                    <img src={contact} className={style.img} alt="" />
                </div>
                <div className={style.contentbox}>
                    <h1 className={style.h1}>
                        we will get back to you soon
                    </h1>
                    <p className={style.p}>
                        On The Other Hand, We Denounce With Righteous
                        Indignation And Dislike Men Who Are So Beguiled And
                        Demoralized By The Charms Of Pleasure Of The Moment
                    </p>
                    <form className={style.form}>
                        <input type="text" id="name" name="name" placeholder="Name" />
                        <input type="text" id="email" name="email" placeholder="Email" />
                        <textarea type="text" id="message" name="message" placeholder="Message" />
                    </form>
                    <button className={style.btn}>Send</button>
                    <button className={style.btn1}>Contact Through Telegram</button>
                </div>
            </div>
            
        </Modal>
    )
}

export default Contact;