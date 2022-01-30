import "./App.css";

import Navbar from "./components/navbar/Navbar";

import Section1 from "./sections/section1/Section1";

import Section2 from "./sections/section2/Section2";

import Section3 from "./sections/section3/Section3";


function App() {
    return (
        <>
            <Navbar />
            <Section1 />
            <Section2 />
            <Section3 />
        </>
    );
}

export default App;
