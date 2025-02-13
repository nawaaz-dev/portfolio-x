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
        <div className="flex flex-col gap-4">
          <div>
            <PersonalContent />
          </div>
          <div className="lg:hidden">
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
