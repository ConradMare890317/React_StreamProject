import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
  return (
    <div className="ui inverted segment">
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        <h4 class="ui grey inverted header">Streamer</h4>
      </Link>
      <br/>
        <GoogleAuth />
      <br/>

        <div className="right menu">
        <Link to="/" className="item">
          <h4 class="ui grey inverted header">All Streams</h4>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Header;
