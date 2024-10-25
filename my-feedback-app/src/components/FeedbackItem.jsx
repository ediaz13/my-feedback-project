import Card from "./shared/Card"
import { useContext } from 'react'
import PropTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa'
import FeedbackContext from '../context/FeedbackContext'
function FeedbackItem({ item}) {
    const { deleteFeedback } = useContext(FeedbackContext)

    return (
        <Card reverse={true}>
            <div className="num-display">{item.rating}</div>
            <button onClick={() => deleteFeedback(item.id)} 
                className="close">
                <FaTimes color='purple' />
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.shape({
        rating: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
    }).isRequired,
}


export default FeedbackItem
