import { ReactNode } from "react";

type HorizontalTab = {
  title: string;
  content: ReactNode;
};
export type HorizontalTabsProps = {
  isDataLoading: boolean;
  tabs: HorizontalTab[];
  defaultActiveIndex?: number;
  onTabChange?: (index: number) => void;
};
