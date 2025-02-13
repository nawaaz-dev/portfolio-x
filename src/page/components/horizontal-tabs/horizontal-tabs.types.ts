import { ReactNode } from "react";

type HorizontalTab = {
  title: string;
  content: ReactNode;
};
export type HorizontalTabsProps = {
  tabs: HorizontalTab[];
  defaultActiveIndex?: number;
  onTabChange?: (index: number) => void;
};
