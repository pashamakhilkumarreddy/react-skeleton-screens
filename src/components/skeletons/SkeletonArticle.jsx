import PropTypes from "prop-types";
import SkeletonElement from ".";
import "./skeleton.css";

const SkeletonArticle = () => (
  <div className="skeleton-wrapper column is-12-mobile is-12-desktop is-12-tablet is-12-widescreen is-12-fullhd">
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
    </div>
  </div>
);

SkeletonArticle.propTypes = {
  type: PropTypes.string,
};

export default SkeletonArticle;
