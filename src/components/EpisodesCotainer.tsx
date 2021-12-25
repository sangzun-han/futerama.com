import styled from "@emotion/styled";
import { useFuturamaData } from "../hooks/useFuturama";
import { EpisodesData } from "../types/episodes";
import { Error, Loading } from "../components";
import { EpisodesCard } from "./EpisodesCard";

interface EpisodesDataProps {
  name: string;
}

export const EpisodesContainer = ({ name }: EpisodesDataProps) => {
  const { data, error } = useFuturamaData(name);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <div>
      {data.map((episode: EpisodesData) => {
        return (
          <EpisodesCard episodesData={episode} key={`episodes-${episode.id}`} />
        );
      })}
    </div>
  );
};
