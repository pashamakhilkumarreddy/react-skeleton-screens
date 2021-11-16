import PropTypes from "prop-types";
import "./skeleton.css";

const SkeletonElement = ({ type, as: Tag = 'div' }) => (
  <Tag className={`skeleton ${type}`}></Tag>
);

SkeletonElement.propTypes = {
  type: PropTypes.string,
};

export default SkeletonElement;
