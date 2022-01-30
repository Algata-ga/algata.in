import style from "./Card.module.css";

const Card=(props)=>{
    return(
        <div className={style.card}>  
            {props.icon}
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    );
}

export default Card;