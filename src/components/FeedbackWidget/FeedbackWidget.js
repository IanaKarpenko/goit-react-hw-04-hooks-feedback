import { Statistics } from "../Statistics";
import { FeedbackOptions } from "../FeedbackOptions";
import { Section } from "../Section/Section";
import { useState } from "react";

export const FeedbackWidget = () => {

    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const handleClick = (evt) => {
        const { name } = evt.target;
        switch (name) {
            case 'good':
                setGood(good + 1);
                break;
            case 'bad':
                setBad(bad + 1);
                break;
            case 'neutral':
                setNeutral(neutral + 1);
                break;
            default:
                console.log(`Something went wrong in button click handler, button ${name}`);
        }
    }

    const countTotalFeedback = () => {
        return good + neutral + bad;
    }

    const countPositiveFeedbackPercentage = () => {
        return good ? Math.round(good * 100 / countTotalFeedback()) : 0;
    }

    return (
        <>
            <Section title={"Please leave feedback"}>
                <FeedbackOptions
                    options={['good', 'neutral', 'bad']}
                    onLeaveFeedback={handleClick} />
            </Section>

            <Section title={"Statistics"}>
                <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={countTotalFeedback()}
                    positiveFeedbacksPercentage={countPositiveFeedbackPercentage()} />
            </Section>
        </>
    )
}

/*export class oldFeeedbackWidget extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    handleClick = (evt) => {

        const { name } = evt.target;
        this.setState((state) => {
            return { [name]: state[name] + 1 }
        });
    }

    countTotalFeedback = () => {
        return Object.values(this.state).reduce((acc, cur) => acc + cur);
    }

    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        return good ? Math.round(good * 100 / this.countTotalFeedback()) : 0;
    }

    render() {
        console.log(this.countTotalFeedback());
        console.log(this.countPositiveFeedbackPercentage());
        const { good, neutral, bad } = this.state;
        return (
            <>
                <Section title={"Please leave feedback"}>
                    <FeedbackOptions
                        options={Object.keys(this.state)}
                        onLeaveFeedback={this.handleClick} />
                </Section>


                <Section title={"Statistics"}>
                    <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={this.countTotalFeedback()}
                        positiveFeedbacksPercentage={this.countPositiveFeedbackPercentage()} />
                </Section>

            </>
        )
    }
}*/