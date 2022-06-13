import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const OptionsFeedback = ({ options, clickFeedback }) => {
    return options.map((option) => ( <
        button key = { option }
        className = { styles.btn }
        onClick = {
            () => clickFeedback(option)
        } > { makeFirstLetterBig(option) } <
        /button>
    ));
};

function makeFirstLetterBig(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}
OptionsFeedback.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    clickFeedback: PropTypes.func.isRequired,
};


export default OptionsFeedback;