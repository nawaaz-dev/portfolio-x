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
    <div className="flex flex-col gap-4 h-[100dvh] relative">
      <div className="flex w-full h-full">
        <div className="hidden xs:flex justify-end flex-grow border">
          {leftContent || <Nav />}
        </div>
        <div className="flex flex-grow-[2] lg:flex-grow flex-shrink">
          <div className="flex w-full sm:w-[600px] lg:w-[920px] xl:w-[990px] 2xl:w-[1050px]">
            <div className="flex-1 border">{mainContent}</div>
            <div className="hidden lg:block border w-[350px]">
              {rightContent}
            </div>
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
