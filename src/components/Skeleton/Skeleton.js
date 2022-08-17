import React from "react";
import ContentLoader from "react-content-loader";

const BlogItem = (props) => (
  <ContentLoader
    viewBox="0 0 345 435"
    speed={2}
    height={435}
    width={345}
    {...props}
  >
    <rect x="3" y="3" rx="10" ry="10" width="435" height="180" />
    <rect x="4" y="200" rx="0" ry="0" width="289" height="20" />
    <rect x="4" y="230" rx="0" ry="0" width="239" height="2" />
    <rect x="4" y="240" rx="0" ry="0" width="320" height="110" />
    <circle cx="8" cy="365" r="5" />
    <rect x="18" y="360" rx="0" ry="0" width="70" height="10" />
    <circle cx="110" cy="365" r="5" />
    <rect x="120" y="360" rx="0" ry="0" width="70" height="10" />
  </ContentLoader>
);

BlogItem.metadata = {
  name: "RJavlonbek",
  github: "RJavlonbek",
  description: "Blog item",
  filename: "BlogItem",
};

export default BlogItem;
