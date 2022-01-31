import style from "../footer/Footer.module.css";

import Section from "../../components/section/Section";

import { FaTelegram, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"

const Footer = () => {
    return (
        <>
            <Section height="auto">
                <footer className={style.footer}>
                    <p className={style.p1}>
                        Reach To US ON
                    </p>
                    <div className={style.icons}>
                        <a href="" className={style.icon}><FaTelegram /></a>
                        <a href="" className={style.icon}><FaInstagram /></a>
                        <a href="" className={style.icon}><FaLinkedin /></a>
                        <a href="" className={style.icon}><FaGithub /></a>
                        <a href="" className={style.icon}><FaTelegram /></a>
                    </div>

                </footer>
            </Section>
            <p className={style.p2}>
                -Algata Creative Studio
            </p>
        </>
    )
}

export default Footer;