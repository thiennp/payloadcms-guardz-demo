import type {
  Category,
  Post,
  User,
  UserAuthOperations,
  Config,
} from './payload-types';
import type { TypeGuardFn } from 'guardz';
import { isEqualTo, isIntersectionOf, isOneOf, isType } from 'guardz';
import { isCategory } from './isCategory.guardz';
import { isPost } from './isPost.guardz';
import { isUser } from './isUser.guardz';
import { isUserAuthOperations } from './isUserAuthOperations.guardz';

export const isConfig: TypeGuardFn<Config> = isType<Config>({
  auth: isType<{
    users: UserAuthOperations;
  }>({ users: isUserAuthOperations }),
  collections: isType<{
    users: User;
    posts: Post;
    categories: Category;
  }>({ users: isUser, posts: isPost, categories: isCategory }),
  locale: isOneOf<'en' | 'pl'>('en', 'pl'),
  user: isIntersectionOf(
    isUser,
    isType<{
      collection: 'users';
    }>({ collection: isEqualTo('users') }),
  ),
});
