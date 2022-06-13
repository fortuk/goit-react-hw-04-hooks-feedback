import { React, useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import s from '../Components/App.module.css'

export default function App() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const countTotalFeedback = () => {
        return good + neutral + bad;
    };

    const countPositiveFeedbackPercentage = () => {
        const result = (good / countTotalFeedback()) * 100;
        if (!result) {
            return 0;
        }
        return Math.floor(result);
    };

    const addFeedback = (value) => {
        switch (value.toLowerCase()) {
            case "good":
                setGood((state) => state + 1);

                break;

            case "neutral":
                setNeutral((state) => state + 1);

                break;

            case "bad":
                setBad((state) => state + 1);

                break;
            default:
                return;
        }
    };

    return ( <
        div className = { s.app } >
        <
        Section title = "Please leave feedback" >
        <
        FeedbackOptions options = {
            ["good", "neutral", "bad"] }
        addFeedback = { addFeedback }
        /> <
        /Section>

        <
        Section title = "Statistics" > {
            countTotalFeedback() ? ( <
                Statistics good = { good }
                neutral = { neutral }
                bad = { bad }
                total = { countTotalFeedback() }
                positivePercentage = { countPositiveFeedbackPercentage() }
                />
            ) : ( <
                Notification message = "No feedback given" / >
            )
        } <
        /Section> <
        /div>
    );
}