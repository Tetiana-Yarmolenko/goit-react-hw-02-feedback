import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackButton = ({feedback, onLeaveFeedback}) => {
    return (
        <button
            type="button" data-feedback={feedback} onClick ={onLeaveFeedback}>
        </button> 
  )  
}
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return options.map((option) => <FeedbackButton feedback={options} onLeaveFeedback={onLeaveFeedback}  />)
    
}
FeedbackOptions.PropTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func.isRequired
}

export default FeedbackOptions;