// Export the main functions
export { getErrorMap, setLocale } from "./errorMap";
export type { LocaleCode, MessageTemplates, LocalePack } from "./i18n";
export { registerLocale } from "./i18n";

// Import and register built-in locales
import { registerLocale } from "./i18n";
import { en } from "./locales/en";
import { bn } from "./locales/bn";
import { es } from "./locales/es";
import { ru } from "./locales/ru";

// Register built-in locales
registerLocale("en", en);
registerLocale("bn", bn);
registerLocale("es", es);
registerLocale("ru", ru);
