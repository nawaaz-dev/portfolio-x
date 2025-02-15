import globalStyles from "@/page/styles/global";
import clsx from "clsx";
import { CSSProperties, FC, useEffect, useState } from "react";

type FilterColor = "primary" | "active" | "white";

export type SVGProps = {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  isActive?: boolean;
  filterType?: FilterColor;
  onClick?: () => void;
};

const SVG: FC<SVGProps> = ({
  src,
  alt,
  className,
  style,
  isActive,
  filterType = "primary",
  onClick,
}) => {
  const [defaultStyles, setDefaultStyles] = useState<CSSProperties>({});
  const filterDict = {
    primary: globalStyles.primaryFilter,
    active: globalStyles.activeFilter,
    white: globalStyles.whiteFilter,
    none: "unset",
  };
  const filterValue = filterDict[filterType];

  const handlerMouseEnter = () => {
    setDefaultStyles({
      filter: filterValue,
    });
  };

  const handlerMouseLeave = () => {
    if (isActive) return;
    setDefaultStyles({
      filter: filterDict.none,
    });
  };

  useEffect(() => {
    if (isActive) {
      setDefaultStyles({
        filter: filterValue,
      });
    } else {
      setDefaultStyles({
        filter: filterDict.none,
      });
    }
  }, [isActive]);

  return (
    <img
      src={src}
      alt={alt}
      className={clsx("transition-all", className)}
      style={{ ...defaultStyles, ...style }}
      onClick={onClick}
      onMouseEnter={handlerMouseEnter}
      onMouseLeave={handlerMouseLeave}
    />
  );
};

export default SVG;
