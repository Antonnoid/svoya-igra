import { Registr, User } from './type';

export const registrFetch = async (obj:Registr):Promise<User> => {
const res = await fetch('/api/auth/reg', {
    method: 'post',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(obj)
});
const data = await res.json();
return data;
};
export const verificationFetch = async ():Promise<User> => {
    const res = await fetch('/api/auth/verification');
    const data = await res.json();
    return data;
    };
