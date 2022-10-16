import style from "./Section2.module.css";
import Section from "../../components/section/Section.jsx";
import hero from "../../assets/hero.svg";
const Section2 = () => {
    return (
        <Section height="auto" padding="5rem">
            <div className={style.sec2}>
                <div className={style.box}>
                    <img className={style.hero} src={hero} alt="" />
                </div>
                <div className={style.contentbox}>
                    <p className={style.p}>
                        Algata has been combining design thinking, UI/UX strategy, and senior programming knowledge to assist businesses and startups in creating unique websites and applications.
                    </p>
                </div>
            </div>
        </Section>
    );
};

export default Section2;
