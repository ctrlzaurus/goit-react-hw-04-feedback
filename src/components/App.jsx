import { useState } from 'react';

import FeedbackOption from './feedback/FeedbackOption';

import Notification from './notification/Notification';

import Statistics from './statistics/Statistics';


function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = event => {
    const currentBtnValue = event.target.value;
  
    switch (currentBtnValue) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        return;
    }
  }

  const totalFeedback = () => {
    return good + neutral + bad;
  }

  const percentagesFeedback = () => {
    return (Math.round((good / totalFeedback()) * 100))
  }

    const btnNames = Object.keys({good, neutral, bad});

    return <>
      <section>
        <FeedbackOption 
          options={btnNames} 
          onLeaveFeedback={onLeaveFeedback}
        />
        
        {totalFeedback() ? <Statistics 
          stat={{good, neutral, bad}}
          total={totalFeedback()}
          positiveFeedback={percentagesFeedback}
        /> : <Notification messege='There is no feedback'/>}
      </section>
      </>
}

export default App;