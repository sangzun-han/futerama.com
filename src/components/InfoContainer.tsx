import { useFuturamaData } from "../hooks/useFuturama";
import { InfoData } from "../types/infoData";
import { Error, Loading } from "../components";
import styled from "@emotion/styled";

export const InfoContainer = () => {
  const name = "info";
  const { data, error } = useFuturamaData(name);

  if (error) return <Error />;
  if (!data) return <Loading />;
  return (
    <Container>
      {data.map((infoData: InfoData) => {
        const { synopsis, yearsAired, creators, id } = infoData;

        return (
          <div key={`info-data-${id}`}>
            <Info>
              <H1>Futurama</H1>
              <InfoText>
                {creators.map((creator) => {
                  return (
                    <Text key={`creator-${creator.name}`}>{creator.name} </Text>
                  );
                })}

                <Text>{yearsAired}</Text>
              </InfoText>
            </Info>
            <p>{synopsis}</p>
          </div>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 2rem;
`;

const H1 = styled.h1`
  margin-right: 0.5rem;
`;
const Info = styled.div`
  display: flex;
  align-items: baseline;

  @media screen and (max-width: 420px) {
    flex-direction: column;
  }
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
