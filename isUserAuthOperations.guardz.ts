import type { UserAuthOperations } from './payload-types';
import type { TypeGuardFn } from 'guardz';
import { isString, isType } from 'guardz';

export const isUserAuthOperations: TypeGuardFn<UserAuthOperations> =
  isType<UserAuthOperations>({
    forgotPassword: isType<{
      email: string;
      password: string;
    }>({ email: isString, password: isString }),
    login: isType<{
      email: string;
      password: string;
    }>({ email: isString, password: isString }),
    registerFirstUser: isType<{
      email: string;
      password: string;
    }>({ email: isString, password: isString }),
    unlock: isType<{
      email: string;
      password: string;
    }>({ email: isString, password: isString }),
  });
