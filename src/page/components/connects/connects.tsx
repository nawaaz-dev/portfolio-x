import clsx from "clsx";
import { FC } from "react";
import SVG from "../svg/svg";

const ConnectsCore: FC = () => {
  const connects = [
    {
      title: "Call",
      url: "tel:+919316896458",
      image: "/img/call.svg",
    },
    {
      title: "Mail",
      url: "mailto:me@nawaaz.dev",
      image: "/img/mail.svg",
    },
    {
      title: "X",
      url: "https://x.com/nawaazdev",
      image: "/img/x.svg",
    },
    {
      title: "Medium",
      url: "https://medium.com/@nawaazkortiwala",
      image: "/img/medium.svg",
    },
    {
      title: "UpWork",
      url: "https://www.upwork.com/freelancers/~01f2d755c14b40b70a",
      image: "/img/upwork.svg",
      style: {
        width: "3rem",
      },
    },
    // {
    //   title: "Fiverr",
    //   url: "https://fiverr.com",
    //   image: "/img/fiverr.svg",
    //   style: {
    //     width: "3rem",
    //   },
    // },
    {
      title: "GitHub",
      url: "https://github.com/nawaazkortiwala",
      image: "/img/github.svg",
    },
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/nawaaz-kortiwala/",
      image: "/img/linkedin.svg",
    },
  ];

  return (
    <div className="flex flex-col gap-2 lg:py-4 px-4">
      <div className="flex gap-6 flex-wrap lg:grid lg:grid-cols-3 lg:gap-x-4 lg:gap-y-8 lg:justify-center">
        {connects.map((connect, index) => (
          <a
            key={connect.title}
            href={connect.url}
            target="_blank"
            rel="noreferrer"
            className={clsx(
              "underline text-sm flex",
              (() => {
                const mod = (index + 1) % 3;
                if (mod === 1) return "lg:justify-start";
                else if (mod === 2) return "lg:justify-center";
                else return "lg:justify-end";
              })()
            )}
          >
            <SVG
              src={connect.image}
              alt={connect.title}
              className="w-6 h-6"
              style={connect.style}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ConnectsCore;
