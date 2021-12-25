import type { NextPage } from "next";
import { CharacterCardContainer } from "../../components/CharacterCardContainer";
const CharacterIndexPage: NextPage = () => {
  const name = "characters";
  return (
    <div>
      <CharacterCardContainer name={name} />
    </div>
  );
};

export default CharacterIndexPage;
