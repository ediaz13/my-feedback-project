import React from 'react'
import FeedbackItem from "./FeedbackItem"
import PropTypes from 'prop-types'

function FeedBackList({ feedback }) {
    console.log(feedback)
    if (!feedback || feedback.length === 0) {
        return <p>No Feedback Yet</p>
    }

    return (
        <div className="feedback-list">
            {feedback.map((item) => (
                <FeedbackItem key={item.id} item={ item} />
            ))}
        </div>
    )
}

FeedBackList.propTypes = {
    feedback: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
    })).isRequired,
}

export default FeedBackList
