import style from "./Section.module.css";

const Section = (props) => {
    return (
        <section
            className={style.section}
            style={{ height: props.height ? props.height : "95vh" }}
        >
            {props.children}
        </section>
    );
};

export default Section;
