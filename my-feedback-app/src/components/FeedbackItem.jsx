import Card from "./shared/Card"
import PropTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa'
function FeedbackItem({ item, handleDelete }) {


    return (
        <Card reverse={true}>
            <div className="num-display">{item.rating}</div>
            <button onClick={() => handleDelete(item.id)} 
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
