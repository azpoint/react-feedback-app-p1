import { useState, useContext, useEffect } from "react";

import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm() {
  const [inputReview, setText] = useState("");
  const [btnDisable, setBtnDisable] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);

  const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext)

  useEffect(() => {
    if(feedbackEdit.edit === true) {
      setBtnDisable(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }
  }, [feedbackEdit])

  const handleTextChange = (e) => {
    if(inputReview === '') {
        setBtnDisable(true)
        setMessage(null)
    } else if(inputReview !== '' && inputReview.trim().length <= 10) {
        setBtnDisable(true)
        setMessage("Text must be at least 10 characters")
    } else {
        setMessage(null)
        setBtnDisable(false)
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if(inputReview.trim().length > 10) {
        const newFeedback = {
            text: inputReview,
            rating: rating
        }

        if(feedbackEdit.edit === true) {
          updateFeedback(feedbackEdit.item.id, newFeedback)
        } else {
          addFeedback(newFeedback)
        }

        setText("")
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)}/>
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            onChange={handleTextChange}
            value={inputReview}
          />
          <Button type="submit" isDisable={btnDisable}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
