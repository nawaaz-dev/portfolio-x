import { FC, ReactNode } from "react";

const PersonalContent: FC = () => {
  return (
    <div className="flex flex-col w-full relative">
      <div className="">
        <img
          src="https://pbs.twimg.com/profile_banners/1181454180554174464/1738850484/1500x500"
          alt=""
          style={{
            width: "100%",
          }}
        />
      </div>
      <div className="flex flex-col gap-4 p-4">
        <div className="flex justify-between h-[70px]">
          <div className="w-[25%] min-w-[48px] mt-[-14%]">
            <img
              src="https://pbs.twimg.com/profile_images/1666483033141280768/akStVl81_400x400.jpg"
              alt=""
              style={{
                width: "100%",
                borderRadius: "50%",
              }}
            />
          </div>
          <div>
            <button className="border px-2 py-1 rounded-md">Hire me</button>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-md font-extrabold">Nawaaz Kortiwala</h2>
          <p className="text-sm">
            Helping startups build AI-powered web apps | Full-Stack Dev | Open
            for projects
          </p>
          <p className="text-gray-500">
            {[
              "Software developer/Programmer/Software engineer",
              "Indian",
              "nawaaz.dev",
              "Born",
              "November 24, 1993",
              "Joined October 2019",
              "Verified phone number",
            ].reduce<ReactNode>(
              (acc, curr) => (
                <>
                  {acc && (
                    <>
                      {acc}
                      <span className="px-[0.25rem]">·</span>{" "}
                    </>
                  )}
                  {curr}
                </>
              ),
              null
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonalContent;
