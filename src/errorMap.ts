import { z } from "zod";
import { locales } from "./i18n";
import type { LocaleCode } from "./i18n";
import { format, pick } from "./utils";

// Import v4 types
type ZodErrorMap = z.core.$ZodErrorMap;
type ZodRawIssue = z.core.$ZodRawIssue;

function humanType(t: unknown): string {
  if (typeof t === "string") return t;
  if (typeof t === "number") return "number";
  if (typeof t === "boolean") return "boolean";
  if (t instanceof Date) return "date";
  if (Array.isArray(t)) return "array";
  if (t === null) return "null";
  if (t === undefined) return "undefined";
  return typeof t;
}

function normalizeValidation(valid?: string) {
  if (!valid) return "";
  // e.g. " (email)" when validation = "email"
  return ` (${valid})`;
}

export function getErrorMap(locale: LocaleCode): ZodErrorMap {
  const pack = locales[locale] ?? locales["en"]; // fallback

  return (issue: ZodRawIssue) => {
    const T = pack.templates;

    // If user manually set message on schema, prefer it.
    if (issue.message) return { message: issue.message };

    // per-issue parameters used in templates
    const params: Record<string, unknown> = {};

    switch (issue.code) {
      case "invalid_type":
        Object.assign(params, {
          expected: (issue as any).expected,
          received: humanType((issue as any).input)
        });
        return { message: format(T.invalid_type, params) };

      case "invalid_format":
        Object.assign(params, {
          format: (issue as any).format,
          validation: normalizeValidation((issue as any).format)
        });
        return { message: format(T.invalid_format, params) };

      case "invalid_union":
        return { message: T.invalid_union };

      case "invalid_value":
        Object.assign(params, {
          options: (issue as any).values?.join(", "),
          received: String((issue as any).input)
        });
        return { message: format(T.invalid_value, params) };

      case "unrecognized_keys":
        Object.assign(params, { keys: (issue as any).keys?.join(", ") });
        return { message: format(T.unrecognized_keys, params) };

      case "invalid_key":
        return { message: T.invalid_key };

      case "invalid_element":
        return { message: T.invalid_element };

      case "too_small": {
        const base = {
          minimum: (issue as any).minimum,
          inclusive: (issue as any).inclusive ? "" : "+",
          exact: (issue as any).exact,
          origin: (issue as any).origin
        };
        return { message: format(T.too_small, base) };
      }

      case "too_big": {
        const base = {
          maximum: (issue as any).maximum,
          inclusive: (issue as any).inclusive ? "" : "-",
          exact: (issue as any).exact,
          origin: (issue as any).origin
        };
        return { message: format(T.too_big, base) };
      }

      case "not_multiple_of":
        return { message: format(T.not_multiple_of, { divisor: (issue as any).divisor }) };

      case "custom":
      default:
        return { message: T.custom };
    }
  };
}

export function setLocale(locale: LocaleCode) {
  z.config({
    customError: getErrorMap(locale)
  });
}
