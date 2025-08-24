export type LocaleCode = "en" | "bn" | "es" | "ru" | "jp" | "ko" | "ar" | "cn" | "in";

export type MessageTemplates = {
  // keys map to ZodIssueCode buckets in Zod v4
  invalid_type: string;        // {expected} {received}
  invalid_format: string;      // {format} {validation}
  invalid_union: string;
  invalid_value: string;       // {options} {received}
  unrecognized_keys: string;   // {keys}
  invalid_key: string;
  invalid_element: string;
  too_small: string;           // {minimum} {inclusive} {origin} {exact?}
  too_big: string;             // {maximum} {inclusive} {origin} {exact?}
  not_multiple_of: string;     // {divisor}
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
