import React from "react";

import { StyledImage } from "./style";
import { ImageProps } from "./type";

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  layout = "responsive",
  objectFit = "cover",
  loading = "lazy",
  className,
  ...props
}) => {
  return (
    <StyledImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      layout={layout}
      objectFit={objectFit}
      loading={loading}
      className={className}
      {...props}
    />
  );
};

export default Image;
