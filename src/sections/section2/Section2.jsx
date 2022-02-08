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
                        have an <StylizedWord text="idea" fontSize="3.2rem" />{" "}
                        you want to see on the web, <br />
                        we can help you with that
                    </h1>
                    <p className={style.p}>
                        Algata Creative Studio has been helping teams with
                        having a great online presence with beautiful websites,
                        marketing campaings, branding and other services. We are
                        dedicated to making the interweb a beautiful place with
                        our works.
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
