import styled from "@emotion/styled";
import { InfoData } from "../types/infoData";

interface InfoDataProps {
  infoData: InfoData;
}

export const InfoSynopsis = ({ infoData }: InfoDataProps) => {
  const { creators, yearsAired, synopsis } = infoData;
  return (
    <div>
      <Info>
        <H1>Futurama</H1>
        <InfoText>
          {creators.map((creator) => {
            return <Text key={`creator-${creator.name}`}>{creator.name} </Text>;
          })}

          <Text>{yearsAired}</Text>
        </InfoText>
      </Info>
      <p>{synopsis}</p>
    </div>
  );
};

const Info = styled.div`
  display: flex;
  align-items: baseline;

  @media screen and (max-width: 420px) {
    flex-direction: column;
  }
`;

const H1 = styled.h1`
  margin-right: 0.5rem;
`;

const Text = styled.span`
  font-size: 12px;
  font-weight: 200;
  margin-right: 0.5rem;

  @media screen and (max-width: 480px) {
    font-size: 10px;
  }
`;

const InfoText = styled.div`
  display: flex;
  align-items: center;
`;
