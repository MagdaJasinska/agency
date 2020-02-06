import React from 'react';
import './header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="bgc_image">
        <div className="containter">

          <div className="intro_text">welcome to our studio</div>
          <div className="lead_in">it`s nice to meet you</div>
          <a href="/" className="btn_intro">Tell me more</a>
        </div>
      </header>
    )
      ;
  }
}

export default Header;