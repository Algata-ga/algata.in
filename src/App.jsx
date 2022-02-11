import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Section1 from "./sections/section1/Section1";
import Section2 from "./sections/section2/Section2";
import Section3 from "./sections/section3/Section3";
import Section4 from "./sections/section4/Section4";
import Footer from "./sections/footer/Footer";
import Contact from "./sections/contact/Contact";

import { useState, useEffect } from "react";

import themeSwitcher from "./utils/themeSwitcher";

function App() {
    const [showContact, setContactState] = useState(false);
    useEffect(() => {
        const theme_id =
            localStorage.getItem("theme_id") != null
                ? localStorage.getItem("theme_id")
                : window.matchMedia("(prefers-color-scheme: dark)").matches
                ? 1
                : 0;
        themeSwitcher(theme_id);
    }, []);
    return (
        <>
            {showContact && <Contact showContact={setContactState} />}
            <Navbar showContact={setContactState} />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Footer />
        </>
    );
}

export default App;
