import type { LocalePack } from "../i18n";
// Spanish
export const es: LocalePack = {
  name: "Español",
  templates: {
    invalid_type: "Se esperaba {expected}, se recibió {received}.",
    invalid_literal: "Se esperaba el valor literal {expected}, se recibió {received}.",
    invalid_union: "Entrada inválida: no coincide con ningún tipo de unión.",
    invalid_union_discriminator: "Valor de discriminador inválido. Se esperaba uno de {options}.",
    invalid_enum_value: "Valor de enumeración inválido. Se esperaba uno de {options}, se recibió {received}.",
    invalid_arguments: "Argumentos de función inválidos.",
    invalid_return_type: "Tipo de retorno de función inválido.",
    invalid_date: "Fecha inválida.",
    invalid_string: "Cadena inválida{validation}.",
    too_small: "{type} debe ser al menos {minimum}{inclusive}.",
    too_big: "{type} debe ser como máximo {maximum}{inclusive}.",
    invalid_intersection_types: "Los resultados de la intersección no se pudieron combinar.",
    not_multiple_of: "El número debe ser múltiplo de {multipleOf}.",
    not_finite: "El número debe ser finito.",
    custom: "Entrada inválida."
  }
};