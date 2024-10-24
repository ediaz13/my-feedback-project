import { createContext, useState } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedback ] = useState([
        {
            id: '1',
            text: "This is an example feedback item",
            rating: 10
        },
    ]);
    return <FeedbackContext.Provider value={{
        feedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext