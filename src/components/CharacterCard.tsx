import styled from "@emotion/styled";
import { CharacterData } from "../types/characters";

interface CharacterCardProps {
  characterData: CharacterData;
}

export const CharacterCard = ({ characterData }: CharacterCardProps) => {
  const { images, name } = characterData;
  return (
    <Card>
      <Profile src={images.main} alt="character" />
      <H2>
        <p>
          {name.first} {name.middle} {name.last}
        </p>
      </H2>
    </Card>
  );
};

const Card = styled.div`
  max-width: 280px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Profile = styled.img`
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: contain;
`;

const H2 = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`;
