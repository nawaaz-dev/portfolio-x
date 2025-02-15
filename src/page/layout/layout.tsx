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
      <div className="flex w-full h-full">
        <header className="hidden xs:flex justify-end flex-grow">
          {leftContent || <Nav />}
        </header>
        <main className="flex flex-grow-[1] md:flex-grow-[2] lg:flex-grow flex-shrink h-full gap-8 relative overflow-y-auto w-full md:w-[600px] lg:w-[920px] xl:w-[990px] 2xl:w-[1050px]">
          <div className="flex-1 border-l border-r h-fit border-gray-700 max-w-[600px]">
            {mainContent}
          </div>
          <div className="hidden lg:block w-[350px] mt-1 sticky top-0">
            {rightContent}
          </div>
        </main>
      </div>
      <div className="flex xs:hidden absolute bottom-0 w-full z-10">
        {leftContent || <Nav />}
      </div>
    </div>
  );
};

export default memo(Layout);
