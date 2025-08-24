export type LocaleCode = "en" | "bn";

export type MessageTemplates = {
  // keys roughly map to ZodIssueCode buckets
  invalid_type: string;        // {expected} {received}
  invalid_literal: string;     // {expected} {received}
  invalid_union: string;
  invalid_union_discriminator: string; // {options}
  invalid_enum_value: string;  // {options} {received}
  invalid_arguments: string;
  invalid_return_type: string;
  invalid_date: string;
  invalid_string: string;      // {validation}
  too_small: string;           // {minimum} {inclusive} {type} {exact?}
  too_big: string;             // {maximum} {inclusive} {type} {exact?}
  invalid_intersection_types: string;
  not_multiple_of: string;     // {multipleOf}
  not_finite: string;
  custom: string;              // generic fallback
};

export type LocalePack = {
  name: string;
  templates: MessageTemplates;
};

export const locales: Record<LocaleCode, LocalePack> = {} as any;

export function registerLocale(code: LocaleCode, pack: LocalePack) {
  locales[code] = pack;
}
