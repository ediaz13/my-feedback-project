import React from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from "./RatingSelect";

function FeedbackForm({handleAdd}) {
  const [text, setText] = React.useState('');
  const [btnDisabled, setBtnDisabled] = React.useState(true);
  const [message, setMessage] = React.useState('');
  const [rating, setRating] = React.useState(10);

  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length <= 5) {
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

      handleAdd(newFeedback);

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
