import { useState } from "react"
import Header from "./components/Header"
import FeedbackItem from "./components/FeedbackItem"
import FeedBackData from "./data/FeedbackData"
import FeedBackList from "./components/FeedBackList"

function App() {
    const [feedback, setFeedback] = useState(FeedBackData)
   
    return (
        <>
            <Header />
            <div className="container">
                <FeedBackList feedback={ feedback } />
            </div>
        </>
    )
}

export default App