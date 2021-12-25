import type { NextPage } from "next";
import styled from "@emotion/styled";
import { Error, Loading } from ".";
import { CharacterCard } from "./CharacterCard";
import { CharacterData } from "../types/characters";
import { useFuturamaData } from "../hooks/useFuturama";

interface CharacterDataProps {
  name: string;
}

export const CharacterContainer = ({ name }: CharacterDataProps) => {
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
  gap: 25px;
  padding: 2rem;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    place-items: center;
  }
`;
