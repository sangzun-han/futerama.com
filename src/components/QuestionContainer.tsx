import styled from "@emotion/styled";
import { Error, Loading } from "../components";
import { useFuturamaData } from "../hooks/useFuturama";
import { QuestionData } from "../types/questions";
import { QuestionCard } from "./QuestionCard";

interface QuestionDataProps {
  name: string;
}
export const QuestionContainer = ({ name }: QuestionDataProps) => {
  const { data, error } = useFuturamaData(name);
  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <div>
      <Title>
        <h1>Futurama Quiz!</h1>
        <h2>Question</h2>
      </Title>
      {data.map((question: QuestionData) => {
        return (
          <QuestionCard
            key={`question-card-${question.id}`}
            questionData={question}
          />
        );
      })}
    </div>
  );
};

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
