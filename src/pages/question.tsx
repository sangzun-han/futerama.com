import { NextPage } from "next";
import { QuestionContainer } from "../components/QuestionContainer";
const Question: NextPage = () => {
  return (
    <div>
      <h1>Futurama Quiz!</h1>
      <h2>Question</h2>
      <QuestionContainer />
    </div>
  );
};

export default Question;
