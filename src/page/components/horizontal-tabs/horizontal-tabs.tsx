import { FC, useState, useRef } from "react";
import { HorizontalTabsProps } from "./horizontal-tabs.types";
import clsx from "clsx";
import "./horizontal-tabs.css";

const HorizontalTabs: FC<HorizontalTabsProps> = ({
  tabs,
  defaultActiveIndex = 0,
  onTabChange,
}) => {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
  const containerRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleTabChange = (index: number) => {
    setActiveIndex(index);
    onTabChange?.(index);
    tabRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
    });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - (containerRef.current?.offsetLeft || 0);
    scrollLeft.current = containerRef.current?.scrollLeft || 0;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - (containerRef.current?.offsetLeft || 0);
    const walk = (x - startX.current) * 2; // scroll-fast
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft.current - walk;
    }
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col w-full relative">
        {/* <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-1"
          onClick={scrollLeftFunc}
        >
          &lt;
        </button> */}
        <div
          ref={containerRef}
          className="flex w-full overflow-x-auto horizontal-tabs--scrollbar"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {tabs.map((tab, index) => {
            const isActive = index === activeIndex;
            const commonClasses =
              "flex px-4 py-2 flex-grow flex-shrink-0 justify-center cursor-pointer";
            const activityWiseClassNames: Record<
              string,
              (index: number) => string
            > = {
              true: (index: number) =>
                "border-b border-primary font-bold" +
                (index === 0 ? " border-l-0" : ""),
              false: () => "",
            };

            return (
              <button
                key={tab.title}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                ref={(el) => (tabRefs.current[index] = el) as any}
                className={clsx(
                  commonClasses,
                  activityWiseClassNames[isActive.toString()](index)
                )}
                onClick={() => handleTabChange(index)}
                style={{
                  fontWeight: index === activeIndex ? "bold" : "normal",
                }}
              >
                {tab.title}
              </button>
            );
          })}
        </div>
        {/* <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-1"
          onClick={scrollRightFunc}
        >
          &gt;
        </button> */}
      </div>
      <div className="pt-3"></div>
      <div className="flex flex-col gap-4">{tabs[activeIndex].content}</div>
    </div>
  );
};

export default HorizontalTabs;
