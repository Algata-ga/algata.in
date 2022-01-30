import style from "./StylizedWord.module.css";

const StylizedWord = (props) => {
    return (
        <span className={style.word} style={{ fontSize: props.fontSize }}>
            {props.text}
        </span>
    );
};
export default StylizedWord;
