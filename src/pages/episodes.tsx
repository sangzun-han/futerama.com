import { NextPage } from "next";
import { EpisodesContainer } from "../components/EpisodesCotainer";

const Episodes: NextPage = () => {
  const name = "episodes";
  return <EpisodesContainer name={name} />;
};

export default Episodes;
