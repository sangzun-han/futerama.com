import styled from "@emotion/styled";
import { QuestionData } from "../types/questions";

interface QuestionCardProps {
  questionData: QuestionData;
}

export const QuestionCard = ({ questionData }: QuestionCardProps) => {
  const { question, possibleAnswers, correctAnswer } = questionData;
  return (
    <Card>
      <h3>Q. {question}</h3>
      <PossibleAnswer>
        {possibleAnswers.map((possibleAnswer) => {
          return (
            <Question key={`possibleAnswer-question-${possibleAnswer}`}>
              <Input
                key={`possibleAnswer-input-${possibleAnswer}`}
                type="radio"
              />
              <label key={`possibleAnswer-label-${possibleAnswer}`}>
                {possibleAnswer}
              </label>
            </Question>
          );
        })}
      </PossibleAnswer>
      <h4>A. {correctAnswer}</h4>
    </Card>
  );
};

const Card = styled.div`
  width: 90%;
  box-shadow: 0 3px 10px 0 rgb(0, 0, 0, 0.25);
  padding: 2rem;
  margin: auto;
  margin-bottom: 1.5rem;
`;

const PossibleAnswer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-right: 1rem;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const Question = styled.div`
  display: block;
  margin-right: 1rem;
`;

const Input = styled.input`
  margin-left: 0;
`;
