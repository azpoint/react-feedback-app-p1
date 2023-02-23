import { useState, useContext, useEffect } from "react";
import FeedbackContext from "../context/FeedbackContext";

function RatingSelect({select}) {
  let rateButtons = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
  ];

  const [selected, setSelected] = useState(10);
  const handleChange = (e) => {
    setSelected(+e.currentTarget.value)
    select(+e.currentTarget.value)
  };

  const { feedbackEdit } = useContext(FeedbackContext)

  useEffect(() => {
    setSelected(feedbackEdit.item.rating)
  }, [feedbackEdit])


  return (
    <div>
      <ul className="rating">
        {rateButtons.map((_, index) => {
            index = ++index
          return (
            <li>
              <input
                type="radio"
                id={`num${index}`}
                name="rating"
                value={index}
                onChange={handleChange}
                checked={selected === index}
              />
              <label htmlFor={`num${index}`}>{index}</label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default RatingSelect;
