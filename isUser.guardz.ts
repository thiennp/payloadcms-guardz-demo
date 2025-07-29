import type { User } from "./payload-types";
import type { TypeGuardFn } from "guardz";
import {
  isArrayWithEachItem,
  isNullOr,
  isNumber,
  isOneOf,
  isString,
  isType,
  isUndefinedOr,
} from "guardz";

export const isUser: TypeGuardFn<User> = isType<User>({
  id: isString,
  localizedField: isString,
  roles: isArrayWithEachItem(
    isOneOf<"admin" | "editor" | "moderator" | "user" | "viewer">(
      "admin",
      "editor",
      "moderator",
      "user",
      "viewer",
    ),
  ),
  updatedAt: isString,
  createdAt: isString,
  email: isString,
  resetPasswordToken: isUndefinedOr(isNullOr(isString)),
  resetPasswordExpiration: isUndefinedOr(isNullOr(isString)),
  salt: isUndefinedOr(isNullOr(isString)),
  hash: isUndefinedOr(isNullOr(isString)),
  loginAttempts: isUndefinedOr(isNullOr(isNumber)),
  lockUntil: isUndefinedOr(isNullOr(isString)),
  password: isUndefinedOr(isNullOr(isString)),
});
