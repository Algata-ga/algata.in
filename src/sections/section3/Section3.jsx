import style from "./Section3.module.css";

import Section from "../../components/section/Section.jsx";
import StylizedWord from "../../components/stylizedWord/StylizedWord";
import Card from "../../components/card/Card";

import { useState, useRef } from "react";

import useIntersection from "../../utils/useIntersection";

import content from "./content";

const Section3 = () => {
    return (
        <Section height="auto">
            <div className={style.cards}>
                {content.map((card, index) => (
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
        </Section>
    );
};
export default Section3;
