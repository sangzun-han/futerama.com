import styled from "@emotion/styled";
import { NextPage } from "next";
import { useState } from "react";
import { Loading, Error } from "../components";
import { useFuturamaData } from "../hooks/useFuturama";
import { InventoryData } from "../types/inventory";

function getRandomIntInclude(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

interface InventoryDataProps {
  name: string;
}
export const InventoryContainer = ({ name }: InventoryDataProps) => {
  const { data, error } = useFuturamaData(name);
  const [random, setRandom] = useState(1);

  const handleRandom = () => {
    setRandom(getRandomIntInclude(1, 31));
  };

  if (!data) return <Loading />;
  if (error) return <Error />;

  return (
    <Container>
      <H1>INVENTORY</H1>
      {data.map((inventory: InventoryData) => {
        if (random == inventory.id)
          return (
            <Item>
              <ItemInfoCard>
                <h2>{inventory.title}</h2>
                <p>{inventory.slogan}</p>
                <br />
                <h4>${inventory.price}</h4>
                <RandomButton onClick={handleRandom}>RANDOM</RandomButton>
              </ItemInfoCard>
              <PriceCard>
                <h2>DESCRIPTION</h2>
                <p>{inventory.description}</p>
              </PriceCard>
            </Item>
          );
      })}
    </Container>
  );
};
const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const H1 = styled.h1`
  text-align: center;
`;
const Item = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const ItemInfoCard = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid rgb(220, 227, 230);
  padding: 1.5rem;

  @media screen and (max-width: 360px) {
    width: 250px;
  }
`;

const RandomButton = styled.button`
  width: 10rem;
  border-radius: 1.5rem;
  border: none;
  outline: none;
  background-color: rgb(129, 107, 255);
  color: white;
  font-size: 20px;
  font-weight: bold;
  padding: 0.4rem;
  cursor: pointer;
`;

const PriceCard = styled.div`
  width: 400px;
  height: 300px;
  border: 1px solid rgb(236, 237, 239);
  padding: 1.5rem;

  @media screen and (max-width: 768px) {
    width: 300px;
  }

  @media screen and (max-width: 360px) {
    width: 250px;

    font-size: 12px;
  }
`;
