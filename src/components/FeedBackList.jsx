import React from 'react';
import FeedbackItem from './FeedbackItem';
import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import Spinner from './shared/Spinner';

function FeedBackList() {
  const { feedback, isLoading } = useContext(FeedbackContext)
  
  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No Feedback Yet</p>;
  }

  return isLoading ? (
    <Spinner/>
  ) : (
    <div className='feedback-list'>
      <AnimatePresence>
      {feedback.map((item) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          >
        <FeedbackItem
          key={item.id}
          item={item}
        />
        </motion.div>
      ))}
      
      </AnimatePresence>

    </div>
  );
}


export default FeedBackList;
