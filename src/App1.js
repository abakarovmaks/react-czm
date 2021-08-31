import './App.css';
import React, { Component } from 'react';
import Container from './components/App1/Container/Container';
import Section from './components/App1/Section/Section';
import FeedbackOptions from './components/App1/FeedbackOptions/FeedbackOptions';
import Statistics from './components/App1/Statistics/Statistics';
import Notification from './components/App1/Notification/Notification';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total === 0 ? 0 : Math.floor((good / total) * 100);
  }

  handleFeedback = ({ target }) => {
    const feedbackType = target.dataset.action;
    this.setState(prevState => ({
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = ['good', 'neutral', 'bad'];

    return (
      <Container>
        <Section title="Пожалуйста, оставьте отзыв">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title="Статистика">
          {this.countTotalFeedback() !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="Нет отзывов!" />
          )}
        </Section>
      </Container>
    );
  }
}
