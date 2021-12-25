import styled from "@emotion/styled";
import { Error, Loading } from "../components";
import { useFuturamaData } from "../hooks/useFuturama";
import { CastData } from "../types/cast";
import { CastCard } from "./CastCard";

interface CastDataProps {
  name: string;
}

export const CastContainer = ({ name }: CastDataProps) => {
  const { data, error } = useFuturamaData(name);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <Container>
      {data.map((cast: CastData) => {
        return <CastCard key={`cast-data-${cast.id}`} castData={cast} />;
      })}
    </Container>
  );
};
const Container = styled.section`
  padding-top: 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
  gap: 25px;

  @media screen and (max-width: 1600px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
