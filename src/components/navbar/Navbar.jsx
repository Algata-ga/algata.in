import { useState, useEffect } from "react";
import style from "./Navbar.module.css";

import setGlobalTheme from "../../utils/themeSwitcher";

import { BsFillCloudSunFill, BsFillCloudMoonFill, BsSun } from "react-icons/bs";
import Contact from "../../sections/contact/Contact";

const Navbar = (props) => {
    const [theme, setTheme] = useState(() => {
        let theme = localStorage.getItem("theme_id");
        if (!theme) {
            theme = window.matchMedia("(prefers-color-scheme: dark)").matches
                ? 1
                : 0;
        }
        return theme;
    });
    const themes = [<BsFillCloudSunFill />, <BsFillCloudMoonFill />, <BsSun />];

    useEffect(() => setGlobalTheme(theme), [theme]);
    return (
        <nav className={style.nav}>
            <h1 className={style.h1}>Algata</h1>
            <div className={style.btns}>
                <button
                    className={style.hire}
                    onClick={() => props.showContact(true)}
                >
                    Hire Us
                </button>
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
