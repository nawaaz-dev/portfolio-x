import { FC } from "react";

const Connects: FC = () => {
  const connects = [
    {
      title: "X",
      url: "https://x.com",
    },
    {
      title: "Medium",
      url: "https://medium.com",
    },
    {
      title: "UpWork",
      url: "https://upwork.com",
    },
    {
      title: "Fiverr",
      url: "https://fiverr.com",
    },
    {
      title: "GitHub",
      url: "https://github.comm",
    },
    {
      title: "LinkedIn",
      url: "https://linkedin.com",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {connects.map((connect) => (
        <a
          key={connect.title}
          href={connect.url}
          target="_blank"
          rel="noreferrer"
          className="underline text-sm"
        >
          {connect.title}
        </a>
      ))}
    </div>
  );
};

export default Connects;
