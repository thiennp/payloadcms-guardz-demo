import type { User, Post } from "./payload-types";
import type { TypeGuardFn } from "guardz";
import {
  isEqualTo,
  isNullOr,
  isOneOf,
  isOneOfTypes,
  isString,
  isType,
  isUndefinedOr,
} from "guardz";
import { isUser } from "./isUser.guardz";

export const isPost: TypeGuardFn<Post> = isType<Post>({
  id: isString,
  title: isString,
  content: isString,
  author: isType<{
    relationTo: "users";
    value: string | User;
  }>({
    relationTo: isEqualTo("users"),
    value: isOneOfTypes<string | User>(isString, isUser),
  }),
  status: isOneOf<"archived" | "draft" | "published">(
    "archived",
    "draft",
    "published",
  ),
  publishedAt: isUndefinedOr(isNullOr(isString)),
  createdAt: isString,
  updatedAt: isString,
});
