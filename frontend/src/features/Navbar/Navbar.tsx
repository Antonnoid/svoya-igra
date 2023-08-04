import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as api from '../Auth/api';
// import { RootState } from '../../store/store';

function Navbar(): JSX.Element {
  const dispatch = useDispatch();
  // const { error } = useSelector((store: RootState) => store.auth);
  const logout = (): void => {
    api
      .logoutFetch()
      .then((data) => dispatch({ type: 'auth/logout', payload: data }));
  };
  return (
    <nav>
      <div className="nav-wrapper">
      <img className='roja' src='https://img.icons8.com/plasticine/400w/the-jigsaw-killer.png' alt='...'/>
        <a href="#" className="brand-logo">
           Я хочу сыграть с тобой в игру
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/registr">Регистрация</Link>
          </li>
          <li>
            <Link to="/login">Войти</Link>
          </li>
          <li>
            <Link to="/" onClick={logout}>
              Выйти
            </Link>
          </li>
          <li>
            <Link to="/scores">Рейтинг</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
