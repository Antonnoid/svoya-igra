import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as api from './api';
import { RootState } from '../../store/store';

function LoginForm(): JSX.Element {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { error } = useSelector((store: RootState) => store.auth);

  const login = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    api
      .loginFetch({ name, password })
      .then((data) => dispatch({ type: 'auth/reg', payload: data }));
  };
  return (
    <div>
      <form onSubmit={login}>
        <input
          name="name"
          placeholder="name"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <input
          name="password"
          placeholder="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Войти</button>
      </form>
      <div>{error}</div>
    </div>
  );
}

export default LoginForm;
