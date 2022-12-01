import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="container">
          <div>
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/">
                  Home
                  <span class="sr-only"></span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/Rocky" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/Rocky">
                  Rocky Mountain National Park
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/Yellow" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/Yellow">
                  Yellowstone National Park
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/Glacier" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/Glacier">
                  Glacier National Park
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);
