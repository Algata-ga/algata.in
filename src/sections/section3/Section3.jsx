import style from "./Section3.module.css";
import Card from "../../components/card/Card";
import { MdDeveloperMode } from "react-icons/md";

import Section from "../../components/section/Section.jsx";
import StylizedWord from "../../components/stylizedWord/StylizedWord";

const Section3 = () => {
    const icon1 = <MdDeveloperMode />;

    const data = [
        {
            icon: <MdDeveloperMode />,
            title: "asdadsad",
            content: "askhdsadkja dhakjdha dkadhakjdhad",
        },

        {
            icon: <MdDeveloperMode />,
            title: "asdadsad",
            content: "askhdsadkja dhakjdha dkadhakjdhad",
        },
        {
            icon: <MdDeveloperMode />,
            title: "asdadsad",
            content: "askhdsadkja dhakjdha dkadhakjdhad",
        },

        {
            icon: <MdDeveloperMode />,
            title: "asdadsad",
            content: "askhdsadkja dhakjdha dkadhakjdhad",
        },

        {
            icon: <MdDeveloperMode />,
            title: "asdadsad",
            content: "askhdsadkja dhakjdha dkadhakjdhad",
        },
        {
            icon: <MdDeveloperMode />,
            title: "asdadsad",
            content: "askhdsadkja dhakjdha dkadhakjdhad",
        },
        {
            icon: <MdDeveloperMode />,
            title: "asdadsad",
            content: "askhdsadkja dhakjdha dkadhakjdhad",
        },

        {
            icon: <MdDeveloperMode />,
            title: "asdadsad",
            content: "askhdsadkja dhakjdha dkadhakjdhad",
        },
    ];
    return (
        <Section>
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
        </Section>
    );
};
export default Section3;

