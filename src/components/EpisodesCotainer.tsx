import styled from "@emotion/styled/types/base";
import { useFuturamaData } from "../hooks/useFuturama";
import { EpisodesData } from "../types/episodes";
import { Error, Loading } from "../components";

export const EpisodesContainer = () => {
  const { data, error } = useFuturamaData("episodes");
  console.log(data);
};
