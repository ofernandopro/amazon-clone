import React from 'react';
import './styles.css';
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <nav className="header">
      {/* Logo on the left */}
      <Link to="/">
        <img
          className="header_logo"
          src="https://dreifir.is/wp-content/uploads/2018/03/amazon.png"
          alt="Amazon"
        />
      </Link>

      {/* Search Box */}
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>

      {/* 3 links */}

      <div className="header_nav">
        {/* 1st link */}
        <Link to="/login" className="header_link">
          <div className="header_option">
            <span>Hello Fernando</span>
            <span>Sign In</span>
          </div>
        </Link>
        {/* 2nd link */}

        {/* 3rd link */}

        {/* 4th link */}
      </div>

    </nav>
  );
}

export default Header;
