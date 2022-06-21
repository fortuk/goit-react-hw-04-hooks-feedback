import React from 'react';
import PropTypes from 'prop-types';
import './FeedbackOptions.module.css';


const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div className="feedback__controls">
            {options.map((option) => (
                <button
                    className={option.charAt(0).toUpperCase() + option.slice(1) + ` Btn`}
                    type="button"
                    data-feedback={feedback}
                    key={option}
                    onClick={() => onLeaveFeedback(option)}
                >
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                </button>
            ))}
        </div>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
};


export default FeedbackOptions;