import { NextPage } from "next";
import styled from "@emotion/styled/types/base";
import { useFuturamaData } from "../hooks/useFuturama";
import { EpisodesData } from "../types/episodes";
import { Error, Loading } from "../components";

const Episodes: NextPage = () => {
  const { data, error } = useFuturamaData("episodes");

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <div>
      {data.map((episode: EpisodesData) => {
        return (
          <div>
            <p>{episode.number}</p>
            <p>{episode.title}</p>
            <p>{episode.writers}</p>
            <p>{episode.originalAirDate}</p>
            <p>{episode.desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Episodes;
