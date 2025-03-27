import PostCard, { PostCardProps } from "@/page/components/post-card/post-card";
import Image from "next/image";
import { FC, MouseEvent, useState, useEffect } from "react";

export type ProjectsTabProps = Omit<PostCardProps, "description"> & {
  position: string;
  description: string;
  techStack: string[];
  responsibilities: string[];
  images: string[];
  link: string;
};

const ProjectsTab: FC<ProjectsTabProps> = ({
  image,
  title,
  time,
  position,
  description,
  techStack,
  responsibilities,
  images,
  link,
  ...rest
}) => {
  const [viewImage, setViewImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const handleImageClick = (image: string, index: number) => () => {
    setViewImage(image);
    setCurrentImageIndex(index);
  };

  const handleViewerClick = (e: MouseEvent<HTMLDivElement>) => {
    // Close the viewer when clicked outside the image
    if (e.target !== e.currentTarget) return;
    setViewImage(null);
  };

  const handleNextImage = () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
    setViewImage(images[nextIndex]);
  };

  const handlePrevImage = () => {
    const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(prevIndex);
    setViewImage(images[prevIndex]);
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
    if (!images.length) return null;

    const visibleScreenshots = images.slice(0, 2);
    const extraCount = images.length - 2;

    return (
      <div
        className="grid gap-2 h-24"
        style={{
          gridTemplateColumns: "repeat(3, minmax(0, calc(33.33% - 1rem)))",
          maxWidth: "100%",
        }}
      >
        {visibleScreenshots.map((screenshot, index) => (
          <button
            key={screenshot}
            onClick={handleImageClick(screenshot, index)}
            className="position relative"
          >
            <Image
              src={screenshot}
              alt={title}
              layout="fill" // Makes the image fill the container
              objectFit="cover" // Ensures the image covers the container
              className="rounded-md"
            />
          </button>
        ))}
        {extraCount > 0 && (
          <button
            onClick={handleImageClick(images[2], 2)}
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
          <div className="flex flex-col gap-2">
            <h3 className="font-bold">Description</h3>
            <p>{description}</p>
          </div>
          <div className="flex flex-col mt-2">
            <h3 className="font-bold">Position</h3>
            <p>🧑‍💻 {position}</p>
          </div>
          <div className="flex flex-col mt-2">
            <h3 className="font-bold">Tech Stack</h3>
            <ul className="[&>li]:py-1 [&>li]:ml-3 list-inside text-sm grid grid-cols-3">
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
              className="text-primary underline"
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
              className="fixed inset-0 z-50 flex flex-col gap-6 items-center justify-center bg-black bg-opacity-50 h-full w-full"
              onClick={handleViewerClick}
            >
              <div className="relative flex gap-4 w-full justify-center items-center">
                {images.length > 1 && (
                  <button
                    className="hidden lg:block"
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrevImage();
                    }}
                  >
                    <Image
                      src="/img/left.svg"
                      alt="Previous"
                      width={24}
                      height={24}
                    />
                  </button>
                )}
                <Image
                  src={viewImage}
                  alt={title}
                  sizes="100vw"
                  style={{
                    objectFit: "contain",
                  }}
                  className="h-auto max-h-[500px] w-[80%] lg:[90%]"
                  width={500}
                  height={300}
                />

                {images.length > 1 && (
                  <button
                    className="hidden lg:block"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNextImage();
                    }}
                  >
                    <Image
                      src="/img/right.svg"
                      alt="Next"
                      width={24}
                      height={24}
                    />
                  </button>
                )}
              </div>
              {images.length > 1 && (
                <div className="flex gap-8 lg:hidden">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrevImage();
                    }}
                  >
                    <Image
                      src="/img/left.svg"
                      alt="Previous"
                      width={24}
                      height={24}
                    />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNextImage();
                    }}
                  >
                    <Image
                      src="/img/right.svg"
                      alt="Next"
                      width={24}
                      height={24}
                    />
                  </button>
                </div>
              )}
              {/* <div
                className="flex justify-center items-center"
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
              </div> */}
            </div>
          )}
        </div>
      }
    />
  );
};

export default ProjectsTab;
