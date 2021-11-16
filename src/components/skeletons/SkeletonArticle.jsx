import PropTypes from "prop-types";
import SkeletonElement from ".";
import Shimmer from "./Shimmer";
import "./skeleton.css";

const SkeletonArticle = ({ theme = "light" }) => (
  <div
    className={`skeleton-wrapper ${theme} column is-12-mobile is-12-desktop is-12-tablet is-12-widescreen is-12-fullhd`}
  >
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <SkeletonElement type="thumbnail" />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <SkeletonElement type="title" />
            <SkeletonElement type="text" />
          </div>
        </div>
      </article>
      <Shimmer />
    </div>
  </div>
);

SkeletonArticle.propTypes = {
  theme: PropTypes.oneOf(["light", "dark"]),
  type: PropTypes.string,
};

export default SkeletonArticle;
