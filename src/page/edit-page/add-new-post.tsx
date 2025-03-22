import { TabsEnum } from "@/page/home/home.types";
import { FC } from "react";

type AddNewPostProps = {
  tab: TabsEnum;
};

const AddNewPost: FC<AddNewPostProps> = ({ tab }) => {
  return <div>Add new post for {tab}</div>;
};

export default AddNewPost;
