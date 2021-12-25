import { NextPage } from "next";
import { QuestionContainer } from "../components/QuestionContainer";

const Question: NextPage = () => {
  const name = "questions";
  return <QuestionContainer name={name} />;
};

export default Question;
