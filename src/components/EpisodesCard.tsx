import styled from "@emotion/styled";
import { EpisodesData } from "../types/episodes";

interface EpisodesCardProps {
  episodesData: EpisodesData;
}

export const EpisodesCard = ({ episodesData }: EpisodesCardProps) => {
  const { title, number, writers, originalAirDate } = episodesData;
  return (
    <Container>
      <EpisodesImg
        src="https://w.namu.la/s/c30d9b068104918e6beb1cb3454b655659ac7fc28c959939f9d008f7d460821797714195fb71dfd3e3c378b14fc0a0c3f8fb89bfe48c77ca0f0d7d181245d1dd977b0da570f3f846cfd435b8972bff158e6ff18e7d03353e1912be7f893c3673943dca2c3a24ac3bbd545ffb8100b26d"
        alt="image"
      />
      <Info>
        <EpisodesInfo>
          <Span>{number}화</Span>
          <H2>{title}</H2>
        </EpisodesInfo>

        <EpisodesWriter>
          <span>{writers}</span>
          <Date>{originalAirDate}</Date>
        </EpisodesWriter>

        <Button>감상하기</Button>
      </Info>
    </Container>
  );
};

const Container = styled.div`
  width: 1280px;
  height: 230px;
  display: flex;
  margin: 0 auto;
  margin-bottom: 2rem;
  border-radius: 4px;
  border: 1px solid rgb(236, 237, 239);

  @media screen and (max-width: 1280px) {
    width: 90%;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const EpisodesImg = styled.img`
  max-width: 180px;
  max-height: 230px;
  border-radius: 5px;
  margin-right: 2rem;
`;

const EpisodesInfo = styled.div`
  display: flex;
  align-items: baseline;

  @media screen and (max-width: 648px) {
    flex-direction: column;
  }
`;

const Span = styled.span`
  font-weight: 600;
  margin-right: 1rem;
`;

const H2 = styled.h2`
  @media screen and (max-width: 648px) {
    font-size: 15px;
  }
`;
const EpisodesWriter = styled.div`
  display: flex;
  flex-direction: column;
`;

const Date = styled.span`
  font-size: 12px;
  font-weight: 200;
`;

const Button = styled.button`
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

  @media screen and (max-width: 648px) {
    width: 85px;
  }
`;
