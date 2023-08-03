import { Message } from './type';
import { User } from '../type';

export type Action =
  { type:'auth/reg', payload:User | Message }
| { type: 'auth/verification'; payload: User | Message };
