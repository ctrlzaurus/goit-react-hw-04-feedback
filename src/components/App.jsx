import { Component } from 'react';

import FeedbackOption from './feedback/FeedbackOption';

import Notification from './notification/Notification';

import Statistics from './statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  onLeaveFeedback = event => {
    const currentBtnValue = event.target.value;
    this.setState((prevState) => ({
      ...prevState,
      [currentBtnValue]: prevState[currentBtnValue] + 1,
    }))
  }

  totalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  percentagesFeedback = () => {
    return (Math.round((this.state.good / this.totalFeedback()) * 100))
  }

  hideStatistics = () => {
    if(this.totalFeedback() === 0) {
      return false;
    }
    return true;
  }

  render() {
    const btnNames = Object.keys(this.state);

    return <>
      <section>
        <FeedbackOption 
          options={btnNames} 
          onLeaveFeedback={this.onLeaveFeedback}
        />
        
        {this.totalFeedback() ? <Statistics 
          stat={this.state}
          total={this.totalFeedback()}
          positiveFeedback={this.percentagesFeedback}
        /> : <Notification messege='There is no feedback'/>}
      </section>
      </>
  }
}

export default App;