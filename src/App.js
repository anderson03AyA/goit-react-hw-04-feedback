import "./App.css";
import Feedback from "./components/Feedback/Feedback";
import { useFeedbackState } from "./hooks/useFeedbackState";

function App() {
  const { feedback, goodClicks, handleFeedback } = useFeedbackState();


  const countTotalFeedback = () => {
    return Object.values(feedback).reduce((total, value) => total + value, 0);
  };

  
  const countPositiveFeedbackPercentage = () => {
    const feedbackValues = Object.values(feedback);
    const positiveFeedbacks = feedbackValues.filter((value) => value > 0);
    const percentage = (goodClicks / countTotalFeedback()) * 100;
    return isNaN(percentage) ? 0 : percentage.toFixed(2);
  };

  return (
    <div className="App">
      <Feedback
        onFeedback={handleFeedback}
        data={feedback}
        total={countTotalFeedback}
        positive={countPositiveFeedbackPercentage()}
      />
    </div>
  );
}

export default App;
