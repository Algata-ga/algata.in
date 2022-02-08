import Modal from "../../components/modal/Modal";
import style from "../contact/Contact.module.css";

import contact from "../../assets/contact.svg";

import { FaTelegram, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineMail, AiOutlineClose } from "react-icons/ai";

import { useState } from "react";

const Contact = (props) => {
    //const [show, setShow] = useState(true);
    return (
        <Modal show={true}>
            <div className={style.modalbox}>
                <div className={style.closebtn}>
                    <button
                        className={style.btnclose}
                        onClick={() => {
                            props.showContact(false);
                        }}
                    >
                        <AiOutlineClose />
                    </button>
                </div>
                <div className={style.svgimg}>
                    <img src={contact} className={style.img} alt="" />
                </div>
                <div className={style.contentbox}>
                    <h1 className={style.h1}>Hit us up</h1>
                    <p className={style.p}>
                        Want to talk to us about your needs? Need a quoatation?
                        Just want to clear your doubts. You can contact us
                        anytime or chat with us throught Telegram.
                    </p>
                    <form className={style.form}>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name"
                        />
                        <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Email"
                        />
                        <textarea
                            type="text"
                            id="message"
                            name="message"
                            placeholder="Message"
                        />
                    </form>
                    <button className={style.btn}>Send</button>
                    <p className={style.p2}>or</p>
                    <button className={style.btn1}>
                        Chat with us on Telegram
                    </button>
                </div>
            </div>
        </Modal>
    );
};

export default Contact;
