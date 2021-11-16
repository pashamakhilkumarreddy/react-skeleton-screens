import PropTypes from "prop-types";

const Article = ({ title, body }) => {
  return (
    <div className="column is-12-mobile is-12-desktop is-12-tablet is-12-widescreen is-12-fullhd">
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img
                src="https://bulma.io/images/placeholders/128x128.png"
                alt={title}
              />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <h3 className="h3">{title}</h3>
              <p>{body}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

Article.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
};

export default Article;
