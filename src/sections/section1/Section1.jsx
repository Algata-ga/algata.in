import style from "./Section1.module.css";

import Section from "../../components/section/Section.jsx";
import StylizedWord from "../../components/stylizedWord/StylizedWord";

const Section1 = () => {
    return (
        <Section>
            <h1 className={style.h1}>
                Delievering The
                <br />
                Best <StylizedWord text="Web " /> Experiences
            </h1>
            <h3 className={style.h3}>Want To Know How ?</h3>
        </Section>
    );
};
export default Section1;
