import { v4 as uuidv4 } from "uuid"
import { useState } from "react"
import Card from "./components/shared/Card"
import Header from "./components/Header"
import FeedBackData from "./data/FeedbackData"
import FeedBackList from "./components/FeedBackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from "./pages/AboutPage"
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom"
import AboutIconLink from "./components/AboutIconLink"
import Post from "./components/Post"

function App() {
    const [feedback, setFeedback] = useState(FeedBackData)

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete this feedback?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    return (
        <Router>
            <Header />
            <div className="container">
                <Routes>
                    <Route exact path='/' element={
                        <>
                            <FeedbackForm handleAdd={addFeedback} />
                            <FeedbackStats feedback={feedback} />
                            <FeedBackList feedback={feedback}
                                handleDelete={deleteFeedback} />
                        </>
                    }></Route>
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/post/:id/:name" element={<Post />} />
                </Routes>

                <Card>
                    <NavLink to="/" activeClassName='active'>Home</NavLink>
                    <NavLink to="/about" activeClassName='active'>About</NavLink>
                    <NavLink to="/post/1/John" activeClassName='active'>Post</NavLink>
                </Card>

                <AboutIconLink />
            </div>
        </Router>
    )
}

export default App