import type { LocalePack } from "../i18n";
// Spanish
export const es: LocalePack = {
  name: "Español",
  templates: {
    invalid_type: "Se esperaba {expected}, se recibió {received}.",
    invalid_format: "Formato {format} inválido{validation}.",
    invalid_union: "Entrada inválida: no coincide con ningún tipo de unión.",
    invalid_value: "Valor de enumeración inválido. Se esperaba uno de {options}, se recibió {received}.",
    unrecognized_keys: "Clave(s) no reconocida(s) en el objeto: {keys}.",
    invalid_key: "Clave inválida.",
    invalid_element: "Elemento inválido.",
    too_small: "{origin} debe ser al menos {minimum}{inclusive}.",
    too_big: "{origin} debe ser como máximo {maximum}{inclusive}.",
    not_multiple_of: "El número debe ser múltiplo de {divisor}.",
    custom: "Entrada inválida."
  }
};