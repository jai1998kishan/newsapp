import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
    };
  }
  postSearch(e) {
    e.preventDefault();
    this.props.changeSearch(this.state.search);
    this.setState({ search: "" });
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-secondary sticky-top">
        <div className="container-fluid">
          <NavLink
            className="navbar-brand "
            to="/"
            onClick={() => this.props.changeSearch("")}
          >
            NewsApp
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link "
                  aria-current="page"
                  to="/all"
                  onClick={() => this.props.changeSearch("")}
                >
                  All
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link "
                  aria-current="page"
                  to="/politics"
                >
                  Politics
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link "
                  aria-current="page"
                  to="/crime"
                  onClick={() => this.props.changeSearch("")}
                >
                  Crime
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link "
                  aria-current="page"
                  to="/education"
                  onClick={() => this.props.changeSearch("")}
                >
                  Education
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link "
                  aria-current="page"
                  to="/entertainment"
                  onClick={() => this.props.changeSearch("")}
                >
                  Entertainment
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link "
                  aria-current="page"
                  to="/science"
                  onClick={() => this.props.changeSearch("")}
                >
                  Science
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link "
                  aria-current="page"
                  to="/technology"
                  onClick={() => this.props.changeSearch("")}
                >
                  Technology
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Others
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/sports"
                      onClick={() => this.props.changeSearch("")}
                    >
                      Sports
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/cricket"
                      onClick={() => this.props.changeSearch("")}
                    >
                      Cricket
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/olympics"
                      onClick={() => this.props.changeSearch("")}
                    >
                      Olympics
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/economics"
                      onClick={() => this.props.changeSearch("")}
                    >
                      Economics
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/health"
                      onClick={() => this.props.changeSearch("")}
                    >
                      Health
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/wealth"
                      onClick={() => this.props.changeSearch("")}
                    >
                      Wealth
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/world"
                      onClick={() => this.props.changeSearch("")}
                    >
                      World
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/jokes"
                      onClick={() => this.props.changeSearch("")}
                    >
                      Jokes
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Language
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <button
                      onClick={() => this.props.changeLanguage("hi")}
                      className="dropdown-item"
                    >
                      Hindi
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => this.props.changeLanguage("en")}
                      className="dropdown-item"
                    >
                      English
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
            <form
              className="d-flex"
              role="search"
              onSubmit={(e) => this.postSearch(e)}
            >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                name="search"
                value={this.state.search}
                onChange={(e) => this.setState({ search: e.target.value })}
              />
              <button
                className="btn btn-light  btn-outline-success"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}
