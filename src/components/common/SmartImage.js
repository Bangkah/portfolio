import React from "react";
import PropTypes from "prop-types";

function SmartImage({
  src,
  fallbackSrc = "/profile.png",
  alt,
  className,
  style,
  width,
  height,
  loading = "lazy",
  decoding = "async",
  fetchPriority = "auto",
}) {
  const initialSrc = fallbackSrc || src;
  const [currentFallback, setCurrentFallback] = React.useState(initialSrc);

  return (
    <picture>
      <source srcSet={src} type="image/webp" />
      <img
        src={currentFallback}
        alt={alt}
        className={className}
        style={style}
        width={width}
        height={height}
        loading={loading}
        decoding={decoding}
        fetchPriority={fetchPriority}
        onError={() => setCurrentFallback("/favicon.png")}
      />
    </picture>
  );
}

SmartImage.propTypes = {
  src: PropTypes.string.isRequired,
  fallbackSrc: PropTypes.string,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number,
  loading: PropTypes.oneOf(["lazy", "eager"]),
  decoding: PropTypes.oneOf(["async", "auto", "sync"]),
  fetchPriority: PropTypes.oneOf(["high", "low", "auto"]),
};

export default SmartImage;
