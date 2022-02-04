import style from "../section4/Section4.module.css";

import Section from "../../components/section/Section";
import Section3 from "../section3/Section3";

const Section4=()=>{
    return(
        <Section height="auto">
            <div className={style.sec4}>
                <h3 className={style.h3}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque maiores veniam fugit in, expedita et suscipit, deleniti magnam cumque culpa accusamus necessitatibus ullam inventore error! Optio dolorum consequuntur repellat magni.
                </h3>
                <h4 className={style.h4}>
                    -Team Algata
                </h4>
            </div>
        </Section>
    )
}

export default Section4;