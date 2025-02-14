import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

const Nav: FC = () => {
  const path = usePathname();

  const navs = [
    {
      title: "Home",
      icon: "/img/home.svg",
      link: "/",
    },
    {
      title: "About",
      icon: "/img/info.svg",
      link: "/about",
    },
  ];
  return (
    <div className="flex xs:flex-col w-full items-end dark:bg-[#0a0a0a] border-t xs:border-t-0 border-gray-700 ">
      <div className="flex xs:flex-col w-full sm:w-[100px] lg:w-[250px] xs:pt-1">
        <Link
          href="/"
          className="hidden xs:block text-2xl font-bold p-2 xs:p-3"
          title="Nawaaz Kortiwala (Dev)"
        >
          <em>NKD</em>
        </Link>
        {navs.map((nav, index) => {
          const isActive = path.split("/")[1] === nav.link.split("/")[1];
          return (
            <Link
              key={index}
              href={nav.link}
              className="flex justify-center items-center p-3 gap-2 flex-1 xs:flex-auto"
            >
              <img
                src={nav.icon}
                alt={nav.title}
                className="w-[26px] h-[26px] cursor-pointer"
                style={{
                  filter: isActive
                    ? "brightness(0) saturate(100%) invert(60%) sepia(20%) saturate(2631%) hue-rotate(3deg) brightness(107%) contrast(104%)"
                    : "unset",
                }}
              />
              <span
                className={clsx(
                  "hidden lg:block text-[20px]",
                  isActive ? "text-[#FFA500]" : ""
                )}
              >
                {nav.title}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Nav;
