import type { LocalePack } from "../i18n";

export const en: LocalePack = {
  name: "English",
  templates: {
    invalid_type: "Expected {expected}, received {received}.",
    invalid_format: "Invalid {format}{validation}.",
    invalid_union: "Invalid input: did not match any of the union types.",
    invalid_value: "Invalid enum value. Expected one of {options}, received {received}.",
    unrecognized_keys: "Unrecognized key(s) in object: {keys}.",
    invalid_key: "Invalid key.",
    invalid_element: "Invalid element.",
    too_small: "{origin} must be at least {minimum}{inclusive}.",
    too_big: "{origin} must be at most {maximum}{inclusive}.",
    not_multiple_of: "Number must be a multiple of {divisor}.",
    custom: "Invalid input."
  }
};
