import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "./styles";

const PageHeader = () => {
  const [display, setDisplay] = useState(false);
  return (
    <Header className="header">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <img src="" alt="Logo" decoding="async" loading="lazy" />
          </Link>

          <span
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={() => setDisplay((display) => !display)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </span>
        </div>

        <div className="navbar-menu" id="main-navbar">
          <div className="navbar-start">
            <Link to="/" className="navbar-item">
              Home
            </Link>
          </div>
          <div className="navbar-end">
            <Link className="navbar-item" to="/articles">Articles</Link>
          </div>
        </div>
      </nav>
    </Header>
  );
};

export default PageHeader;
