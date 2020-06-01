import React, { Component } from "react";
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a
            className="navbar-brand"
            href="#"
          >
            { 
              this.props.display ? `BookStore Ecommerce | ${this.props.display}` : `BookStore Ecommerce`
            }
           
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarText"
          >
            <ul className="nav navbar-nav navbar-right">
              <li className="nav-item active">
                <Link
                  className="nav-link"
                  to="/"
                >
                  Home{" "}
                  <span className="sr-only">
                    (current)
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/orders"
                >
                  My orders
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/cart"
                >
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
