import "./App.css";

import Navbar from "./components/navbar/Navbar";

import Section1 from "./sections/section1/Section1";

import Section2 from "./sections/section2/Section2";

import Section3 from "./sections/section3/Section3";
import Section4 from "./sections/section4/Section4";
import Footer from "./sections/footer/Footer";
import Modals from "./sections/modal/Modals";


function App() {
    return (
        <>
            <Modals />
            <Navbar />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Footer />

        </>
    );
}

export default App;
