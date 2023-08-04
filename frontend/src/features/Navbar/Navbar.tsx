import React from 'react';
import { Link } from 'react-router-dom';

function Navbar():JSX.Element {
  return (
  <nav>
  <div className="nav-wrapper">
    <a href="#" className="brand-logo">👨‍🎓 Своя игра</a>
    <ul id="nav-mobile" className="right hide-on-med-and-down">
      <li><Link to="/">Главная</Link></li>
      <li><Link to="/registr">Регистрация</Link></li>
      <li><Link to="/scores">Рейтинг</Link></li>
    </ul>
  </div>
  </nav>
  );
}

export default Navbar;
