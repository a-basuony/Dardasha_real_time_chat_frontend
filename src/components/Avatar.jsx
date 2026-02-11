import { UserIcon } from "lucide-react";
import { useState } from "react";

const Avatar = ({
  src,
  alt = "User Avatar",
  size = "w-10",
  className = "",
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const handleImageError = () => {
    setImageError(true);
    setImageLoading(false);
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  // Fallback if no src provided or image fails to load
  const showFallback = !src || imageError;

  return (
    <div className="avatar">
      <div className={`${size} rounded-full ${className}`}>
        {showFallback ? (
          <div className="bg-base-300 flex items-center justify-center h-full w-full">
            <UserIcon className="h-1/2 w-1/2 text-base-content opacity-40" />
          </div>
        ) : (
          <>
            {/* Loading skeleton - shows while image is loading */}
            {imageLoading && (
              <div className="absolute inset-0 bg-base-300 animate-pulse rounded-full" />
            )}

            {/* Actual image with smooth fade-in */}
            <img
              src={src}
              alt={alt}
              onError={handleImageError}
              onLoad={handleImageLoad}
              className={`transition-opacity duration-300 ${
                imageLoading ? "opacity-0" : "opacity-100"
              }`}
              loading="eager"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Avatar;
