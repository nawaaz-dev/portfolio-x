"use client";
import { FC } from "react";
import Layout from "../layout";
import Previews from "../components/previews";
import Connects from "../components/connects";
import PersonalContent from "./personal";
import Tabs from "./tabs";

const HomePage: FC = () => {
  return (
    <Layout
      mainContent={
        <div className="flex flex-col">
          <div>
            <PersonalContent />
          </div>
          <div className="lg:hidden px-4 flex flex-col gap-2 mb-4">
            <h3 className="font-bold">Connect</h3>
            <Connects />
          </div>
          <div>
            <Tabs />
          </div>
        </div>
      }
      rightContent={<Previews />}
    />
  );
};

export default HomePage;
