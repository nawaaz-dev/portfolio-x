import { FC, PropsWithChildren, ReactNode, memo } from "react";
import Nav from "./nav";
import "./layout.css";

interface LayoutProps {
  leftContent?: ReactNode;
  mainContent: ReactNode;
  rightContent: ReactNode;
}

const Layout: FC<PropsWithChildren<LayoutProps>> = ({
  leftContent,
  mainContent,
  rightContent,
}) => {
  return (
    <div className="flex flex-col gap-4 h-[100dvh] relative overflow-y-auto">
      <div className="flex w-full h-full lg:gap-8">
        <header className="hidden xs:flex justify-end flex-grow-1">
          {leftContent || <Nav />}
        </header>
        <main className="flex flex-grow-[1] flex-shrink h-full gap-8 relative overflow-y-auto">
          <div className="flex-1 border-l border-r h-fit border-gray-700 w-max sm:max-w-[600px] lg:max-w-[920px] xl:max-w-[990px] 2xl:max-w-[1050px] ">
            {mainContent}
          </div>
          <div className="hidden lg:block w-[350px] mt-1 sticky top-0">
            {rightContent}
          </div>
        </main>
      </div>
      <div className="flex xs:hidden absolute bottom-0 w-full">
        {leftContent || <Nav />}
      </div>
    </div>
  );
};

export default memo(Layout);
