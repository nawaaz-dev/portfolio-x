import { FC } from "react";
import Connects from "../connects";
import Card from "../card";

const Previews: FC = () => {
  return (
    <div className="flex flex-col">
      <Card title="Connect" className="max-w-[250px]">
        <Connects />
      </Card>
    </div>
  );
};

export default Previews;
