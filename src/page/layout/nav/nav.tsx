import Link from "next/link";
import { FC } from "react";

const Nav: FC = () => {
  return (
    <header className="flex xs:flex-col w-full sm:w-[90px] lg:w-[275px] items-end">
      <h1 className="hidden xs:block text-2xl font-bold">
        <em>ND</em>
      </h1>
      <ul className="flex xs:flex-col py-2 xs:py-4 [&>li]:py-2 [&>li]:flex-1 [&>li]:text-center xs:[&>li]:text-left">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </header>
  );
};

export default Nav;
