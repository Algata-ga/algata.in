import style from "./Section3.module.css";
import Card from "../../components/card/Card";
import {MdDeveloperMode} from "react-icons/md"

import Section from "../../components/section/Section.jsx";
import StylizedWord from "../../components/stylizedWord/StylizedWord";

const Section3=()=>{
    const icon1=<MdDeveloperMode/>;

    return(
        <Section>
            <div className={style.cards}>
                <Card icon={icon1} title="hai" content="On The Other Hand, We Denounce With Righteous Indignation And Dislike Men Who Are So Beguiled And Demoralized By The Charms Of Pleasure Of The Moment"/>
                <Card title="hai" content="On The Other Hand, We Denounce With Righteous Indignation And Dislike Men Who Are So Beguiled And Demoralized By The Charms Of Pleasure Of The Moment" />
                <Card title="hai" content="On The Other Hand, We Denounce With Righteous Indignation And Dislike Men Who Are So Beguiled And Demoralized By The Charms Of Pleasure Of The Moment" />
                <Card title="hai" content="On The Other Hand, We Denounce With Righteous Indignation And Dislike Men Who Are So Beguiled And Demoralized By The Charms Of Pleasure Of The Moment"/>
                <Card title="hai" content="On The Other Hand, We Denounce With Righteous Indignation And Dislike Men Who Are So Beguiled And Demoralized By The Charms Of Pleasure Of The Moment"/>
                <Card title="hai" content="On The Other Hand, We Denounce With Righteous Indignation And Dislike Men Who Are So Beguiled And Demoralized By The Charms Of Pleasure Of The Moment"/>
            </div>
        </Section>
    )
}
export default Section3;