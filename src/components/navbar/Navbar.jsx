import { useState, useEffect } from "react";
import style from "./Navbar.module.css";

import setDocTheme from "../../utils/themeSwitcher";

import { BsFillCloudSunFill, BsFillCloudMoonFill, BsSun } from "react-icons/bs";

const Navbar = () => {
    const [theme, setTheme] = useState(0);
    const themes = [<BsFillCloudSunFill />, <BsFillCloudMoonFill />, <BsSun />];

    const changeTheme = () => {
        const newTheme = (theme + 1) % 3;
        setTheme(newTheme);
        setDocTheme(newTheme);
    };
    return (
        <nav className={style.nav}>
            <h1 className={style.h1}>Algata</h1>
            <div className={style.btns}>
                <button className={style.hire}>HIRE US</button>
                <p>|</p>
                <button className={style.changer} onClick={changeTheme}>
                    {themes[theme]}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;

