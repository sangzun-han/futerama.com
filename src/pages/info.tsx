import { NextPage } from "next";
import { InfoContainer } from "../components/InfoContainer";

const InfoPage: NextPage = () => {
  const name = "info";
  return <InfoContainer name={name} />;
};

export default InfoPage;
