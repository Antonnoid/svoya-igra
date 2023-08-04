import { Registr, Login, User } from './type';

export const registrFetch = async (obj: Registr): Promise<User> => {
  const res = await fetch('/api/auth/reg', {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(obj),
  });
  const data = await res.json();
  return data;
};

export const loginFetch = async (obj: Login): Promise<User> => {
  const res = await fetch('/api/auth/log', {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(obj),
  });
  const data = await res.json();
  return data;
};

export const logoutFetch = async (): Promise<string> => {
  const res = await fetch('/api/auth/logout', {
    method: 'post',
  });
  const data = await res.json();
  console.log(data);
  return data;
};

export const verificationFetch = async (): Promise<User> => {
  const res = await fetch('/api/auth/verification');
  const data = await res.json();
  return data;
};
