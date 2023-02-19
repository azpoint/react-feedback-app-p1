import { motion, animatePresence } from "framer-motion";
import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet</p>;
  }

  return (
    <div className="feedback-list">
      {feedback.map((item) => {
        return (
          <FeedbackItem
            key={item.id}
            item={item}
            handleDelete={handleDelete}
          />
        );
      })}
    </div>
  );
}

export default FeedbackList;
