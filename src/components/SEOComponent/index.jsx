import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";

const SEOComponent = ({ component: Component, title, ...rest }) => (
  <>
    <Helmet>
      <title>{`React Skeleton Application | ${title}`}</title>
    </Helmet>
    <Component {...rest} />
  </>
);
SEOComponent.propTypes = {
  component: PropTypes.any,
  title: PropTypes.string,
  rest: PropTypes.any,
};

export default SEOComponent;
