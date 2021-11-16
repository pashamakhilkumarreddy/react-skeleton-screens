import PropTypes from "prop-types";
import SkeletonElement from ".";
import "./skeleton.css";

const SkeletonProfile = () => (
  <div className="skeleton-wrapper column is-12-mobile is-6-tablet is-half-desktop is-6-widescreen is-4-fullhd">
    <div className="card">
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <SkeletonElement type="thumbnail" />
            </figure>
          </div>
          <div className="media-content">
            <div className="title is-4">
              <SkeletonElement type="title" />
            </div>
            <SkeletonElement type="text" />
          </div>
        </div>
        <div className="content">
          <SkeletonElement as="p" type="text" />
          <SkeletonElement as="p" type="text" />
        </div>
      </div>
    </div>
  </div>
);

SkeletonProfile.propTypes = {
  type: PropTypes.string,
};

export default SkeletonProfile;
