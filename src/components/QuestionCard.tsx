import { QuestionData } from "../types/questions";

interface QuestionCardProps {
  questionData: QuestionData;
}

export const QuestionCard = ({ questionData }: QuestionCardProps) => {
  const { question, possibleAnswers, correctAnswer } = questionData;
  return (
    <div>
      <p>{question}</p>
      {possibleAnswers.map((possibleAnswer, index: number) => {
        return (
          <div>
            <label>
              <input type="radio" value={possibleAnswer} />
            </label>
            {possibleAnswer}
          </div>
        );
      })}
    </div>
  );
};
