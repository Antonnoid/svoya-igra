import { User } from '../type';

export type State = {
    user:User | {};
    error:string;
};

export type Message = {
  message:string;
  id:number;
};
