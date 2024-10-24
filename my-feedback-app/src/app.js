import { useState } from "react"
import Header from "./components/Header"
import FeedBackData from "./data/FeedbackData"
import FeedBackList from "./components/FeedBackList"

function App() {
    const [feedback, setFeedback] = useState(FeedBackData)
   
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete this feedback?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    return (
        <>
            <Header />
            <div className="container">
                <FeedBackList feedback={ feedback }
                handleDelete={deleteFeedback} />
            </div>
        </>
    )
}

export default App