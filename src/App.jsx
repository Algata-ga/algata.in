import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Section1 from "./sections/section1/Section1";
import Section2 from "./sections/section2/Section2";
import Section3 from "./sections/section3/Section3";
import Footer from "./sections/footer/Footer";
import Contact from "./sections/contact/Contact";

import { useState } from "react";

function App() {
    const [showContact, setContactState] = useState(false);
    return (
        <>
            {showContact && <Contact showContact={setContactState} />}
            <Navbar showContact={setContactState} />
            <Section1 />
            <Section2 />
            <Section3 />
            <Footer />
        </>
    );
}

export default App;
