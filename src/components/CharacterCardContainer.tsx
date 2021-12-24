import type { NextPage } from "next";
import styled from "@emotion/styled";
import { Error, Loading } from "../components";
import { CharacterCard } from "./CharacterCard";
import { CharacterData } from "../types/characters";
import { useFuturamaData } from "../hooks/useFuturama";

export const CharacterCardContainer = () => {
  const name = "characters";
  const { data, error } = useFuturamaData(name);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <Container>
      {data.map((character: CharacterData) => {
        return (
          <CharacterCard
            characterData={character}
            key={`futurama-character-${character.id}`}
          />
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
