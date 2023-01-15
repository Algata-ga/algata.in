import style from "../footer/Footer.module.css";

import Section from "../../components/section/Section";

import { FaTelegram, FaInstagram, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
    return (
        <>
            <Section height="auto">
                <footer className={style.footer}>
                    <p className={style.p1}>Reach To Us On</p>
                    <div className={style.icons}>
                        <a
                            href="https://telegram.me/Algata_bot"
                            target="blank"
                            className={style.icon}
                        >
                            <FaTelegram />
                        </a>
                        <a
                            href="https://www.instagram.com/algata.in/"
                            target="blank"
                            className={style.icon}
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="https://github.com/Algata-ga"
                            target="blank"
                            className={style.icon}
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="mailto:contact@algata.in"
                            target="blank"
                            className={style.icon}
                        >
                            <AiOutlineMail />
                        </a>
                    </div>
                </footer>
            </Section>
        </>
    );
};

export default Footer;
