import { Component } from "react";
import './App.css';

import Section from "./Components/Section/Section"
import FeedbackOptions from "./Components/FeedbackOptions/FeedbackOptions"
import {FEEDBACK_OPTIONS} from "./data/constans"

class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }
  
  handleFeedback = ({ event }) => {
    const { feedback } = event.dataset
    this.setState(prevState => ({[feedback] : prevState[feedback] + 1}))
  }

  render() {
    return <div>
      <Section title="Please leave feedback">
      <FeedbackOptions options={FEEDBACK_OPTIONS} onLeaveFeedback/>
      </Section>
    </div>
  }
}

export default App;
