import { FC, PropsWithChildren, ReactNode, memo } from "react";
import Nav from "./nav";

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
    <div className="flex flex-col gap-4 min-h-[100dvh] relative overflow-y-auto">
      <div className="flex w-full h-full gap-8">
        <div className="hidden xs:flex justify-end flex-grow border border-gray-500">
          {leftContent || <Nav />}
        </div>
        <div className="flex flex-grow-[2] lg:flex-grow flex-shrink h-full w-full">
          <div className="flex w-full sm:w-[600px] lg:w-[920px] xl:w-[990px] 2xl:w-[1050px] h-full gap-8">
            <div className="flex-1 border border-gray-500 h-full w-full overflow-y-auto">
              {mainContent}
            </div>
            <div className="hidden lg:block w-[350px] mt-1">{rightContent}</div>
          </div>
        </div>
      </div>
      <div className="flex xs:hidden absolute bottom-0 w-full">
        {leftContent || <Nav />}
      </div>
    </div>
  );
};

export default memo(Layout);
