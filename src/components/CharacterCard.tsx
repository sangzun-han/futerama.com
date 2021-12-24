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
      <h2>
        {name.first} {name.middle} {name.last}
      </h2>
    </Card>
  );
};

const Card = styled.div`
  max-width: 360px;
`;

const Profile = styled.img`
  width: 100%;
  aspect-ratio: 9 /16;
  object-fit: contain;
`;
