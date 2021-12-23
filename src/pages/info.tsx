import type { NextPage } from "next";
import { Error, Loading } from "../components";
import { FuturamaData } from "../components/FuturamaData";
import { useFuturamaData } from "../hooks/useFuturama";
import { Futurama } from "../types/Futurama";

const Info: NextPage = () => {
  const name = "info";
  const { data, error } = useFuturamaData(name);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <div>
      <h1>Futurama</h1>
      <main>
        {data.map((futuramaData: Futurama) => {
          return (
            <FuturamaData
              key={`futurama-${futuramaData.id}`}
              futuramaData={futuramaData}
            />
          );
        })}
      </main>
    </div>
  );
};

export default Info;
