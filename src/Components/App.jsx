import { React, useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import s from '../components/App.module.css'

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

    const handleFeedback = ({ target }) => {
        const { feedback } = target.dataset;

        switch (feedback) {
            case 'good':
                setGood(prevGood => prevGood + 1);
                break;
            case 'neutral':
                setNeutral(prevNeutral => prevNeutral + 1);
                break;
            case 'bad':
                setBad(prevBad => prevBad + 1);
                break;
            default:
                return;
        }
    };

    return (
        <div className={s.app}>
            <Section title="Please leave feedback">
                <FeedbackOptions
                    options={Object.keys({ good, neutral, bad })}
                    onLeaveFeedback={handleFeedback}
                />
            </Section>
            <Section title="Statistics">
                <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={countTotalFeedback()}
                    positivePercentage={countPositiveFeedbackPercentage()}
                />
            </Section>
        </div>
    );
}
