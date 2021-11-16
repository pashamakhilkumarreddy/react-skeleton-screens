import PropTypes from "prop-types";

const User = ({ firstname, lastname, username, email, phone }) => (
  <div className="column is-12-mobile is-6-tablet is-half-desktop is-6-widescreen is-4-fullhd">
    <div className="card">
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="imageis48x48">
              <img
                src="https://bulma.io/images/placeholders/96x96.png"
                alt={`${firstname} ${lastname}`}
              />
            </figure>
          </div>
          <div className="media-content">
            <div className="title is-4">
              {firstname} {lastname}
            </div>
            <p className="subtitle is-6">{username}</p>
          </div>
        </div>
        <div className="content">
          <p>{email}</p>
          <a href={`tel: +${phone}`}>{phone}</a>
        </div>
      </div>
    </div>
  </div>
);

User.propTypes = {
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  username: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
};

export default User;
