import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, clickFeedback }) => {
    return options.map((option) => (
        <button
            type="button"
            onClick={() => addFeedback(option)}
            className={s.btn}
            key={option}
        >
            {makeFirstLetterBig(option)}
        </button>
    ));
}

function makeFirstLetterBig(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    clickFeedback: PropTypes.func.isRequired,
};


export default FeedbackOptions;