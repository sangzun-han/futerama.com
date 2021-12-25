import styled from "@emotion/styled";
import { CAST_IMG } from "../constants";
import { CastData } from "../types/cast";

interface CastDataProps {
  castData: CastData;
}

export const CastCard = ({ castData }: CastDataProps) => {
  const { name, born, id } = castData;

  return (
    <Card>
      <Profile src={CAST_IMG[id - 1].url} alt="cast-img" />
      <CastInfo>
        <h2>{name}</h2>
        <Span>{born}</Span>
      </CastInfo>
    </Card>
  );
};

const Card = styled.div`
  width: 280px;
  border-radius: 15px;
  box-shadow: 5px 5px 30px 7px rgba(0, 0, 0, 0.25),
    -5px -5px 30px 7px rgba(0, 0, 0, 0.22);
  cursor: pointer;
  transition: 0.4s;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: scale(0.9, 0.9);
    box-shadow: 5px 5px 30px 15px rgba(0, 0, 0, 0.25),
      -5px -5px 30px 15px rgba(0, 0, 0, 0.22);
  }
`;

const Profile = styled.img`
  max-width: 280px;
  object-fit: fill;
  aspect-ratio: 3 / 4;
`;

const CastInfo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: baseline;
`;

const Span = styled.span`
  font-size: 11px;
  font-weight: 200;
`;
