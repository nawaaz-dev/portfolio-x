import PostCard, { PostCardProps } from "@/page/components/post-card/post-card";
import { FC, MouseEvent, useState, useEffect } from "react";

export type ProjectsTabProps = Omit<PostCardProps, "description"> & {
  screenshots: string[];
  techStack: string[];
  duration: string;
  role: string;
  responsibilities: string[];
  link?: string;
};

const ProjectsTab: FC<ProjectsTabProps> = ({
  title,
  time,
  screenshots,
  techStack,
  duration,
  role,
  responsibilities,
  link,
  image,
  ...rest
}) => {
  const [viewImage, setViewImage] = useState<string | null>(null);
  const [zoom, setZoom] = useState<number>(1);
  const [sliderOpacity, setSliderOpacity] = useState<number>(1);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const handleImageClick = (image: string, index: number) => () => {
    setViewImage(image);
    setCurrentImageIndex(index);
    setZoom(1); // Reset zoom when a new image is clicked
  };

  const handleViewerClick = (e: MouseEvent<HTMLDivElement>) => {
    // Close the viewer when clicked outside the image
    if (e.target !== e.currentTarget) return;
    setViewImage(null);
  };

  const handleZoomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setZoom(parseFloat(e.target.value));
  };

  const handleMouseEnter = () => {
    setSliderOpacity(1);
  };

  const handleMouseLeave = () => {
    setSliderOpacity(0.5);
  };

  const handleNextImage = () => {
    const nextIndex = (currentImageIndex + 1) % screenshots.length;
    setCurrentImageIndex(nextIndex);
    setViewImage(screenshots[nextIndex]);
  };

  const handlePrevImage = () => {
    const prevIndex =
      (currentImageIndex - 1 + screenshots.length) % screenshots.length;
    setCurrentImageIndex(prevIndex);
    setViewImage(screenshots[prevIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (viewImage) {
        if (e.key === "ArrowRight") {
          handleNextImage();
        } else if (e.key === "ArrowLeft") {
          handlePrevImage();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [viewImage, currentImageIndex]);

  const renderScreenshots = () => {
    const visibleScreenshots = screenshots.slice(0, 2);
    const extraCount = screenshots.length - 2;

    return (
      <div
        className="grid gap-2"
        style={{
          gridTemplateColumns: "repeat(3, minmax(0, calc(33.33% - 1rem)))",
          maxWidth: "100%",
        }}
      >
        {visibleScreenshots.map((screenshot, index) => (
          <button key={index} onClick={handleImageClick(screenshot, index)}>
            <img
              src={screenshot}
              alt={title}
              className="w-full object-cover rounded-md"
            />
          </button>
        ))}
        {extraCount > 0 && (
          <button
            onClick={handleImageClick(screenshots[2], 2)}
            className="w-full flex items-center justify-center bg-gray-200 text-text-secondary rounded-md"
          >
            +{extraCount} images
          </button>
        )}
      </div>
    );
  };

  return (
    <PostCard
      {...rest}
      image={image}
      title={title}
      time={time}
      description={
        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-2">
            <div className="flex gap-2 text-sm">
              <h3 className="font-bold">🧑‍💻 Role</h3>
              <p>{role}</p>
            </div>
            <div className="flex gap-2 text-sm">
              <h3 className="font-bold">⏳ Duration</h3>
              <p>{duration}</p>
            </div>
          </div>
          <div className="flex flex-col mt-2">
            <h3 className="font-bold">Tech Stack</h3>
            <ul className="[&>li]:py-1 [&>li]:ml-3 list-inside text-sm grid grid-cols-2">
              {techStack.map((item, index) => (
                <li key={index}>
                  <span className="relative -left-2">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col mt-2">
            <h3 className="font-bold">Responsibilities</h3>
            <ul className="[&>li]:py-1 [&>li]:ml-3 list-inside text-sm">
              {responsibilities.map((role, index) => (
                <li key={index}>
                  <span className="relative -left-2">{role}</span>
                </li>
              ))}
            </ul>
          </div>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:underline"
            >
              View Project
            </a>
          )}
          {/* Screenshots (click to open a viewer) */}
          {renderScreenshots()}
          {/* Image Viewer */}
          {/* Allow zooming in and out */}
          {viewImage && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
              onClick={handleViewerClick}
            >
              <div className="relative">
                <img
                  src={viewImage}
                  alt={title}
                  className="max-w-full max-h-full"
                  style={{ transform: `scale(${zoom})` }}
                />
                <div
                  className="absolute -bottom-8 left-2 right-2 flex justify-center"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  style={{ opacity: sliderOpacity }}
                >
                  <input
                    type="range"
                    min="1"
                    max="3"
                    step="0.1"
                    value={zoom}
                    onChange={handleZoomChange}
                    className="w-full"
                  />
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevImage();
                  }}
                  className="absolute -left-8 top-1/2 transform -translate-y-1/2 bg-white text-text-secondary p-1 rounded"
                >
                  &lt;
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNextImage();
                  }}
                  className="absolute -right-8 top-1/2 transform -translate-y-1/2 bg-white text-text-secondary p-1 rounded"
                >
                  &gt;
                </button>
              </div>
            </div>
          )}
        </div>
      }
    />
  );
};

export default ProjectsTab;
