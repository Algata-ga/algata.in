import style from "./Section.module.css";

const Section = (props) => {
    return <section className={style.section}>{props.children}</section>;
};

export default Section;
