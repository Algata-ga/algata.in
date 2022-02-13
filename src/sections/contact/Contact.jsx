import Modal from "../../components/modal/Modal";
import style from "../contact/Contact.module.css";

import contact from "../../assets/contact.svg";

import { AiOutlineClose } from "react-icons/ai";

const Contact = (props) => {
    const submitForm = async (e) => {
        //THIS IS BADD...IMEAN REALLY BAD
        e.preventDefault();
        const name = e.target.name.value;
        const message = e.target.message.value;
        const email = e.target.email.value;
        const contact_form_url =
            "https://script.google.com/macros/s/AKfycbwO7_ho1KYrtMTrUyx4yEja90ZskZ_1hrhPI46gXwFT3sV99ro8arIeIhtDeBH6vzNAtw/exec";
        fetch(contact_form_url, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `name=${name}&email=${email}&message=${message}`,
        });
        window.setTimeout(() => null, 500);
        props.showContact(false);
    };
    return (
        <Modal>
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
                    <div className={style.content}>
                        <h1 className={style.h1}>Hit us up</h1>
                        <p className={style.p}>
                            Want to talk to us about your needs? Need a
                            quoatation? Just want to clear your doubts. You can
                            contact us anytime or chat with us throught
                            Telegram.
                        </p>
                    </div>
                    <form className={style.form} onSubmit={submitForm}>
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
                        <input
                            type="submit"
                            value="Send"
                            className={style.btn}
                        />
                    </form>
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
