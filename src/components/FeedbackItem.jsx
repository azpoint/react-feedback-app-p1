import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

import Card from "./shared/Card";

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext)

  return (
    <Card key={item.id}>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => deleteFeedback(item.id)}>
        <FaTimes color="purple" />
      </button>
      <button className="edit">
        <FaEdit color="purple" onClick={() => editFeedback(item)}/>
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;
