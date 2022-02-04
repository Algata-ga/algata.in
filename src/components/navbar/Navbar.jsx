import { useState, useEffect } from "react";
import style from "./Navbar.module.css";

import setGlobalTheme from "../../utils/themeSwitcher";

import { BsFillCloudSunFill, BsFillCloudMoonFill, BsSun } from "react-icons/bs";

const Navbar = () => {
    const [theme, setTheme] = useState(0);
    const themes = [<BsFillCloudSunFill />, <BsFillCloudMoonFill />, <BsSun />];

    useEffect(() => setGlobalTheme(theme), [theme]);
    return (
        <nav className={style.nav}>
            <h1 className={style.h1}>Algata</h1>
            <div className={style.btns}>
                <button className={style.hire}>Hire Us</button>
                <p className={style.p}>|</p>
                <button
                    className={style.changer}
                    onClick={(theme) => setTheme((theme) => (theme + 1) % 3)}
                >
                    {themes[theme]}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
