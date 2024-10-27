import React from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from "./RatingSelect";
import FeedbackContext from '../context/FeedbackContext';
import { useEffect } from 'react';

function FeedbackForm() {
  const [text, setText] = React.useState('');
  const [btnDisabled, setBtnDisabled] = React.useState(true);
  const [message, setMessage] = React.useState('');
  const [rating, setRating] = React.useState(10);

  const { addFeedback, feedbackEdit, updateFeedback } = React.useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);


  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage('Your review is too short');
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }

    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        rating,
        text,
      };

      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback)
      } else {
        addFeedback(newFeedback);
      }
        

      setText('');
    }
  }

  return (
    <Card>
      <form onSubmit={ handleSubmit }>
        <h2>How would you rate your experience?
        </h2>

        <RatingSelect select={(rating) => setRating(rating)}/>

        <div className='input-group'>
          <input
            onChange={handleTextChange}
            type='text'
            placeholder='Write a review'
            value={text}
          />
          <Button type='submit' isDisabled={btnDisabled}>
            Send
          </Button>
        </div>

        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;