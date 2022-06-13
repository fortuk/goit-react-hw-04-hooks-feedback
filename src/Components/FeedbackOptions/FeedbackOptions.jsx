import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackButton = ({ feedback, clickFeedback }) => {
    return (
        <button
            className={styles.btn}
            type="button"
            data-feedback={feedback}
            key={feedback}
            onClick={clickFeedback}
        >
            {feedback}
        </button>
    );
};

const FeedbackOptions = ({ options, clickFeedback }) => {
    return options.map(option =>
        FeedbackButton({ feedback: option, clickFeedback }),
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    clickFeedback: PropTypes.func.isRequired,
};


export default FeedbackOptions;