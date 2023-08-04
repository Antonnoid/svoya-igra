import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as api from './api';
import { RootState } from '../../store/store';

function Registr():JSX.Element {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();
    const { error } = useSelector((store:RootState) => store.auth);

    const registr = (e:React.FormEvent<HTMLFormElement>):void => {
       e.preventDefault();
      api.registrFetch({ name, password, email })
      .then((data) => dispatch({ type: 'auth/reg', payload: data }));
    };
  return (
    <div className='registration'>
        <form onSubmit={registr}>
            <input name="name" placeholder="name" required onChange={(e) => setName(e.target.value)} />
            <input name="password" placeholder="password" required onChange={(e) => setPassword(e.target.value)} />
            <input name="email" placeholder="email" required onChange={(e) => setEmail(e.target.value)} />
            <button type="submit">Регистрация</button>
        </form>
        <div>{error}</div>
    </div>
  );
}

export default Registr;
