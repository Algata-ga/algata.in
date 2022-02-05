import style from "./Section3.module.css";

import img1 from "../../assets/graphic-design.png";
import img2 from "../../assets/branding.png";
import img3 from "../../assets/wp.png";
import img4 from "../../assets/content_.png";
import img5 from "../../assets/gd.png";
import img6 from "../../assets/domain.png";

import Section from "../../components/section/Section.jsx";
import StylizedWord from "../../components/stylizedWord/StylizedWord";
import Card from "../../components/card/Card";

import ModalMain from "../modal/ModalMain";

import { useState, useRef } from "react";

import useIntersection from "../../utils/useIntersection";

const Section3 = () => {
    const ref = useRef();
    const [isModalShown, setModalShown] = useState(false);
    const isVisible = useIntersection(ref, "0px");
    const data = [
        {
            icon: img1,
            title: "asdadsad",
            content:
                "On The Other Hand, We Denounce With Righteous Indignation And Dislike Men Who Are So Beguiled And Demoralized By The Charms Of Pleasure Of The Moment",
        },

        {
            icon: img2,
            title: "asdadsad",
            content:
                "On The Other Hand, We Denounce With Righteous Indignation And Dislike Men Who Are So Beguiled And Demoralized By The Charms Of Pleasure Of The Moment",
        },
        {
            icon: img3,
            title: "asdadsad",
            content:
                "On The Other Hand, We Denounce With Righteous Indignation And Dislike Men Who Are So Beguiled And Demoralized By The Charms Of Pleasure Of The Moment",
        },

        {
            icon: img4,
            title: "asdadsad",
            content:
                "On The Other Hand, We Denounce With Righteous Indignation And Dislike Men Who Are So Beguiled And Demoralized By The Charms Of Pleasure Of The Moment",
        },

        {
            icon: img5,
            title: "asdadsad",
            content:
                "On The Other Hand, We Denounce With Righteous Indignation And Dislike Men Who Are So Beguiled And Demoralized By The Charms Of Pleasure Of The Moment",
        },
        {
            icon: img6,
            title: "asdadsad",
            content:
                "On The Other Hand, We Denounce With Righteous Indignation And Dislike Men Who Are So Beguiled And Demoralized By The Charms Of Pleasure Of The Moment",
        },
    ];
    return (
        <Section height="auto">
            <div className={style.cards}>
                {data.map((card, index) => (
                    <Card
                        icon={card.icon}
                        title={card.title}
                        content={card.content}
                        key={`sec3_card_${index}`}
                    />
                ))}
            </div>
            <div>
                <button className={style.btn}>Explore More</button>
            </div>
            {isVisible && !isModalShown ? <ModalMain /> : null}
            <span ref={ref}></span>
        </Section>
    );
};
export default Section3;
