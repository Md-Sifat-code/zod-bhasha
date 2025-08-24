import type { LocalePack } from "../i18n";
// Russian
export const ru: LocalePack = {
  name: "Русский",
  templates: {
    invalid_type: "Ожидалось {expected}, получено {received}.",
    invalid_format: "Неверный формат {format}{validation}.",
    invalid_union: "Неверный ввод: не соответствует ни одному из типов объединения.",
    invalid_value: "Неверное значение перечисления. Ожидалось одно из {options}, получено {received}.",
    unrecognized_keys: "Нераспознанные ключи в объекте: {keys}.",
    invalid_key: "Неверный ключ.",
    invalid_element: "Неверный элемент.",
    too_small: "{origin} должно быть не меньше {minimum}{inclusive}.",
    too_big: "{origin} должно быть не больше {maximum}{inclusive}.",
    not_multiple_of: "Число должно быть кратно {divisor}.",
    custom: "Неверный ввод."
  }
};