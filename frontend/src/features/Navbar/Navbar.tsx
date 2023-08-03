import React from 'react';
import { Link } from 'react-router-dom';

function Navbar():JSX.Element {
  return (
  <nav>
  <div className="nav-wrapper">
    <a href="#" className="brand-logo">Logo</a>
    <ul id="nav-mobile" className="right hide-on-med-and-down">
      <li><Link to="/">Регистрация</Link></li>
      <li><Link to="/questions">Вопросы</Link></li>
    </ul>
  </div>
  </nav>
  );
}

export default Navbar;
