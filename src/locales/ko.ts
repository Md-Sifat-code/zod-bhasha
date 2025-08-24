import type { LocalePack } from "../i18n";
// Korean
export const ko: LocalePack = {
  name: "한국어",
  templates: {
    invalid_type: "{expected}이(가) 필요하지만 {received}이(가) 전달되었습니다.",
    invalid_format: "잘못된 {format} 형식{validation}입니다.",
    invalid_union: "잘못된 입력: 어떤 유니온 타입과도 일치하지 않습니다.",
    invalid_value: "잘못된 열거형 값입니다. {options} 중 하나여야 하지만 {received}이(가) 전달되었습니다.",
    unrecognized_keys: "객체에서 인식할 수 없는 키: {keys}.",
    invalid_key: "잘못된 키.",
    invalid_element: "잘못된 요소.",
    too_small: "{origin}은(는) 최소 {minimum}{inclusive} 이어야 합니다.",
    too_big: "{origin}은(는) 최대 {maximum}{inclusive} 이어야 합니다.",
    not_multiple_of: "숫자는 {divisor}의 배수여야 합니다.",
    custom: "잘못된 입력입니다."
  }
};