import { memo } from "react";
import "./skeleton.css";

const Shimmer = () => (
  <div className="shimmer-wrapper">
    <div className="shimmer"></div>
  </div>
);

export default memo(Shimmer);
