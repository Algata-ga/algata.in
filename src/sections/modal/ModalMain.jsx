import style from "../modal/ModalMain.module.css";
import parachute from "../../assets/parchute.svg";

import { FaTelegram, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineMail, AiOutlineClose } from "react-icons/ai";

import Modal from "../../components/modal/Modal";

import { useState } from "react";

const ModalMain = (props) => {
    const [modalShow, setModalShow] = useState(true);
    return (
        <Modal show={modalShow}>
            <div className={style.modalbox}>
                <div className={style.svgimg}>
                    <img src={parachute} className={style.img} alt="" />
                </div>
                <div className={style.contentbox}>
                    <h1 className={style.h1}>
                        if exection of idea is the problem, make us the
                        solution.
                    </h1>
                    <p className={style.p}>
                        On The Other Hand, We Denounce With Righteous
                        Indignation And Dislike Men Who Are So Beguiled And
                        Demoralized By The Charms Of Pleasure Of The Moment
                    </p>
                    <button className={style.btn}>Get Started</button>
                    <div className={style.div}>
                        <p className={style.p1}>Reach To Us On</p>
                        <div className={style.icons}>
                            <a
                                href="https://telegram.me/alfredjophy"
                                target="blank"
                                className={style.icon}
                            >
                                <FaTelegram />
                            </a>
                            <a href="#" target="blank" className={style.icon}>
                                <FaInstagram />
                            </a>
                            <a href="#" target="blank" className={style.icon}>
                                <FaLinkedin />
                            </a>
                            <a
                                href="https://github.com/Algata-ga"
                                target="blank"
                                className={style.icon}
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="mailto:algata.info@gmail.com"
                                target="blank"
                                className={style.icon}
                            >
                                <AiOutlineMail />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.closebtn}>
                <button
                    className={style.btnclose}
                    onClick={() => setModalShow(false)}
                >
                    <AiOutlineClose />
                </button>
            </div>
        </Modal>
    );
};
export default ModalMain;
