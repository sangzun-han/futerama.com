import { useFuturamaData } from "../hooks/useFuturama";
import { Error, Loading } from "../components";
import styled from "@emotion/styled";
import { InfoData } from "../types/infoData";
import { InfoSynopsis } from "./InfoSynopsis";

interface InfoDataProps {
  name: string;
}

export const InfoContainer = ({ name }: InfoDataProps) => {
  const { data, error } = useFuturamaData(name);

  if (error) return <Error />;
  if (!data) return <Loading />;
  return (
    <Container>
      {data.map((infoData: InfoData) => {
        return (
          <InfoSynopsis key={`info-data-${infoData.id}`} infoData={infoData} />
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 2rem;
`;
