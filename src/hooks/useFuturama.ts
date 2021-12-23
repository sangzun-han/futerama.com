import useSWR from "swr";
import { fetcher } from "../utils/fecther";
import { FUTURAMA_API_ENDPOINT } from "../constants";

export const useFuturamaData = (path: string) => {
  return useSWR(`${FUTURAMA_API_ENDPOINT}${path}`, fetcher);
};
