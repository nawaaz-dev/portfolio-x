import SVG from "@/page/components/svg/svg";
import globalStyles from "@/page/styles/global";
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
    // {
    //   title: "About",
    //   icon: "/img/info.svg",
    //   link: "/about",
    // },
  ];
  return (
    <div className="flex xs:flex-col w-[88px] xl:w-[250px] items-end dark:bg-[#0a0a0a] border-t xs:border-t-0 border-gray-700 ">
      <div className="flex xs:flex-col xs:pt-1">
        <Link
          href="/"
          className="hidden xs:block text-2xl font-bold p-2 xs:p-3"
          title="Nawaaz Kortiwala (Dev)"
        >
          <em>NKD</em>
        </Link>
        {navs.map((nav, index) => {
          // const isActive = path.split("/")[1] === nav.link.split("/")[1];
          return (
            <Link
              key={index}
              href={nav.link}
              className="flex items-center p-3 gap-2 flex-1 xs:flex-auto"
            >
              <SVG
                src={nav.icon}
                alt={nav.title}
                className="w-[24px] h-[24px] cursor-pointer"
                style={
                  {
                    // filter: isActive ? globalStyles.primaryFilter : "unset",
                  }
                }
                filterType="white"
                isActive
              />
              {/* <img
                src={nav.icon}
                alt={nav.title}
                className="w-[24px] h-[24px] cursor-pointer"
                style={
                  {
                    // filter: isActive ? globalStyles.primaryFilter : "unset",
                  }
                }
              /> */}
              <span
                className={clsx(
                  "hidden XL:block text-[20px]"
                  // isActive ? "text-primary" : ""
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
