import style from "./StylizedWord.module.css";

const StylizedWord = (props) => {
    return <span className={style.word}>{props.text}</span>;
};
export default StylizedWord;
