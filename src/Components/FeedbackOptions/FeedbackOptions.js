import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const OptionsFeedback = ({ options, clickFeedback }) => {
    return options.map((option) => ( 
        <button
            key={option}
            className={styles.btn}
            onClick={() => clickFeedback(option)}
        >
            {option}
        </button>
    ));
};
OptionsFeedback.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    clickFeedback: PropTypes.func.isRequired,
};


export default FeedbackOptions;