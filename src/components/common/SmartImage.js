import React from "react";
import PropTypes from "prop-types";

function SmartImage({
  src,
  fallbackSrc = "/profile.webp",
  alt,
  className,
  style,
  width,
  height,
  loading = "lazy",
  decoding = "async",
  fetchPriority = "auto",
}) {
  const [currentSrc, setCurrentSrc] = React.useState(src);
  const fallback = fallbackSrc || "/favicon.webp";

  return (
    <picture>
      <source srcSet={src} type="image/webp" />
      <img
        src={currentSrc}
        alt={alt}
        className={className}
        style={style}
        width={width}
        height={height}
        loading={loading}
        decoding={decoding}
        fetchPriority={fetchPriority}
        onError={() => setCurrentSrc(fallback)}
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
