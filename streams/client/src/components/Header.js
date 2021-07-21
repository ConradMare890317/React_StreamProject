import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div class="ui inverted segment">
    <div className="ui inverted secondary pointing menu">
      <Link to="/" className="item">
        Streamer
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All Streams
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Header;
