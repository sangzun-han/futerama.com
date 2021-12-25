import { NextPage } from "next";
import { InventoryContainer } from "../components/InventoryContainer";

const InventoryPage: NextPage = () => {
  const name = "inventory";
  return <InventoryContainer name={name} />;
};
export default InventoryPage;
