import type { NextPage } from "next";
import { CharacterContainer } from "../../components/CharacterContainer";
const CharacterIndexPage: NextPage = () => {
  const name = "characters";
  return (
    <div>
      <CharacterContainer name={name} />
    </div>
  );
};

export default CharacterIndexPage;
