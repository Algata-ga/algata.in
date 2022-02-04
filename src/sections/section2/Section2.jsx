import style from "./Section2.module.css";

import element from "../../assets/element.svg";

import Section from "../../components/section/Section.jsx";
import StylizedWord from "../../components/stylizedWord/StylizedWord";

import { AiOutlineArrowDown } from "react-icons/ai";

const Section2 = () => {
    return (
        <Section height="auto" padding="5rem">
            <div className={style.sec2}>
                <div className={style.box}>
                    <img src={element} className={style.element} alt="" />
                </div>
                <div className={style.contentbox}>
                    <h1 className={style.h1}>
                        if exection of{" "}
                        <StylizedWord text="idea" fontSize="3.2rem" /> is the
                        <br /> problem, make us the <br /> solution.
                    </h1>
                    <p className={style.p}>
                        On The Other Hand, We Denounce With Righteous
                        Indignation And Dislike Men Who Are So Beguiled And
                        Demoralized By The Charms Of Pleasure Of The Moment
                    </p>
                    <button className={style.arrow}>
                        <AiOutlineArrowDown />
                    </button>
                </div>
            </div>
        </Section>
    );
};

export default Section2;
