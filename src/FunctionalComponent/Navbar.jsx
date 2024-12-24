import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  let [search, setSearch] = useState("");

  function postSearch(e) {
    e.preventDefault();
    props.changeSearch(search);
    setSearch("");
  }

  return (
    <nav className="navbar navbar-expand-lg bg-secondary sticky-top">
      <div className="container-fluid">
        <NavLink
          className="navbar-brand "
          to="/"
          onClick={() => props.changeSearch("")}
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
                onClick={() => props.changeSearch("")}
              >
                All
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " aria-current="page" to="/politics">
                Politics
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link "
                aria-current="page"
                to="/crime"
                onClick={() => props.changeSearch("")}
              >
                Crime
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link "
                aria-current="page"
                to="/education"
                onClick={() => props.changeSearch("")}
              >
                Education
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link "
                aria-current="page"
                to="/entertainment"
                onClick={() => props.changeSearch("")}
              >
                Entertainment
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link "
                aria-current="page"
                to="/science"
                onClick={() => props.changeSearch("")}
              >
                Science
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link "
                aria-current="page"
                to="/technology"
                onClick={() => props.changeSearch("")}
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
                    onClick={() => props.changeSearch("")}
                  >
                    Sports
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/cricket"
                    onClick={() => props.changeSearch("")}
                  >
                    Cricket
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/olympics"
                    onClick={() => props.changeSearch("")}
                  >
                    Olympics
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/economics"
                    onClick={() => props.changeSearch("")}
                  >
                    Economics
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/health"
                    onClick={() => props.changeSearch("")}
                  >
                    Health
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/wealth"
                    onClick={() => props.changeSearch("")}
                  >
                    Wealth
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/world"
                    onClick={() => props.changeSearch("")}
                  >
                    World
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/jokes"
                    onClick={() => props.changeSearch("")}
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
                    onClick={() => props.changeLanguage("hi")}
                    className="dropdown-item"
                  >
                    Hindi
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => props.changeLanguage("en")}
                    className="dropdown-item"
                  >
                    English
                  </button>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search" onSubmit={postSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
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