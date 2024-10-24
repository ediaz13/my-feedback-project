import React from 'react';
import Card from './shared/Card';
import Button from './shared/Button';

function FeedbackForm() {
  const [text, setText] = React.useState('');
  const [btnDisabled, setBtnDisabled] = React.useState(true);
  const [message, setMessage] = React.useState('');

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


  return (
    <Card>
      <form>
        <h2>How would you rate your experience?</h2>

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

        {message && <div className="message">{message}</div>}

      </form>
    </Card>
  );
}

export default FeedbackForm
