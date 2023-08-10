import { useState } from "react";

export function useFeedbackState() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const [goodClicks, setGoodClicks] = useState(0);

  const handleFeedback = (type) => {
    if (type === "good") {
      setGoodClicks((prevGoodClicks) => prevGoodClicks + 1);
    }
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  return { feedback, goodClicks, handleFeedback };
}
