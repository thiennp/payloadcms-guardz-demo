import type { Category } from "./payload-types";
import type { TypeGuardFnConfig } from "guardz";
import {
  isEqualTo,
  isNullOr,
  isOneOfTypes,
  isString,
  isType,
  isUndefinedOr,
} from "guardz";

export function isCategory(
  value: unknown,
  config?: TypeGuardFnConfig | null,
): value is Category {
  return isType<Category>({
    id: isString,
    name: isString,
    slug: isString,
    description: isUndefinedOr(isNullOr(isString)),
    parent: isUndefinedOr(
      isNullOr(
        isType<{
          relationTo: "categories";
          value: string | Category;
        }>({
          relationTo: isEqualTo("categories"),
          value: isOneOfTypes<Category | string>(isCategory, isString),
        }),
      ),
    ),
    createdAt: isString,
    updatedAt: isString,
  })(value, config);
}
