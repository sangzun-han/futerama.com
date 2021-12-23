import { Futurama } from "../types/Futurama";

interface FuturamaProps {
  futuramaData: Futurama;
}

export const FuturamaData = ({ futuramaData }: FuturamaProps) => {
  const { synopsis, yearsAired, creators, id } = futuramaData;

  return (
    <div key={`futurama-${id}`}>
      <p>{synopsis}</p>
      {creators.map((item) => {
        return (
          <div>
            <p>{item.name}</p>
            <p>{item.url}</p>
          </div>
        );
      })}
      <p>{yearsAired}</p>
    </div>
  );
};
