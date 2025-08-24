import type { LocalePack } from "../i18n";
// Russian
export const ru: LocalePack = {
  name: "Русский",
  templates: {
    invalid_type: "Ожидалось {expected}, получено {received}.",
    invalid_literal: "Ожидалось буквальное значение {expected}, получено {received}.",
    invalid_union: "Неверный ввод: не соответствует ни одному из типов объединения.",
    invalid_union_discriminator: "Неверное значение дискриминатора. Ожидалось одно из {options}.",
    invalid_enum_value: "Неверное значение перечисления. Ожидалось одно из {options}, получено {received}.",
    invalid_arguments: "Неверные аргументы функции.",
    invalid_return_type: "Неверный тип возвращаемого значения функции.",
    invalid_date: "Неверная дата.",
    invalid_string: "Неверная строка{validation}.",
    too_small: "{type} должно быть не меньше {minimum}{inclusive}.",
    too_big: "{type} должно быть не больше {maximum}{inclusive}.",
    invalid_intersection_types: "Результаты пересечения не удалось объединить.",
    not_multiple_of: "Число должно быть кратно {multipleOf}.",
    not_finite: "Число должно быть конечным.",
    custom: "Неверный ввод."
  }
};