import { FC, ReactNode, useState } from "react";
import SVG from "../components/svg/svg";

const PersonalContent: FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const options = [
    {
      label: "Schedule a call",
      onClick: handleCallClick,
    },
    {
      label: "Quote via mail",
      onClick: handleMailClick,
    },
  ];

  function handleCallClick() {
    window.open("https://calendly.com/me-nawaaz/30min", "_blank");
    setIsDropdownOpen(false);
  }

  function handleMailClick() {
    const subject = encodeURIComponent("Request for a Quote");
    const body = encodeURIComponent(
      "Hi Nawaaz,\n\nI would like to request a quote for your services. Please let me know the details.\n\nBest regards,\n[Your Name]\n(Sent via nawaaz.dev)"
    );
    const mailtoLink = `mailto:example@example.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;

    setIsDropdownOpen(false);
  }

  const handleButtonClick = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-col w-full relative">
      <div className="">
        <img
          src="https://res.cloudinary.com/dbjar1kvg/image/upload/v1743065340/1500x500_vlx3t7.jpg"
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
              src="https://res.cloudinary.com/dbjar1kvg/image/upload/v1743065357/akStVl81_400x400_mqfhct.jpg"
              alt=""
              style={{
                width: "100%",
                borderRadius: "50%",
              }}
            />
          </div>
          <div className="relative">
            {/* Hire Me Button */}
            <button
              className="bg-primary text-background px-4 py-1 rounded-full"
              onClick={handleButtonClick}
            >
              Hire Me
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-background border border-gray-300 rounded-md shadow-lg">
                <ul className="text-sm">
                  {options.map((option) => (
                    <li key={option.label}>
                      <button
                        className="px-4 py-2 hover:bg-primary cursor-pointer whitespace-nowrap w-full text-left"
                        onClick={option.onClick}
                      >
                        {option.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-extrabold flex gap-2 items-center">
            Nawaaz Kortiwala
            <SVG
              src="/img/verified.svg"
              alt="Verified"
              className="w-5 h-5"
              isActive
            />
          </h2>
          <p className="text-md">
            Helping startups build AI-powered web apps | Full-Stack Dev | Open
            for projects
          </p>
          <p className="text-text-secondary">
            {[
              "Full Stack Developer",
              "Frontend Expert",
              "MERN Stacker",
              "AI-Powered Web Apps",
              "UX-Driven",
              "Remote Ready",
              "Startup Friendly",
              "Open for Freelance",
              "Tech Minimalist",
              "Clean Code Advocate",
              "Indian",
              "Motorcyclist",
              "PC Gamer",
              "Photographer",
              "Traveler",
              "Sagitarius",
            ].reduce<ReactNode>(
              (acc, curr) => (
                <>
                  {acc && (
                    <>
                      {acc}
                      <span className="px-[0.25rem]">·</span>{" "}
                    </>
                  )}
                  <span className="hover:text-primary transition-all">
                    {curr}
                  </span>
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
