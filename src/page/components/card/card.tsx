import clsx from "clsx";
import { FC, PropsWithChildren } from "react";

export type CardProps = PropsWithChildren<{
  className?: string;
  title: string;
}>;

const Card: FC<CardProps> = ({ children, className, title }) => {
  return (
    <div
      className={clsx(
        className,
        "py-3 px-4 border border-gray-500 rounded-lg w-fit"
      )}
    >
      <h3 className="font-bold">{title}</h3>
      {children}
    </div>
  );
};

export default Card;
