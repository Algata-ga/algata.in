import { useState } from "react";
import style from "./Navbar.module.css";

import { BsFillCloudSunFill,BsFillCloudMoonFill,BsSun } from "react-icons/bs";

const Navbar = () => {
    const [theme,setTheme] = useState(0);
    
    const light = <BsFillCloudSunFill />
    const dark = <BsFillCloudMoonFill />
    const manja = <BsSun />


    const themes=[light,dark,manja];
    return (
        <nav className={style.nav}>
            <h1 className={style.h1}>Algata</h1>
            <div className={style.btns}>
                <button className={style.hire}>HIRE US</button>
                <p>|</p>
                <button className={style.changer} onClick={() => setTheme((theme) => (theme + 1)%3)}>{themes[theme]}</button>
            </div>

        </nav>
    )
}

export default Navbar;