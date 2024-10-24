import React from 'react'

function FeedbackStats({ feedback }) {
    //Calculate the average rating
    let averageRating = feedback.reduce((acc, item) => acc + item.rating, 0) / feedback.length

    averageRating = averageRating.toFixed(1).replace(/\.0$/, '')

    return (
        <div className='feedback-stats'>
            <h4> {FeedbackStats.length} Reviews</h4>}
            <h4>Average Rating: { isNaN(averageRating) ? 0 : averageRating }</h4>
        </div>
    )
}

export default FeedbackStats
