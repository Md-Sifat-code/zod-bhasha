import type { LocalePack } from "../i18n";

export const en: LocalePack = {
  name: "English",
  templates: {
    invalid_type: "Expected {expected}, received {received}.",
    invalid_literal: "Expected the literal value {expected}, received {received}.",
    invalid_union: "Invalid input: did not match any of the union types.",
    invalid_union_discriminator: "Invalid discriminator value. Expected one of {options}.",
    invalid_enum_value: "Invalid enum value. Expected one of {options}, received {received}.",
    invalid_arguments: "Invalid function arguments.",
    invalid_return_type: "Invalid function return type.",
    invalid_date: "Invalid date.",
    invalid_string: "Invalid string{validation}.",
    too_small: "{type} must be at least {minimum}{inclusive}.",
    too_big: "{type} must be at most {maximum}{inclusive}.",
    invalid_intersection_types: "Intersection results could not be merged.",
    not_multiple_of: "Number must be a multiple of {multipleOf}.",
    not_finite: "Number must be finite.",
    custom: "Invalid input."
  }
};
