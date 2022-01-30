import style from "./Section2.module.css";

import Section from "../../components/section/Section.jsx";
import StylizedWord from "../../components/stylizedWord/StylizedWord";

import {AiOutlineArrowDown} from "react-icons/ai"

const Section2 = () => {
    return (
        <Section>
            <div className={style.sec2}>
                <div className={style.box}>

                </div>
                <div className={style.contentbox}>
                    <h1 className={style.h1}>if exection of <StylizedWord text="idea" /> is the <br /> problem, make us the <br /> solution.</h1>
                    <p className={style.p}>On The Other Hand, We Denounce With Righteous Indignation And Dislike Men Who Are So Beguiled And Demoralized By The Charms Of Pleasure Of The Moment</p>
                    <button className={style.arrow}><AiOutlineArrowDown/></button>
                </div>
            </div>
        </Section>
    )
}

export default Section2;