import PropTypes from 'prop-types';
import Button from '../Button/Button';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return options.map(option =>
    Button({ feedbackType: option, onLeaveFeedback }),
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
};
